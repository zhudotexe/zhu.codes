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
        <div class="dropdown-item" v-for="option in params.options" :key="option.value">
          <label class="checkbox">
            <input type="checkbox" @change="onCheckboxChange($event, option.value)">
            {{ option.label }}
          </label>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Filter, FilterParams} from "@/views/paissa/filters";
import {defineComponent, PropType} from "vue";
import vClickOutside from 'click-outside-vue3';

export default defineComponent({
  name: "FilterIcon",
  props: {
    params: {
      type: Object as PropType<FilterParams<any>>,
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
      selectedOptions: new Set(),
      nonce: (Math.random() + 1).toString(36).substring(7),
      isExpanded: false
    }
  },
  methods: {
    onCheckboxChange(event: any, value: any) {
      if (event.currentTarget.checked) {
        this.selectedOptions.add(value);
      } else {
        this.selectedOptions.delete(value);
      }
      this.onNewSelectedOptions(Array.from(this.selectedOptions));
    },
    findFilterIndex(arr: [string, Filter][]): number | null {
      const idx = arr.findIndex(([nonce, _]) => nonce === this.nonce);
      return idx !== -1 ? idx : null;
    },
    onNewSelectedOptions(options: any[]) {
      let newFilters = [...this.filters]
      const existingFilterIdx = this.findFilterIndex(newFilters);
      if (existingFilterIdx !== null) {
        if (!options.length) {
          // remove existing filter
          newFilters.splice(existingFilterIdx, 1);
        } else {
          // update existing filter
          const newFilterInst = this.params.strategy(options);
          newFilters[existingFilterIdx] = [this.nonce, newFilterInst];
        }
      } else if (options.length) {
        // create new filter
        const newFilterInst = this.params.strategy(options);
        newFilters.push([this.nonce, newFilterInst]);
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