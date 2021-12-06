<template>
  <h2 class="subtitle">
    <span id="home-subtitle-typeit">I like to make things on the internet.</span>
  </h2>
</template>

<script>
import TypeIt from "typeit";
import axios from "axios";
import {API_BASE} from "@/utils/constants";


export default {
  name: "HomeSubtitle",
  data() {
    return {typer: undefined}
  },
  async mounted() {
    this.typer = new TypeIt("#home-subtitle-typeit", {startDelete: true});
    await this.checkSpecialVisitor();
  },
  methods: {
    async checkSpecialVisitor() {
      try {
        const response = await axios.get(`${API_BASE}/specialVisitorMetadata`);
        if (response.data.message) {
          this.typer.delete()
              .pause(150)
              .type(response.data.message)
              .pause(2200)
              .exec(() => {this.typer.destroy()})
              .go();
        }
      } catch (error) {
        console.warn("Failed to get special visitor info:", error);
      }
    }
  }
}
</script>

<style scoped>

</style>