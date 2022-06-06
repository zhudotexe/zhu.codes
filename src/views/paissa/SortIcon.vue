<template>
  <span class="icon m-0 is-clickable" @click="cycleSortState">
    <font-awesome-icon :icon="['fas', 'sort']" v-if="direction === 0"/>
    <font-awesome-icon :icon="['fas', 'sort-up']" v-else-if="direction === 1"/>
    <font-awesome-icon :icon="['fas', 'sort-down']" v-else/>
    {{ index !== null ? index + 1 : null }}
  </span>
</template>

<script lang="ts">
import {SortOrder} from "@/views/paissa/sorters";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "SortIcon",
  props: {
    index: {
      // type: number | null
      required: true
    },
    direction: {
      type: Number as PropType<SortOrder>,
      required: true
    },
    allowSortDesc: {
      type: Boolean,
      default: true
    }
  },
  emits: ['directionChanged'],
  methods: {
    cycleSortState() {
      if (this.direction === SortOrder.NONE) {
        this.$emit('directionChanged', SortOrder.ASC)
      } else if (this.direction === SortOrder.ASC) {
        if (this.allowSortDesc) {
          this.$emit('directionChanged', SortOrder.DESC)
        } else {
          this.$emit('directionChanged', SortOrder.NONE)
        }
      } else {
        this.$emit('directionChanged', SortOrder.NONE)
      }
    }
  }
});
</script>

<style scoped>

</style>