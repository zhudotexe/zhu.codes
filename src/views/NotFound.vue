<script setup lang="ts">
const notFoundMessages = [
  // hey, looking at the source code to see all the 404 messages is cheating!
  ":(",
  "*sad trumpet noises*",
  "these are not the droids you seek",
  "that's the number of hamsters powering the server",
  "not found",
  "here be dragons",
  "https://xkcd.com/1334/"
];

const message = notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)];
</script>

<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="content">
        <p>
          404
        </p>
        <p>
          {{ message }}
        </p>
      </div>
    </div>
  </section>
</template>
