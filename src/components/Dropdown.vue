<script setup lang="ts">
import clickOutside from 'click-outside-vue3';
import {ref} from "vue";

defineProps<{ label: string }>();
const vClickOutside = clickOutside.directive;

const isExpanded = ref(false);

function onButtonClick() {
  isExpanded.value = !isExpanded.value;
}

function onClickOutside() {
  isExpanded.value = false;
}
</script>

<template>
  <div class="dropdown"
       :class="{'is-active': isExpanded}"
       @click="onButtonClick"
       v-click-outside="onClickOutside">
    <div class="dropdown-trigger">
      <button class="button is-info" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{ label }}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<!--
usage:
<Dropdown class="mr-2"
          v-for="([datacenterName, worlds], idx) in worldGroups"
          :key="idx"
          :label="datacenterName">
  <a class="dropdown-item" v-for="world in worlds" :key="world.id">
    {{ world.name }}
  </a>
</Dropdown>
-->