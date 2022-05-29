<template>
  <div class="dropdown"
       :class="{'is-active': isExpanded}"
       @click="isExpanded = !isExpanded"
       @focus="isExpanded = true"
       @focusout="isExpanded = false"
       tabindex="0">
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
export default {
  name: "Dropdown",
  props: ["label"],
  data() {
    return {isExpanded: false};
  }
}
</script>

<style scoped>
.dropdown {
  outline: none;
}
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