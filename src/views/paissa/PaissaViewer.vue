<script setup lang="ts">
import Dropdown from "@/components/Dropdown.vue";
import KofiButton from "@/components/KofiButton.vue";
import {PaissaClient} from "@/views/paissa/client";
import type {WorldSummary} from "@/views/paissa/types";
import WorldView from "@/views/paissa/WorldView.vue";
import {groupBy} from "lodash";
import {computed, onMounted, onUnmounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import EventLog from "@/views/paissa/EventLog.vue";

// setup
const router = useRouter();
const route = useRoute();

// state
const client = reactive(new PaissaClient());
const loadingWorldList = ref(true);
const selectedWorldId = ref<number | null>(null);
const loadingWorld = ref(false);
const showEventLog = ref(false);

// computed
const worldGroups = computed<[string, WorldSummary[]][]>(() => {
  let worlds = client.worlds;
  worlds.sort((a, b) => a.datacenter_name.localeCompare(b.datacenter_name) || a.name.localeCompare(b.name));
  return Object.entries(groupBy(worlds, (world: WorldSummary) => world.datacenter_name));
});

// methods
async function onSelectWorld(world: WorldSummary) {
  // update the world query param
  await router.replace({query: {...route.query, world: world.id}});
  // load the worlds
  await loadWorld(world.id);
}

async function loadWorld(worldId: number) {
  selectedWorldId.value = worldId;
  loadingWorld.value = true;
  await client.loadWorld(worldId);
  loadingWorld.value = false;
}

// hooks
onMounted(async () => {
  client.init();
  await client.getWorlds();
  loadingWorldList.value = false;
  // if the world is in the query param and valid, select it
  const worldQuery = route.query.world;
  if (worldQuery) {
    const worldId = +worldQuery;
    if (client.worldMap.has(worldId)) {
      await loadWorld(worldId);
    }
  }
});
onUnmounted(() => client.close());
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- title -->
      <h3 class="title">
        <a @click="showEventLog = !showEventLog">
          <img src="@/assets/PaissaLogo.png" alt="PaissaHouse Logo" class="paissa-logo" />
        </a>
        PaissaDB
      </h3>
      <h5 class="subtitle">
        A list of houses for sale in Final Fantasy XIV, how many lottery bids are on each, and where to contribute using
        the
        <a href="https://github.com/zhudotexe/FFXIV_PaissaHouse" target="_blank">PaissaHouse XIVLauncher plugin</a>.
      </h5>
      <div class="notification is-warning">
        The PaissaHouse plugin has not yet been updated for the latest FFXIV version. Information displayed here may be
        out of date.
      </div>
      <div class="notification is-warning" v-if="client.isDisconnected">
        Disconnected from the server! Please refresh the page to stay up-to-date with the latest data.
      </div>
      <!-- /title -->

      <!-- world select -->
      <h4 class="title is-4 mt-4">Select a World</h4>
      <h6 class="subtitle is-6">Select a world to view the houses available on the world.</h6>

      <div class="buttons" v-if="!loadingWorldList">
        <Dropdown
          class="mr-2"
          v-for="([datacenterName, worlds], idx) in worldGroups"
          :key="idx"
          :label="datacenterName"
        >
          <a class="dropdown-item" v-for="world in worlds" :key="world.id" @click="onSelectWorld(world)">
            {{ world.name }}
          </a>
        </Dropdown>
      </div>
      <div v-else><span class="loader is-inline-block"></span> Loading worlds...</div>
      <!-- /world select -->

      <!-- world view -->
      <template v-if="selectedWorldId">
        <h4 class="title is-4 mt-4">
          {{ client.worldName(selectedWorldId) }}
          <span class="loader is-inline-block" v-if="loadingWorld"></span>
        </h4>

        <WorldView :client="client" :world-id="selectedWorldId" v-if="!loadingWorld" />
      </template>
      <!-- /world view -->

      <!-- event log -->
      <template v-if="showEventLog">
        <h4 class="title is-4 mt-4">Live Events</h4>
        <EventLog :client="client" />
      </template>
      <!-- /event log -->

      <!-- changelog -->
      <!--
      <h4 class="title is-4 mt-4">
        Changelog
      </h4>
      <h6 class="subtitle is-6">
        For feedback and to keep up-to-date with development, come hang out in
        <a href="https://discord.gg/9rduk8aDek" target="_blank">my Discord server.</a>
      </h6>
      <div class="content">
        <ul>
          <li>August 22, 2022: refactored much of the site code, let me know if I broke anything!</li>
          <li>June 17, 2022: added a display showing when the current lottery phase ends</li>
          <li>June 5, 2022: PaissaDB now persists the selected world, sort, and filters on refresh</li>
          <li>June 4, 2022: fix "Missing Data" on some 0-entry plots with up-to-date data</li>
          <li>May 30, 2022: initial release</li>
        </ul>
      </div>
      -->
      <!-- /changelog -->
      <!-- ko-fi -->
      <hr />
      <p class="mb-2">Enjoy the site? Consider tipping to help me keep the servers alive!</p>
      <KofiButton />
    </div>
  </section>
</template>

<style scoped>
.paissa-logo {
  height: 48px;
  /* not the cleanest, but whatever, this isn't professional code :') */
  transform: translateY(15%);
}
</style>
