<template>
  <img alt="Vue logo" src="assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <bulma></bulma>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import bulma from './components/bulma.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    bulma
  }
});
</script>

<style lang="scss">
@import "./global.scss";
</style>
