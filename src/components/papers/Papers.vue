<script setup lang="ts">
import {type Paper as PaperT, papers, supervisedPapers} from "@/data/papers";
import {groupBy} from "lodash";
import Paper from "@/components/papers/Paper.vue";

function yearGrouped(papers: PaperT[]) {
  return Object.entries(groupBy(papers, (paper) => paper.year)).sort(([y1], [y2]) => -y1.localeCompare(y2));
}

const pubsByYear = yearGrouped(papers);
const supervisedPubsByYear = yearGrouped(supervisedPapers);
</script>

<template>
  <!-- my papers -->
  <h1 class="title">Publications</h1>
  <div>
    <template v-for="[year, yearPubs] in pubsByYear">
      <p class="year-label">{{ year }}</p>
      <ul>
        <li v-for="paper in yearPubs">
          <Paper :paper="paper" />
        </li>
      </ul>
    </template>
  </div>
  <!-- supervised papers -->
  <h2 class="title is-5 mt-4">Supervised Publications</h2>
  <div>
    <template v-for="[year, yearPubs] in supervisedPubsByYear">
      <p class="year-label">{{ year }}</p>
      <ul>
        <li v-for="paper in yearPubs">
          <Paper :paper="paper" />
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "@/global.scss";

.year-label {
  color: $grey;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
