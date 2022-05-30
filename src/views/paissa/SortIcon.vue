<template>
  <span class="icon m-0 is-clickable" @click="toggleSortState">
    <font-awesome-icon :icon="['fas', 'sort']" v-if="sortState === 0"/>
    <font-awesome-icon :icon="['fas', 'sort-up']" v-else-if="sortState === 1"/>
    <font-awesome-icon :icon="['fas', 'sort-down']" v-else/>
    {{ sorterIndex !== null ? sorterIndex + 1 : null }}
  </span>
</template>

<script lang="ts">
import {Sorter} from "@/views/paissa/sorters";
import {defineComponent, PropType} from "vue";

const enum SortState {
  NONE = 0,
  ASC = 1,
  DESC = 2
}

export default defineComponent({
  name: "SortIcon",
  props: {
    sorter: {
      type: Function as PropType<Sorter>,
      required: true
    },
    inverseSorter: {
      type: Function as PropType<Sorter>,
    },
    sorters: {
      type: Array as PropType<Sorter[]>,
      required: true
    }
  },
  emits: ['update:sorters'],
  data() {
    return {
      sortState: SortState.NONE,
    }
  },
  computed: {
    sorterIndex(): number | null {
      if (this.sortState === SortState.ASC) return this.sorters.indexOf(this.sorter);
      if (this.sortState === SortState.DESC && this.inverseSorter) return this.sorters.indexOf(this.inverseSorter);
      return null;
    }
  },
  methods: {
    toggleSortState() {
      let newSorters;
      if (this.sortState === SortState.NONE) {
        newSorters = this.addSorter();
        this.sortState = SortState.ASC;
      } else if (this.sortState === SortState.ASC) {
        if (this.inverseSorter) {
          newSorters = this.updateSorterDesc();
          this.sortState = SortState.DESC;
        } else {
          newSorters = this.removeSorter();
          this.sortState = SortState.NONE;
        }
      } else {
        newSorters = this.removeSorter();
        this.sortState = SortState.NONE;
      }
      this.$emit('update:sorters', newSorters);
    },
    addSorter() {
      const newSorters = [...this.sorters];
      newSorters.push(this.sorter);
      return newSorters;
    },
    updateSorterDesc() {
      const index = this.sorterIndex!;
      const newSorters = [...this.sorters];
      newSorters[index] = this.inverseSorter!;
      return newSorters;
    },
    removeSorter() {
      const index = this.sorterIndex!;
      const newSorters = [...this.sorters];
      newSorters.splice(index, 1);
      return newSorters;
    },
  }
});
</script>

<style scoped>

</style>