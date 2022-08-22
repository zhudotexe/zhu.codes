<!-- This component displays the current time, updated each second. Use fmtOptions to change the display. -->
<script setup lang="ts">
import {DateTime} from "luxon";
import {computed, onMounted, ref} from "vue";

// setup
const DEFAULT_TIME_ZONE = 'system';
const DEFAULT_FORMAT = DateTime.TIME_SIMPLE;
const props = defineProps<{
  fmtOptions?: Intl.DateTimeFormatOptions;
  toTimeZone?: string;
}>();

// data
const time = ref(DateTime.now().setZone(props.toTimeZone ?? DEFAULT_TIME_ZONE));

// methods
function updateTime() {
  time.value = DateTime.now().setZone(props.toTimeZone ?? DEFAULT_TIME_ZONE);
}

// hooks
onMounted(() => {
  setInterval(updateTime, 1000)
});

// computed
const timeStr = computed(() => time.value.toLocaleString(props.fmtOptions ?? DEFAULT_FORMAT));
</script>

<template>
  {{ timeStr }}
</template>
