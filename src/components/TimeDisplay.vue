<!-- This component displays a given time, updated each second. Use fmtOptions to change the display. -->
<script setup lang="ts">
import {DateTime} from "luxon";
import {computed, getCurrentInstance, onMounted, ref} from "vue";

// formats like https://hammertime.cyou/
type DateTimeFormat =
  | "date"
  | "dateDay"
  | "time"
  | "timeSecs"
  | "datetime"
  | "datetimeWeekday"
  | "relative"
  | "timestamp";

const props = defineProps<{
  time: number;
  format: DateTimeFormat;
}>();

const luxonTime = ref(DateTime.fromSeconds(props.time));

const timeStr = computed(() => {
  switch (props.format) {
    case "date":
      return luxonTime.value.toLocaleString(DateTime.DATE_SHORT);
    case "dateDay":
      return luxonTime.value.toLocaleString(DateTime.DATE_FULL);
    case "time":
      return luxonTime.value.toLocaleString(DateTime.TIME_SIMPLE);
    case "timeSecs":
      return luxonTime.value.toLocaleString(DateTime.TIME_WITH_SECONDS);
    case "datetime":
      return `${luxonTime.value.toLocaleString(DateTime.DATE_FULL)} ${luxonTime.value.toLocaleString(
        DateTime.TIME_SIMPLE
      )}`;
    case "datetimeWeekday":
      return `${luxonTime.value.toLocaleString(DateTime.DATE_HUGE)} ${luxonTime.value.toLocaleString(
        DateTime.TIME_SIMPLE
      )}`;
    case "relative":
      return luxonTime.value.toRelative();
    default:
      return luxonTime.value.toSeconds().toString();
  }
});

onMounted(() =>
  setInterval(() => {
    const instance = getCurrentInstance();
    instance?.proxy?.$forceUpdate();
  }, 1000)
);
</script>

<template>
  {{ timeStr }}
</template>
