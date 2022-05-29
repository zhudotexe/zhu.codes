<template>
  <transition mode="out-in">
    <span :key="value">
      {{ value }}
    </span>
  </transition>
</template>

<script>
export default {
  name: "FlashOnChange",
  props: ['value']
}
</script>

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