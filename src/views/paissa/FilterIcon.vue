<template>
  <div class="dropdown"
       :class="{'is-active': isExpanded}"
       @click="isExpanded = true"
       v-click-outside="() => isExpanded = false">

    <div class="dropdown-trigger">
      <!-- dropdown controller = filter button -->
      <span class="icon m-0 is-clickable" aria-haspopup="true" aria-controls="dropdown-menu">
        <font-awesome-icon :icon="['fas', 'filter']"/>
        {{ selectedOptions.size ? selectedOptions.size : null }}
      </span>
    </div>

    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item" v-for="option in filterOpts.options" :key="option.value">
          <label class="checkbox">
            <input type="checkbox"
                   :checked="selectedOptions.has(option.value)"
                   @change="onCheckboxChange($event, option.value)">
            {{ option.label }}
          </label>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Filter, filters} from "@/views/paissa/filters";
import vClickOutside from 'click-outside-vue3';
import {isArray} from "lodash";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "FilterIcon",
  props: {
    filterId: {
      type: String,
      required: true
    },
    filters: {
      type: Array as PropType<[string, Filter][]>,
      required: true
    }
  },
  emits: ['update:filters'],
  data() {
    return {
      selectedOptions: new Set<number>(),
      isExpanded: false
    }
  },
  mounted() {
    // if the filter is in the query param and valid, set it up
    // ensure query params are array
    let filterQuery = this.$route.query[this.filterId];
    if (!filterQuery) return;
    if (!isArray(filterQuery)) {
      filterQuery = [filterQuery];
    }
    // find the valid options
    let validOptions = [];
    for (const queryElem of filterQuery) {
      const matchingOption = this.filterOpts.options.find(option => option.value === +(queryElem ?? 0));
      if (matchingOption) {
        validOptions.push(matchingOption.value);
      }
    }
    // and init the filter
    if (validOptions.length) {
      this.selectedOptions = new Set<number>(validOptions);
      this.onNewSelectedOptions(validOptions);
    }
  },
  computed: {
    filterOpts() {
      return filters[this.filterId];
    }
  },
  methods: {
    onCheckboxChange(event: any, value: number) {
      if (event.currentTarget.checked) {
        this.selectedOptions.add(value);
      } else {
        this.selectedOptions.delete(value);
      }
      this.onNewSelectedOptions(Array.from(this.selectedOptions));
    },
    findFilterIndex(arr: [string, Filter][]): number | null {
      const idx = arr.findIndex(([id, _]) => id === this.filterId);
      return idx !== -1 ? idx : null;
    },
    onNewSelectedOptions(options: number[]) {
      // set the filter query params
      if (!options.length) {
        this.$router.replace({query: {...this.$route.query, [this.filterId]: undefined}});
      } else {
        this.$router.replace({query: {...this.$route.query, [this.filterId]: options}});
      }

      // update the filter array in the parent
      let newFilters = [...this.filters];
      const existingFilterIdx = this.findFilterIndex(newFilters);
      if (existingFilterIdx !== null) {
        if (!options.length) {
          // remove existing filter
          newFilters.splice(existingFilterIdx, 1);
        } else {
          // update existing filter
          const newFilterInst = this.filterOpts.strategy(options);
          newFilters[existingFilterIdx] = [this.filterId, newFilterInst];
        }
      } else if (options.length) {
        // create new filter
        const newFilterInst = this.filterOpts.strategy(options);
        newFilters.push([this.filterId, newFilterInst]);
      }
      this.$emit('update:filters', newFilters);
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
});
</script>

<style scoped>

</style>