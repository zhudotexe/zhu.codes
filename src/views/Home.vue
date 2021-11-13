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

<script>
import BulmaDemo from '@/components/BulmaDemo.vue'
import Heading from "@/components/Heading.vue";
import SiteSection from "@/components/SiteSection.vue";

export default {
  name: 'Home',
  components: {
    SiteSection,
    Heading,
    BulmaDemo
  }
}
</script>
