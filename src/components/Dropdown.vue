<template>
  <div class="dropdown"
       :class="{'is-active': isExpanded}"
       @click="isExpanded = !isExpanded"
       v-click-outside="() => isExpanded = false">
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

<script>
import vClickOutside from 'click-outside-vue3';

export default {
  name: "Dropdown",
  props: ["label"],
  data() {
    return {isExpanded: false};
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
}
</script>

<style scoped>

</style>

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