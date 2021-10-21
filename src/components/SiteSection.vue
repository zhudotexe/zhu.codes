<template>
  <div class="container">

    <h1 class="title">
      {{ name }}
    </h1>
    <h2 class="subtitle">
      blep
    </h2>

    <slot></slot>

  </div>
</template>

<script>
export default {
  name: "SiteSection",
  props: ['name']
}
</script>

<style scoped>

</style>