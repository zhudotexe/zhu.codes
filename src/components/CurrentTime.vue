<!-- This component displays the current time, updated each second. Use fmtOptions to change the display. -->
<template>
  {{ timeStr }}
</template>

<script>
import {DateTime} from "luxon";

export default {
  name: "CurrentTime",
  props: {
    fmtOptions: {
      default: DateTime.TIME_SIMPLE
    },
    toTimeZone: {
      type: String,
      default: "system"
    }
  },
  mounted() {
    setInterval(this.updateTime, 1000);
  },
  data() {
    return {
      time: DateTime.now().setZone(this.toTimeZone)
    }
  },
  methods: {
    updateTime() {
      this.time = DateTime.now().setZone(this.toTimeZone);
    }
  },
  computed: {
    timeStr() {
      return this.time.toLocaleString(this.fmtOptions);
    }
  }
}
</script>

<style scoped>

</style>