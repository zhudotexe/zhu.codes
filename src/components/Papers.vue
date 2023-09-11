<script setup lang="ts">
import {papers} from "@/data/papers";
import {groupBy} from "lodash";

const ME = "Andrew Zhu";
const pubsByYear = Object.entries(groupBy(papers, (paper) => paper.year)).sort(([y1], [y2]) => -y1.localeCompare(y2));

function authorHtml(authors: string[]) {
  return authors.map((author) => (author === ME ? `<b>${author}</b>` : author)).join(", ");
}
</script>

<template>
  <div class="menu">
    <template v-for="[year, yearPubs] in pubsByYear">
      <p class="menu-label">{{ year }}</p>
      <ul class="menu-list">
        <li v-for="paper in yearPubs">
          <a :href="paper.url ?? undefined" target="_blank">
            <span v-html="authorHtml(paper.authors)"></span>. {{ paper.year }}. <i>{{ paper.title }}</i
            >. {{ paper.conf }}.
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped></style>
