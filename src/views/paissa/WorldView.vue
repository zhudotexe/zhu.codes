<template>
  <!-- # info -->
  <p>
    {{ world.name }} has
    <FlashOnChange :value="worldPlots.length"/>
    open plots, at least
    <FlashOnChange :value="worldPlots.filter(utils.isEntryPhase).length"/>
    of which are available for bidding.
  </p>
  <p v-if="worldPlots.filter(utils.isUnknownOrOutdatedPhase).length">
    <strong>
      <FlashOnChange :value="worldPlots.filter(utils.isUnknownOrOutdatedPhase).length"/>
    </strong>
    plots have unknown or outdated lottery data. You can contribute by installing the
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
            <FilterIcon class="ml-1" v-model:filters="filters" :params="filt.districts"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Size</span>
            <SortIcon class="ml-1" v-model:sorters="sorters" :sorter="sort.size" :inverse-sorter="sort.sizeInverse"/>
            <FilterIcon v-model:filters="filters" :params="filt.sizes"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Price</span>
            <SortIcon class="ml-1" v-model:sorters="sorters" :sorter="sort.price" :inverse-sorter="sort.priceInverse"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Entries</span>
            <SortIcon class="ml-1"
                      v-model:sorters="sorters"
                      :sorter="sort.entries"
                      :inverse-sorter="sort.entriesInverse"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Lottery Phase</span>
            <SortIcon class="ml-1" v-model:sorters="sorters" :sorter="sort.phase" :inverse-sorter="sort.phaseInverse"/>
            <FilterIcon v-model:filters="filters" :params="filt.phases"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Allowed Tenants</span>
            <FilterIcon class="ml-1" v-model:filters="filters" :params="filt.tenants"/>
          </span>
        </th>
        <th>
          <span class="icon-text">
            <span>Last Updated</span>
            <SortIcon class="ml-1"
                      v-model:sorters="sorters"
                      :sorter="sort.updateTime"
                      :inverse-sorter="sort.updateTimeInverse"/>
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
import * as filt from "@/views/paissa/filters";
import * as sort from "@/views/paissa/sorters"
import SortIcon from "@/views/paissa/SortIcon.vue";
import {WorldSummary} from "@/views/paissa/types";
import * as utils from "@/views/paissa/utils";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "WorldView",
  components: {FilterIcon, SortIcon, FlashOnChange},
  props: {
    client: {
      type: PaissaClient,
      required: true
    },
    world: {
      type: Object as PropType<WorldSummary>,
      required: true
    }
  },
  data() {
    return {
      utils,
      sort,
      filt,
      page: 0,
      numPerPage: 50,
      filters: [] as filt.Filter[],
      sorters: [] as sort.Sorter[]
    }
  },
  computed: {
    worldPlots() {
      const allPlots = Array.from(this.client.plotStates.values());
      return allPlots.filter(state => state.world_id === this.world!.id);
    },
    filteredSortedWorldPlots() {
      let plots = [...this.worldPlots];
      // filter
      for (const filter of this.filters) {
        plots = plots.filter(filter);
      }
      // sort: return first non-zero sort
      return plots.sort((a, b) => {
        for (const sorter of this.sorters) {
          const val = sorter(a, b);
          if (val) return val;
        }
        return sort.address(a, b);
      });
    },
    currentPagePlots() {
      return this.filteredSortedWorldPlots.slice(this.page * this.numPerPage, (this.page + 1) * this.numPerPage);
    },
    numPages() {
      return Math.ceil(this.filteredSortedWorldPlots.length / this.numPerPage);
    }
  }
})
</script>

<style scoped>
.table-container {
  min-height: 350px;
}
</style>