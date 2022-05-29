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
      <template v-if="selectedWorld">
        <h4 class="title is-4 mt-4">
          {{ selectedWorld.name }}
          <span class="loader is-inline-block" v-if="loadingWorld"></span>
        </h4>

        <template v-if="!loadingWorld">
          <p>
            {{ selectedWorld.name }} has
            <FlashOnChange :value="selectedWorldPlots.length"/>
            open plots, at least
            <FlashOnChange :value="selectedWorldPlots.filter(isEntryPhase).length"/>
            of which are available for bidding.
          </p>
          <p v-if="selectedWorldPlots.filter(isUnknownOrOutdatedPhase).length">
            <strong>
              <FlashOnChange :value="selectedWorldPlots.filter(isUnknownOrOutdatedPhase).length"/>
            </strong>
            plots have unknown or outdated lottery data. You can contribute by installing the
            <a href="https://github.com/zhudotexe/FFXIV_PaissaHouse#lottery-sweeps" target="_blank">
              PaissaHouse XIVLauncher plugin
            </a>
            and clicking on the placard of any outdated plot in-game. This site will update in real time!
          </p>
        </template>
      </template>
      <!-- /world view -->


    </div>
  </section>

  <section class="section">
    <div class="container">
      <h4 class="title is-4">
        Event Log
      </h4>
      <h6 class="subtitle is-6">
        The last 100 events that have occurred since you loaded this page.
      </h6>
      <!-- todo -->
    </div>
  </section>
</template>

<script lang="ts">
import Dropdown from "@/components/Dropdown.vue";
import FlashOnChange from "@/components/FlashOnChange.vue";
import {PaissaClient, PlotState} from "@/utils/paissa/client";
import {LottoPhase, WorldSummary} from "@/utils/paissa/types";
import {groupBy} from "lodash";
import {defineComponent} from "vue";

export default defineComponent({
  name: "PaissaViewer",
  components: {Dropdown, FlashOnChange},
  data() {
    return {
      client: new PaissaClient(),
      loadingWorldList: true,
      selectedWorld: null as WorldSummary | null,
      loadingWorld: false,
    }
  },
  computed: {
    worldGroups(): [string, WorldSummary[]][] {
      let worlds = this.client.worlds;
      worlds.sort(((a, b) => a.datacenter_name.localeCompare(b.datacenter_name)));
      return Object.entries(groupBy(worlds, (world: WorldSummary) => world.datacenter_name));
    },
    selectedWorldPlots(): PlotState[] {
      if (!this.selectedWorld) {
        return [];
      }
      const allPlots = Array.from(this.client.plotStates.values());
      return allPlots.filter(state => state.world_id === this.selectedWorld!.id)
    }
  },
  mounted() {
    this.client.init();
    this.client.getWorlds().then(() => {
      this.loadingWorldList = false;
    });
  },
  unmounted() {
    this.client.close();
  },
  methods: {
    onSelectWorld(world: WorldSummary) {
      this.selectedWorld = world;
      this.loadingWorld = true;
      this.client.loadWorld(world.id).then(() => {
        this.loadingWorld = false
      });
    },
    // --- filters ---
    isLottery(state: PlotState) {
      return (state.purchase_system & 1) === 1;
    },
    isOutdatedPhase(state: PlotState) {
      const timeSecs = +new Date() / 1000;
      return this.isLottery(state) && ((state.lotto_phase_until ?? 0) < timeSecs);
    },
    isEntryPhase(state: PlotState) {
      return this.isLottery(state) && !this.isOutdatedPhase(state) && state.lotto_phase === LottoPhase.ENTRY;
    },
    isUnknownOrOutdatedPhase(state: PlotState) {
      return this.isLottery(state) && (state.lotto_phase === null || this.isOutdatedPhase(state));
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