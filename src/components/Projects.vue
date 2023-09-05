<!--
To add a project, add this to projects.json:
See project-tags.json for tags
  {
    "name": "name",
    "tagline": "foobar",
    "description": "html",
    "date": "2023 - current",
    "banner": null,
    "icon": "@/assets/foo.png",
    "tags": [
      "lang-python",
      "topic-pl",
      "topic-nlp"
    ],
    "links": [
      {
        "name": "foo",
        "href": "bar"
      }
    ]
  }
-->

<script setup lang="ts">
import {projects} from "@/projects";
import {tags} from "@/project-tags";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed, reactive} from "vue";

const filteredTags = reactive(new Set());
const filteredProjects = computed(() => {
  if (filteredTags.size > 0) {
    // any project that has at least one of the selected tags
    return projects.filter((project) => project.tags.find((tag) => filteredTags.has(tag)));
  }
  return projects;
});

function toggleTag(tag: string) {
  if (filteredTags.has(tag)) {
    filteredTags.delete(tag);
  } else {
    filteredTags.add(tag);
  }
}
</script>

<template>
  <!-- fancy icons -->
  <!-- this took me 4 hours to make please don't make me write CSS -->
  <div class="is-flex mb-6">
    <div class="icon hex-icon" v-for="[key, tag] in Object.entries(tags)" @click="toggleTag(key)" :key="key">
      <!-- label on hover -->
      <div class="hex-icon-label">
        <span>{{ tag.name }}</span>
      </div>
      <!-- icon -->
      <img
        :class="{'svg-grey-dark': !filteredTags.has(key), 'active-blue': filteredTags.has(key)}"
        :src="tag.icon"
        :alt="tag.name"
        v-if="typeof tag.icon === 'string'"
      />
      <font-awesome-icon :icon="tag.icon" :class="{'active-blue': filteredTags.has(key)}" v-else />
      <!-- bg -->
      <div class="hex-icon-bg"></div>
    </div>
  </div>
  <!-- projects -->
  <TransitionGroup name="projects" tag="div" class="columns is-multiline">
    <div
      class="column is-6-tablet is-4-desktop is-3-fullhd project"
      v-for="project in filteredProjects"
      :key="project.name"
    >
      <div class="card">
        <div class="card-image" v-if="project.banner !== null">
          <figure class="image is-16by9">
            <img :src="project.banner" :alt="project.name + ' Banner'" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-left" v-if="project.icon !== null">
              <figure class="image is-48x48">
                <img :src="project.icon" :alt="project.name + ' Logo'" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ project.name }}</p>
              <p class="subtitle is-6">{{ project.tagline }}</p>
            </div>
          </div>

          <p v-html="project.description"></p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>{{ project.date }}</i>
            </div>

            <div class="level-right">
              <span class="icon" v-for="tag in project.tags" :key="tag">
                <img
                  class="svg-grey-dark"
                  :src="tags[tag].icon as string"
                  :alt="tags[tag].name"
                  v-if="typeof tags[tag].icon === 'string'"
                />
                <font-awesome-icon :icon="tags[tag].icon" v-else />
              </span>
            </div>
          </div>
        </div>

        <footer class="card-footer" v-if="project.links.length">
          <template v-for="link of project.links">
            <router-link :to="link.href" class="card-footer-item" v-if="link.routerLink">{{ link.name }}</router-link>
            <a :href="link.href" target="_blank" class="card-footer-item" v-else>{{ link.name }}</a>
          </template>
        </footer>
      </div>
    </div>
  </TransitionGroup>
</template>

<style scoped lang="scss">
@use "sass:math";
@import "@/global.scss";

$hex-size: 28px;
$hex-margin: 4px;
$icon-size: $hex-size - $hex-margin;
$half-hex: math.div($hex-size, 2);

// ===== ICONS =====
// icon containers
.hex-icon {
  margin-right: -$half-hex + 1px;
  width: $hex-size;
  height: $hex-size;
  pointer-events: none;
}

.hex-icon:nth-child(even) {
  padding-top: $icon-size * 1.5;
}

// icon
.hex-icon > img {
  width: $icon-size;
  height: $icon-size;
}

.hex-icon > * {
  z-index: 3;
}

// topic labels
.hex-icon-label {
  position: absolute;
  white-space: nowrap;
  transform-origin: left;
  background: $grey-light;
  padding-left: $hex-size + 4px;
  padding-right: ($hex-size * 0.25);
  z-index: 1;
  pointer-events: auto;
  clip-path: polygon(
    ($hex-size * 0.25) 100%,
    ($hex-size * 0.75) 100%,
    $hex-size 50%,
    ($hex-size * 0.75) 0%,
    ($hex-size * 0.25) 0%,
    0% 50%
  );
  transition: clip-path 0.5s;
}

.hex-icon-label:hover {
  clip-path: polygon(
    ($hex-size * 0.25) 100%,
    calc(100% - ($hex-size * 0.25)) 100%,
    100% 50%,
    calc(100% - ($hex-size * 0.25)) 0%,
    ($hex-size * 0.25) 0%,
    0% 50%
  );
}

.hex-icon:nth-child(even) > .hex-icon-label {
  transform: translateX(50%) rotate(30deg) translateX(-$half-hex);
}

.hex-icon:nth-child(odd) > .hex-icon-label {
  transform: translateX(50%) rotate(-30deg) translateX(-$half-hex);
}

// set up hexagons - this is fairly hacky but oh well, CSS is a pain
.hex-icon-bg {
  position: absolute;
  background: white;
  width: 28px;
  height: 28px;
  z-index: 2;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

// another hack to make left hexes on top
@for $i from 1 through 999 {
  .hex-icon:nth-child(#{$i}) {
    z-index: #{999 - $i};
  }
}

// active blue color
.active-blue {
  filter: brightness(0) saturate(100%) invert(56%) sepia(73%) saturate(6154%) hue-rotate(196deg) brightness(101%)
    contrast(102%);
}

// ===== PROJECTS =====
.projects-move,
.projects-enter-active,
.projects-leave-active {
  transition: all 0.3s ease;
}

.projects-enter-from,
.projects-leave-to {
  opacity: 0;
  transform: scale(10%);
}

.projects-leave-active {
  position: absolute;
}
</style>