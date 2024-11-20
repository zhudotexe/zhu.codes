<script setup lang="ts">
import CurrentTime from "@/components/CurrentTime.vue";
import HomeSubtitle from "@/components/HomeSubtitle.vue";
import Papers from "@/components/papers/Papers.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <!-- heading -->
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <!-- left -->
          <div class="column is-2">
            <a href="https://github.com/zhudotexe" target="_blank">
              <figure class="image is-1by1">
                <img class="is-rounded" src="me@512.webp" alt="Portrait of me" title="Hi!" />
              </figure>
            </a>
          </div>
          <!-- /left -->

          <!-- right -->
          <div class="column">
            <h1 class="title is-size-1">Andrew Zhu</h1>
            <HomeSubtitle></HomeSubtitle>

            <p>
              <a href="https://github.com/zhudotexe" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </span>
                  <span>zhudotexe</span>
                </span>
              </a>

              <a href="https://discord.gg/9rduk8aDek" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'discord']" />
                  </span>
                  <span>zhu.exe</span>
                </span>
              </a>

              <a href="mailto:me@andrew-zhu.com" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </span>
                  <span>me@andrew-zhu.com</span>
                </span>
              </a>

              <a href="https://www.linkedin.com/in/angzhu/" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </span>
                  <span>angzhu</span>
                </span>
              </a>

              <a href="CV.pdf" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'file-alt']" />
                  </span>
                  <span>CV</span>
                </span>
              </a>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'trophy']" />
                </span>
                <span>NSF Graduate Research Fellow</span>
              </span>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'university']" />
                </span>
                <span>University of Pennsylvania <i>(2022 - present, Ph.D.)</i></span>
              </span>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'university']" />
                </span>
                <span>University of California, Santa Cruz <i>(2018 - 2021, B.S.)</i></span>
              </span>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'building']" />
                </span>
                <span>D&amp;D Beyond, Wizards of the Coast <i>(2019 - 2023)</i></span>
              </span>
            </p>
          </div>
          <!-- /right -->
        </div>
      </div>
    </div>
  </section>
  <!-- /heading -->

  <!-- about me -->
  <section class="section">
    <div class="container">
      <h1 class="title">About Me</h1>
      <p>
        I'm a Ph.D. student at the University of Pennsylvania advised by
        <a href="https://www.cis.upenn.edu/~ccb/" target="_blank">Prof. Chris Callison-Burch</a>.
      </p>
      <p>
        My research interests include natural language processing, programming languages, distributed systems, and more.
      </p>
      <p>
        I'm also a full-stack software engineer. I'm proficient in all manner of backend, devops, database, and frontend
        engineering. I strive to make idiomatic, clean, performant, and low-maintenance code &mdash; philosophies that
        are often rare in academia. If you wish to reach out for consultation, please get in touch though any of the
        contact information listed above.
      </p>
      <p>
        In my free time, I make all sorts of applications to help people play Dungeons and Dragons online, find a house
        in Final Fantasy XIV, and whatever else catches my interest.
      </p>
      <p>
        You can find me lurking in various D&amp;D Discord servers, in Eorzea leading the
        <i>&laquo;kupo?&raquo;</i>
        Free Company, or by shooting me an email (it's
        <CurrentTime to-time-zone="America/New_York" />
        for me right now).
      </p>
    </div>
  </section>
  <!-- /about me -->

  <!-- projects -->
  <section class="section">
    <div class="container">
      <h1 class="title">Projects</h1>
      Click to filter by topic.
      <Projects />
    </div>
  </section>
  <!-- /projects -->

  <!-- publications -->
  <section class="section">
    <div class="container">
      <Papers />
    </div>
  </section>
  <!-- /publications -->
</template>

<style scoped></style>
