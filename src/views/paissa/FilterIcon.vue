<template>
  <div class="dropdown"
       :class="{'is-active': isExpanded}"
       @click="isExpanded = true"
       v-click-outside="() => isExpanded = false">

    <div class="dropdown-trigger">
      <!-- dropdown controller = filter button -->
      <span class="icon m-0 is-clickable" aria-haspopup="true" aria-controls="dropdown-menu">
        <font-awesome-icon :icon="['fas', 'filter']"/>
        {{ selected.length ? selected.length : null }}
      </span>
    </div>

    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item" v-for="option in options" :key="option.value">
          <label class="checkbox">
            <input type="checkbox"
                   :checked="selected.includes(option.value)"
                   @change="onCheckboxChange($event, option.value)">
            {{ option.label }}
          </label>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {FilterOption} from "@/views/paissa/filters";
import vClickOutside from 'click-outside-vue3';
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "FilterIcon",
  props: {
    options: {
      type: Array as PropType<FilterOption<number>[]>,
      required: true
    },
    selected: {
      type: Array as PropType<number[]>,
      required: true
    }
  },
  emits: ['selectionChanged'],
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    onCheckboxChange(event: any, value: number) {
      const selectedOptions = new Set<number>(this.selected);
      if (event.currentTarget.checked) {
        selectedOptions.add(value);
      } else {
        selectedOptions.delete(value);
      }
      this.$emit('selectionChanged', Array.from(selectedOptions));
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
});
</script>

<style scoped>

</style>