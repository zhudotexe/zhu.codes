<template>
  <!-- # info -->
  <p>
    {{ client.worldName(worldId) }} has
    <FlashOnChange :value="worldPlots.length"/>
    open plots, at least
    <FlashOnChange :value="worldPlots.filter(utils.isEntryPhase).length"/>
    of which are available for bidding.
  </p>
  <p v-if="worldPlots.filter(utils.isUnknownOrOutdatedPhase).length">
    <strong>
      <FlashOnChange :value="worldPlots.filter(utils.isUnknownOrOutdatedPhase).length"/>
    </strong>
    plots have missing or outdated lottery data. You can contribute by installing the
    <a href="https://github.com/zhudotexe/FFXIV_PaissaHouse#lottery-sweeps" target="_blank">
      PaissaHouse XIVLauncher plugin
    </a>
    and clicking on the placard of any outdated plot in-game. This site will update in real time!
  </p>
  <!-- /# info -->

  <div class="table-container mt-4">
    <table class="table is-striped is-fullwidth is-hoverable">
      <thead>
      <tr>
        <th>
          <span class="icon-text">
            <span>Address</span>
            <FilterIcon class="ml-1"
                        :options="filters.districts.options"
                        :selected="getSelectedFilterOptions('districts')"
                        @selectionChanged="onFilterSelectionChange('districts', $event)"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Size</span>
            <SortIcon class="ml-1"
                      :index="getSortIndex('size')"
                      :direction="getSortDirection('size')"
                      @directionChanged="onSortDirectionChange('size', $event)"/>
            <FilterIcon :options="filters.sizes.options"
                        :selected="getSelectedFilterOptions('sizes')"
                        @selectionChanged="onFilterSelectionChange('sizes', $event)"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Price</span>
            <SortIcon class="ml-1"
                      :index="getSortIndex('price')"
                      :direction="getSortDirection('price')"
                      @directionChanged="onSortDirectionChange('price', $event)"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Entries</span>
            <SortIcon class="ml-1"
                      :index="getSortIndex('entries')"
                      :direction="getSortDirection('entries')"
                      @directionChanged="onSortDirectionChange('entries', $event)"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Lottery Phase</span>
            <SortIcon class="ml-1"
                      :index="getSortIndex('phase')"
                      :direction="getSortDirection('phase')"
                      @directionChanged="onSortDirectionChange('phase', $event)"/>
            <FilterIcon :options="filters.phases.options"
                        :selected="getSelectedFilterOptions('phases')"
                        @selectionChanged="onFilterSelectionChange('phases', $event)"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Allowed Tenants</span>
            <FilterIcon class="ml-1"
                        :options="filters.tenants.options"
                        :selected="getSelectedFilterOptions('tenants')"
                        @selectionChanged="onFilterSelectionChange('tenants', $event)"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Last Updated</span>
            <SortIcon class="ml-1"
                      :index="getSortIndex('updateTime')"
                      :direction="getSortDirection('updateTime')"
                      @directionChanged="onSortDirectionChange('updateTime', $event)"/>
          </span>
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="plot in currentPagePlots"
          :key="[plot.world_id, plot.district_id, plot.ward_number, plot.plot_number]">
        <td>
          {{ client.districtName(plot.district_id) }}, Ward {{ plot.ward_number + 1 }}, Plot
          {{ plot.plot_number + 1 }}
        </td>
        <td>{{ utils.sizeStr(plot.size) }}</td>
        <td>{{ plot.price.toLocaleString() }}</td>
        <td>
          <FlashOnChange :value="utils.lotteryEntryCountStr(plot)"
                         :class="{'is-italic': utils.shouldEm(plot)}"/>
        </td>
        <td>
          <FlashOnChange :value="utils.lotteryPhaseStr(plot)" :class="{'is-italic': utils.shouldEm(plot)}"/>
        </td>
        <td>{{ utils.tenantStr(plot.purchase_system) }}</td>
        <td>
          <FlashOnChange :value="utils.updatedStr(plot.last_updated_time)"/>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="level" v-if="numPages > 1">
      <p class="level-item">
        <button class="button mr-2" v-if="page > 0" @click="page--">
          <span class="icon is-small">
            <font-awesome-icon :icon="['fas', 'angle-left']"/>
          </span>
        </button>
        <span>Page {{ page + 1 }} / {{ numPages }}</span>
        <button class="button ml-2" v-if="page < numPages - 1" @click="page++">
          <span class="icon is-small">
            <font-awesome-icon :icon="['fas', 'angle-right']"/>
          </span>
        </button>
      </p>
    </div>

  </div>
</template>

<script lang="ts">
import FlashOnChange from "@/components/FlashOnChange.vue";
import {PaissaClient} from "@/views/paissa/client";
import FilterIcon from "@/views/paissa/FilterIcon.vue";
import {filters} from "@/views/paissa/filters";
import {addressSorter, sorters, SortOrder} from "@/views/paissa/sorters";
import SortIcon from "@/views/paissa/SortIcon.vue";
import * as utils from "@/views/paissa/utils";
import {defineComponent} from "vue";

export default defineComponent({
  name: "WorldView",
  components: {FilterIcon, SortIcon, FlashOnChange},
  props: {
    client: {
      type: PaissaClient,
      required: true
    },
    worldId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // useful modules
      utils,
      filters,
      sorters,
      // pagination
      page: 0,
      numPerPage: 50,
      // filtering
      filterSelections: {} as { [filterKey: string]: Set<number> },
      // sorting
      sortOrders: new Map<string, SortOrder>()
    }
  },
  computed: {
    worldPlots() {
      const allPlots = Array.from(this.client.plotStates.values());
      return allPlots.filter(state => state.world_id === this.worldId);
    },
    filteredSortedWorldPlots() {
      let plots = [...this.worldPlots];
      // filter
      for (const [filterKey, selected] of Object.entries(this.filterSelections)) {
        const filterImpl = filters[filterKey];
        if (!filterImpl) continue;
        plots = plots.filter(filterImpl.strategy(Array.from(selected)));
      }
      // sort: return first non-zero sort
      return plots.sort((a, b) => {
        for (const [sorterKey, direction] of this.sortOrders) {
          const sorterImpl = sorters[sorterKey];
          if (!sorterImpl) continue;
          let val = 0;
          if (direction === SortOrder.ASC) {
            val = sorterImpl.asc(a, b);
          } else if (direction === SortOrder.DESC && sorterImpl.desc) {
            val = sorterImpl.desc(a, b);
          }
          if (val) return val;
        }
        return addressSorter(a, b);
      });
    },
    currentPagePlots() {
      return this.filteredSortedWorldPlots.slice(this.page * this.numPerPage, (this.page + 1) * this.numPerPage);
    },
    numPages() {
      return Math.ceil(this.filteredSortedWorldPlots.length / this.numPerPage);
    }
  },
  methods: {
    // filters
    getSelectedFilterOptions(filterKey: string): number[] {
      const selected = this.filterSelections[filterKey] as (Set<number> | undefined);
      if (selected !== undefined) {
        return Array.from(selected);
      }
      return [];
    },
    onFilterSelectionChange(filterKey: string, selected: number[]) {
      if (!selected.length) {
        delete this.filterSelections[filterKey];
        this.$router.replace({query: {...this.$route.query, [filterKey]: undefined}});
      } else {
        this.filterSelections[filterKey] = new Set<number>(selected);
        this.$router.replace({query: {...this.$route.query, [filterKey]: selected}});
      }
    },
    // sorters
    getSortIndex(sorterKey: string): number | null {
      const idx = Array.from(this.sortOrders.keys()).indexOf(sorterKey);
      return idx === -1 ? null : idx;
    },
    getSortDirection(sorterKey: string): SortOrder {
      return this.sortOrders.get(sorterKey) ?? SortOrder.NONE;
    },
    onSortDirectionChange(sorterKey: string, direction: SortOrder) {
      if (direction === SortOrder.NONE) {
        this.sortOrders.delete(sorterKey);
      } else {
        this.sortOrders.set(sorterKey, direction);
      }
      this.$router.replace({query: {...this.$route.query, sort: this.buildSortQueryParam()}});
    },
    buildSortQueryParam(): string[] {
      const result = [];
      for (const [sorterKey, direction] of this.sortOrders) {
        result.push(`${sorterKey}:${direction}`)
      }
      return result;
    }
  }
})
</script>

<style scoped>
.table-container {
  min-height: 350px;
}
</style>