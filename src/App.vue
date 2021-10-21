<template>
  <Heading></Heading>

  <SiteSection name="About Me">
    foobar
  </SiteSection>

  <SiteSection name="Another Section">
    blep
  </SiteSection>

  <BulmaDemo></BulmaDemo>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BulmaDemo from '@/components/BulmaDemo.vue'
import Heading from "@/components/Heading.vue";
import SiteSection from "@/components/SiteSection.vue";

export default defineComponent({
  name: 'App',
  components: {
    SiteSection,
    Heading,
    BulmaDemo
  }
});
</script>

<style lang="scss">
@import "./global.scss";
</style>
