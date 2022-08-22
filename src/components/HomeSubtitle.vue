<script setup lang="ts">
import {API_BASE} from "@/utils/constants";
import axios from "axios";
import TypeIt from "typeit";
import {onMounted} from "vue";

onMounted(async () => {
  // @ts-ignore
  const typer = new TypeIt("#home-subtitle-typeit", {startDelete: true});
  try {
    const response = await axios.get(`${API_BASE}/specialVisitorMetadata`);
    if (response.data.message) {
      typer.delete()
          .pause(150)
          .type(response.data.message)
          .pause(2200)
          .exec(() => typer.destroy())
          .go();
    }
  } catch (error) {
    console.warn("Failed to get special visitor info:", error);
  }
});
</script>

<template>
  <h2 class="subtitle">
    <span id="home-subtitle-typeit">I like to make things on the internet.</span>
  </h2>
</template>
