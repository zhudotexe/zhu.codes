<script setup lang="ts">
import FlashOnChange from "@/components/FlashOnChange.vue";
import type {PaissaClient} from "@/views/paissa/client";
import {computed, onMounted, onUnmounted, reactive} from "vue";
import type {WSMessage} from "@/views/paissa/types";
import * as utils from "@/views/paissa/utils";

// setup
const props = defineProps<{
  client: PaissaClient;
}>();

// state
const events = reactive<WSMessage[]>([]);

function onWSMessage(msg: WSMessage) {
  events.push(msg);
}

const sortedEvents = computed(() => {
  const sorted = events.filter((e) => e.type !== "ping");
  return sorted.reverse();
});
// hooks
onMounted(() => {
  props.client.addEventListener(onWSMessage);
});
onUnmounted(() => {
  props.client.removeEventListener(onWSMessage);
});
</script>

<template>
  <!-- # info -->
  <p>
    Since loading the page, there have been
    <FlashOnChange :value="events.length" />
    events.
  </p>
  <!-- /# info -->

  <div class="table-container mt-4">
    <table class="table is-striped is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Event</th>
          <th>World</th>
          <th>District</th>
          <th>Ward</th>
          <th>Plot</th>
          <th>Size</th>
          <th>Allowed Tenants</th>
          <th>Timestamp</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="event in sortedEvents"
          :key="
            [event.data.world_id, event.data.district_id, event.data.ward_number, event.data.plot_number].toString()
          "
        >
          <td>{{ event.type.toUpperCase() }}</td>
          <td>{{ client.worldName(event.data.world_id) }}</td>
          <td>{{ client.districtName(event.data.district_id) }}</td>
          <td>Ward {{ event.data.ward_number + 1 }}</td>
          <td>Plot {{ event.data.plot_number + 1 }}</td>
          <td>{{ utils.sizeStr(event.data.size) }}</td>
          <td>{{ utils.tenantStr(event.data.purchase_system) }}</td>
          <td>{{ utils.updatedStr(event.data.last_updated_time) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  min-height: 350px;
}
</style>
