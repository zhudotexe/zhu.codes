<template>
  <span class="icon m-0 is-clickable" @click="cycleSortState">
    <font-awesome-icon :icon="['fas', 'sort']" v-if="sortState === 0"/>
    <font-awesome-icon :icon="['fas', 'sort-up']" v-else-if="sortState === 1"/>
    <font-awesome-icon :icon="['fas', 'sort-down']" v-else/>
    {{ findSorterIndex(this.sorters) !== null ? findSorterIndex(this.sorters) + 1 : null }}
  </span>
</template>

<script lang="ts">
import {Filter} from "@/views/paissa/filters";
import {Sorter, sorters, SortState} from "@/views/paissa/sorters";
import {isArray} from "lodash";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "SortIcon",
  props: {
    sorterId: {
      type: String,
      required: true
    },
    inverseSorterId: {
      type: String,
    },
    sorters: {
      type: Array as PropType<[string, Sorter][]>,
      required: true
    }
  },
  emits: ['update:sorters'],
  data() {
    return {
      sortState: SortState.NONE as SortState,
    }
  },
  mounted() {
    // if the sorter is in the query param and valid, set it up
    // ensure query params are array
    let sortQuery = this.$route.query.sort;
    if (!sortQuery) return;
    if (!isArray(sortQuery)) {
      sortQuery = [sortQuery];
    }
    // find if our sorter is in there
    let newSorters = this.sorters;
    if (sortQuery.includes(this.sorterId)) {
      this.sortState = SortState.ASC;
    } else if (this.inverseSorterId && sortQuery.includes(this.inverseSorterId)) {
      this.sortState = SortState.DESC;
    }
    // HACK: delay the update a number of ticks equal to the index to ensure correct ordering
    let delay = sortQuery.findIndex(id => id === this.sorterId || id === this.inverseSorterId);
    console.log(this.sorterId, delay)
    const hack = () => {
      if (delay < 0) {
        console.log(this.sorterId, 'running update')
        this.updateSorterState();
      } else {
        delay--;
        this.$nextTick(() => hack());
      }
    };
    this.$nextTick(() => hack());
  },
  computed: {
    sorter(): Sorter {
      return sorters[this.sorterId];
    },
    inverseSorter(): Sorter | null {
      if (!this.inverseSorterId) return null;
      return sorters[this.inverseSorterId];
    }
  },
  methods: {
    findSorterIndex(arr: [string, Sorter][]): number | null {
      const idx = arr.findIndex(([id, _]) => id === this.sorterId || id === this.inverseSorterId);
      return idx !== -1 ? idx : null;
    },
    cycleSortState() {
      if (this.sortState === SortState.NONE) {
        this.sortState = SortState.ASC;
      } else if (this.sortState === SortState.ASC) {
        if (this.inverseSorterId) {
          this.sortState = SortState.DESC;
        } else {
          this.sortState = SortState.NONE;
        }
      } else {
        this.sortState = SortState.NONE;
      }
      const newSorters = this.updateSorterState();
      // set the sorter query params
      this.$router.replace({query: {...this.$route.query, sort: newSorters.map(([id, _]) => id)}});
    },
    updateSorterState() {
      // update the parent sorter array
      let newSorters;
      if (this.sortState === SortState.ASC) {
        newSorters = this.updateSorterAsc();
      } else if (this.sortState === SortState.DESC) {
        newSorters = this.updateSorterDesc();
      } else {
        newSorters = this.removeSorter();
      }
      this.$emit('update:sorters', newSorters);
      console.log(newSorters)
      return newSorters;
    },
    updateSorterAsc() {
      const newSorters = [...this.sorters];
      const index = this.findSorterIndex(newSorters);
      if (index !== null) {
        newSorters[index] = [this.sorterId, this.sorter];
      } else {
        newSorters.push([this.sorterId, this.sorter]);
      }
      return newSorters;
    },
    updateSorterDesc() {
      const newSorters = [...this.sorters];
      const index = this.findSorterIndex(newSorters);
      if (index !== null) {
        newSorters[index] = [this.inverseSorterId!, this.inverseSorter!];
      } else {
        newSorters.push([this.inverseSorterId!, this.inverseSorter!]);
      }
      return newSorters;
    },
    removeSorter() {
      const newSorters = [...this.sorters];
      const index = this.findSorterIndex(newSorters);
      if (index === null) return newSorters;
      newSorters.splice(index, 1);
      return newSorters;
    },
  }
});
</script>

<style scoped>

</style>