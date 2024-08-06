<script setup lang="ts">
import type {Paper} from "@/data/papers";

defineProps<{
  paper: Paper;
}>();

const ME = "Andrew Zhu";

function authorHtml(authors: string[]) {
  return authors.map((author) => (author === ME ? `<b>${author}</b>` : author)).join(", ");
}
</script>

<template>
  <a :href="paper.url ?? undefined" target="_blank" class="paper">
    <span v-html="authorHtml(paper.authors)"></span>. {{ paper.year }}. <i>{{ paper.title }}</i
    >. {{ paper.conf }}.
    <div class="tags">
      <a class="tag is-success" v-if="paper.website" :href="paper.website" target="_blank"> Website </a>
      <a class="tag is-warning" v-if="paper.github" :href="paper.github" target="_blank"> GitHub </a>
      <a class="tag is-danger" v-if="paper.poster" :href="paper.poster" target="_blank"> Poster </a>
      <a class="tag" v-for="tag in paper.additional" :href="tag.url" target="_blank"> {{ tag.title }} </a>
    </div>
  </a>
</template>

<style scoped lang="scss">
.paper {
  border-radius: 2px;
  color: #324744;
  display: block;
  padding: 0.5em 0.75em;
}

.paper:hover {
  background-color: hsl(0, 0%, 96%);
}
</style>
