<script setup lang="ts">
import type {FilterOption} from "@/views/paissa/filters";
import clickOutside from "click-outside-vue3";
import {defineProps, ref} from "vue";

// setup
const props = defineProps<{
  options: FilterOption<number>[];
  selected: number[];
}>();
const emit = defineEmits<{
  (e: "selectionChanged", selectedOptions: number[]): void;
}>();
const vClickOutside = clickOutside.directive;

// state
const isExpanded = ref(false);

// methods
function onButtonClick(event: any, value: number) {
  const selectedOptions = new Set<number>(props.selected);

  if (selectedOptions.has(value)) {
    selectedOptions.delete(value);
  } else {
    selectedOptions.add(value);
  }
  emit("selectionChanged", Array.from(selectedOptions));
}

function onClick() {
  isExpanded.value = true;
}

function onClickOutside() {
  isExpanded.value = false;
}
</script>

<template>
  <div class="dropdown" :class="{'is-active': isExpanded}" @click="onClick" v-click-outside="onClickOutside">
    <div class="dropdown-trigger">
      <!-- dropdown controller = filter button -->
      <span class="icon m-0 is-clickable" aria-haspopup="true" aria-controls="dropdown-menu">
        <font-awesome-icon :icon="['fas', 'filter']" />
        {{ selected.length ? selected.length : null }}
      </span>
    </div>

    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <div style="width: 440px">
            <button
              v-for="option in options"
              style="width: 40px"
              :class="['button mr-1 mb-1', selected.includes(option.value) ? 'is-primary' : '']"
              @click="onButtonClick($event, option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
