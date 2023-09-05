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
import projects from "@/projects.json";
import tags from "@/project-tags.json";
import {SRC_PATH} from "@/utils/constants";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <!-- fancy icons -->
  <!-- this took me 4 hours to make please don't make me write CSS -->
  <div class="is-flex mb-6">
    <div class="icon hex-icon" v-for="tag in tags">
      <!-- label on hover -->
      <div class="hex-icon-label">
        <span>{{ tag.name }}</span>
      </div>
      <!-- icon -->
      <img class="svg-grey-dark" :src="SRC_PATH + tag.icon" :alt="tag.name" v-if="typeof tag.icon === 'string'" />
      <font-awesome-icon :icon="tag.icon" v-else />
      <!-- bg -->
      <div class="hex-icon-bg"></div>
    </div>
  </div>
  <!-- projects -->
  <div class="columns is-multiline">
    <div class="column is-6-tablet is-4-desktop is-3-fullhd" v-for="project in projects">
      <div class="card">
        <div class="card-image" v-if="project.banner !== null">
          <figure class="image is-16by9">
            <img :src="SRC_PATH + project.banner" :alt="project.name + ' Banner'" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-left" v-if="project.icon !== null">
              <figure class="image is-48x48">
                <img :src="SRC_PATH + project.icon" :alt="project.name + ' Logo'" />
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
              <span class="icon" v-for="tag in project.tags">
                <img
                  class="svg-grey-dark"
                  :src="SRC_PATH + tags[tag].icon"
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
  </div>
</template>

<style scoped lang="scss">
@import "@/global.scss";

$hex-size: 28px;
$hex-margin: 4px;
$icon-size: $hex-size - $hex-margin;
$half-hex: $hex-size / 2;

/* icon containers */
.hex-icon {
  margin-right: -($hex-size / 2) + 1px;
  width: $hex-size;
  height: $hex-size;
  pointer-events: none;
}

.hex-icon:nth-child(even) {
  padding-top: $icon-size * 1.5;
}

.hex-icon > img {
  width: $icon-size;
  height: $icon-size;
}

.hex-icon > * {
  z-index: 3;
}

/* icon labels */
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

/* set up hexagons - this is fairly hacky but oh well, CSS is a pain */
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
</style>
