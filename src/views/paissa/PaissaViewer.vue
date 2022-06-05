<template>
  <section class="section">
    <div class="container">
      <!-- title -->
      <h3 class="title">
        <img src="@/assets/PaissaLogo.png" alt="PaissaHouse Logo" class="paissa-logo">
        PaissaDB
      </h3>
      <h5 class="subtitle">
        A list of houses for sale in Final Fantasy XIV, how many lottery bids are on each, and where to contribute
        using the
        <a href="https://github.com/zhudotexe/FFXIV_PaissaHouse" target="_blank">PaissaHouse XIVLauncher plugin</a>.
      </h5>
      <div class="notification is-warning" v-if="client.isDisconnected">
        Disconnected from the server! Please refresh the page to stay up-to-date with the latest data.
      </div>
      <!-- /title -->

      <!-- world select -->
      <h4 class="title is-4 mt-4">
        Select a World
      </h4>
      <h6 class="subtitle is-6">
        Select a world to view the houses available on the world.
      </h6>

      <div class="buttons" v-if="!loadingWorldList">
        <Dropdown class="mr-2"
                  v-for="([datacenterName, worlds], idx) in worldGroups"
                  :key="idx"
                  :label="datacenterName">
          <a class="dropdown-item" v-for="world in worlds" :key="world.id" @click="onSelectWorld(world)">
            {{ world.name }}
          </a>
        </Dropdown>
      </div>
      <div v-else>
        <span class="loader is-inline-block"></span> Loading worlds...
      </div>
      <!-- /world select -->

      <!-- world view -->
      <template v-if="selectedWorldId">
        <h4 class="title is-4 mt-4">
          {{ client.worldName(selectedWorldId) }}
          <span class="loader is-inline-block" v-if="loadingWorld"></span>
        </h4>

        <WorldView :client="client" :world-id="selectedWorldId" v-if="!loadingWorld"/>
      </template>
      <!-- /world view -->

      <!-- changelog -->
      <h4 class="title is-4 mt-4">
        Changelog
      </h4>
      <h6 class="subtitle is-6">
        For feedback and to keep up-to-date with development, come hang out in
        <a href="https://discord.gg/9rduk8aDek" target="_blank">my Discord server.</a>
      </h6>
      <div class="content">
        <ul>
          <li>June 5, 2022: PaissaDB now persists the selected world, sort, and filters on refresh</li>
          <li>June 4, 2022: fix "Missing Data" on some 0-entry plots with up-to-date data</li>
          <li>May 30, 2022: initial release</li>
        </ul>
      </div>
      <!-- /changelog -->
    </div>
  </section>
</template>

<script lang="ts">
import Dropdown from "@/components/Dropdown.vue";
import {PaissaClient, PlotState} from "@/views/paissa/client";
import {WorldSummary} from "@/views/paissa/types";
import * as utils from "@/views/paissa/utils";
import WorldView from "@/views/paissa/WorldView.vue";
import {groupBy} from "lodash";
import {defineComponent} from "vue";

export default defineComponent({
  name: "PaissaViewer",
  components: {WorldView, Dropdown},
  data() {
    return {
      client: new PaissaClient(),
      utils,
      loadingWorldList: true,
      selectedWorldId: null as number | null,
      loadingWorld: false,
    }
  },
  computed: {
    worldGroups(): [string, WorldSummary[]][] {
      let worlds = this.client.worlds;
      worlds.sort(((a, b) => a.datacenter_name.localeCompare(b.datacenter_name) || a.name.localeCompare(b.name)));
      return Object.entries(groupBy(worlds, (world: WorldSummary) => world.datacenter_name));
    },
    selectedWorldPlots(): PlotState[] {
      if (!this.selectedWorldId) {
        return [];
      }
      const allPlots = Array.from(this.client.plotStates.values());
      return allPlots.filter(state => state.world_id === this.selectedWorldId)
    }
  },
  async mounted() {
    this.client.init();
    await this.client.getWorlds();
    this.loadingWorldList = false;
    // if the world is in the query param and valid, select it
    const worldQuery = this.$route.query.world;
    if (worldQuery) {
      const worldId = +worldQuery;
      if (this.client.worldMap.has(worldId)) {
        await this.loadWorld(worldId);
      }
    }
  },
  unmounted() {
    this.client.close();
  },
  methods: {
    async onSelectWorld(world: WorldSummary) {
      // update the world query param
      await this.$router.replace({query: {...this.$route.query, world: world.id}});
      // load the worlds
      await this.loadWorld(world.id);
    },
    async loadWorld(worldId: number) {
      this.selectedWorldId = worldId;
      this.loadingWorld = true;
      await this.client.loadWorld(worldId);
      this.loadingWorld = false;
    }
  }
})
</script>

<style scoped>
.paissa-logo {
  height: 48px;
  /* not the cleanest, but whatever, this isn't professional code :') */
  transform: translateY(15%);
}
</style>