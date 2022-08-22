<script setup lang="ts">
defineProps<{ value: any }>();
</script>

<template>
  <transition mode="out-in">
    <span :key="value">
      {{ value }}
    </span>
  </transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 100ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 30%;
}
</style>