<!-- This component displays a given time, updated each second. Use fmtOptions to change the display. -->
<template>
  {{ timeStr }}
</template>

<script lang="ts">
import {DateTime} from "luxon";
import {defineComponent, PropType} from "vue";

// formats like https://hammertime.cyou/
type DateTimeFormat = 'date'
    | 'dateDay'
    | 'time'
    | 'timeSecs'
    | 'datetime'
    | 'datetimeWeekday'
    | 'relative'
    | 'timestamp';

export default defineComponent({
  name: "TimeDisplay",
  props: {
    time: {
      type: Number,
      required: true
    },
    format: {
      default: 'time',
      type: String as PropType<DateTimeFormat>
    }
  },
  mounted() {
    setInterval(this.$forceUpdate, 1000);
  },
  data() {
    return {
      luxonTime: DateTime.fromSeconds(this.time)
    }
  },
  computed: {
    timeStr() {
      switch (this.format) {
        case 'date':
          return this.luxonTime.toLocaleString(DateTime.DATE_SHORT);
        case 'dateDay':
          return this.luxonTime.toLocaleString(DateTime.DATE_FULL);
        case 'time':
          return this.luxonTime.toLocaleString(DateTime.TIME_SIMPLE);
        case 'timeSecs':
          return this.luxonTime.toLocaleString(DateTime.TIME_WITH_SECONDS);
        case 'datetime':
          return `${this.luxonTime.toLocaleString(DateTime.DATE_FULL)} ${this.luxonTime.toLocaleString(DateTime.TIME_SIMPLE)}`;
        case 'datetimeWeekday':
          return `${this.luxonTime.toLocaleString(DateTime.DATE_HUGE)} ${this.luxonTime.toLocaleString(DateTime.TIME_SIMPLE)}`;
        case 'relative':
          return this.luxonTime.toRelative();
        default:
          return this.luxonTime.toSeconds().toString();
      }
    }
  }
});
</script>

<style scoped>

</style>