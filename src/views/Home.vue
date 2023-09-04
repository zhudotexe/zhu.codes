<script setup lang="ts">
import CurrentTime from "@/components/CurrentTime.vue";
import HomeSubtitle from "@/components/HomeSubtitle.vue";
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
                <img class="is-rounded"
                     src="https://avatars.githubusercontent.com/u/8866981"
                     alt="GitHub profile picture">
              </figure>
            </a>
          </div>
          <!-- /left -->

          <!-- right -->
          <div class="column">
            <h1 class="title is-size-1">
              Andrew Zhu
            </h1>
            <HomeSubtitle></HomeSubtitle>

            <p>
              <a href="https://github.com/zhudotexe" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'github']"/>
                  </span>
                  <span>zhudotexe</span>
                </span>
              </a>

              <a href="https://discord.gg/9rduk8aDek" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'discord']"/>
                  </span>
                  <span>zhu.exe</span>
                </span>
              </a>

              <a href="mailto:me@andrew-zhu.com" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'envelope']"/>
                  </span>
                  <span>me@andrew-zhu.com</span>
                </span>
              </a>

              <a href="https://www.linkedin.com/in/angzhu/" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'linkedin']"/>
                  </span>
                  <span>angzhu</span>
                </span>
              </a>

              <a href="CV.pdf" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'file-alt']"/>
                  </span>
                  <span>CV</span>
                </span>
              </a>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'university']"/>
                </span>
                <span>University of Pennsylvania <i>(2022 - present, Ph.D.)</i></span>
              </span>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'university']"/>
                </span>
                <span>University of California, Santa Cruz <i>(2018 - 2021, B.S.)</i></span>
              </span>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'building']"/>
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
      <h1 class="title">
        About Me
      </h1>
      <p>
        I'm a Ph.D. student at the University of Pennsylvania advised by
        <a href="https://www.cis.upenn.edu/~ccb/" target="_blank">Prof. Chris Callison-Burch</a>.
      </p>
      <p>
        My research interests include natural language processing, programming languages, distributed systems, and more.
      </p>
      <p>
        I'm also a full-stack software engineer. I'm proficient in all manner of backend, devops, database, and
        frontend engineering. I strive to make idiomatic, clean, performant, and low-maintenance code &mdash;
        philosophies that are often rare in academia. If you wish to reach out for consultation, please get in touch
        though any of the contact information listed above.
      </p>
      <p>
        In my free time, I make all sorts of applications to help people play Dungeons and Dragons online, find a house
        in Final Fantasy XIV, and whatever else catches my interest.
      </p>
      <p>
        You can find me lurking in various D&amp;D Discord servers, in Eorzea leading the <i>&laquo;kupo?&raquo;</i>
        Free Company, or by shooting me an email (it's
        <CurrentTime to-time-zone="America/New_York"/>
        for me right now).
      </p>
    </div>
  </section>
  <!-- /about me -->

  <!-- projects -->
  <section class="section">
    <div class="container">
      <h1 class="title">
        Projects
      </h1>
      <Projects/>
    </div>
  </section>
  <!-- /projects -->

  <!-- publications -->
  <section class="section">
    <div class="container">
      <h1 class="title">
        Publications
      </h1>

      <div class="menu">
        <p class="menu-label">
          2023
        </p>
        <ul class="menu-list">
          <li><a>
            <b>Zhu, A.</b>, Dugan, L., Hwang, A., Callison-Burch, C. (2023).
            <i>Kani: A Lightweight and Highly Hackable Framework for Language Model Applications</i>. In review.
          </a></li>
          <li><a href="https://arxiv.org/abs/2308.07540" target="_blank">
            <b>Zhu, A.</b>, Martin, L., Head, A., Callison-Burch, C. (2023).
            <i>CALYPSO: LLMs as Dungeon Masters' Assistants</i>. The 19th AAAI Conference on
            Artificial Intelligence and Interactive Digital Entertainment (AIIDE 2023).
          </a></li>
          <li><a href="https://aclanthology.org/2023.acl-long.229/" target="_blank">
            <b>Zhu, A.</b>, Aggarwal, K., Feng, A., Martin, L., Callison-Burch, C. (2023).
            <i>FIREBALL: A Dataset of Dungeons and Dragons Actual-Play with Structured Game State Information</i>.
            The 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023).
          </a></li>
          <li><a href="https://aclanthology.org/2023.acl-long.624/" target="_blank">
            Zhou, P., <b>Zhu, A.</b>, Hu, J., Pujara, J., Ren, X., Callison-Burch, C., Choi, Y., Ammanabrolu, P. (2023).
            <i>I Cast Detect Thoughts: Learning to Converse and Guide with Intents and Theory-of-Mind in Dungeons and
              Dragons</i>. The 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023).
          </a></li>
        </ul>

        <p class="menu-label">
          2022
        </p>
        <ul class="menu-list">
          <li><a href="https://openreview.net/forum?id=jQSStHwtmDN" target="_blank">
            Papazov, S., Gill, W., Garcia Ferreiro, M., <b>Zhu, A.</b>, Martin, L., Callison-Burch, C. (2022).
            <i>Using Language Models to Convert Between Natural Language and Game Commands</i>. NAACL 2022 Wordplay
            Workshop.
          </a></li>
          <li><a href="https://arxiv.org/abs/2101.07524" target="_blank">
            Wei, J., Liu, M., Luo, J., <b>Zhu, A.</b>, Li, Q., Davis, J., Liu, Y. (2022).
            <i>DuelGAN: A Duel Between Two Discriminators Stabilizes the GAN Training</i>. European Conference on
            Computer Vision.
          </a></li>
        </ul>
      </div>
    </div>
  </section>
  <!-- /publications -->
</template>

<style scoped>
.svg-margin {
  margin: 2px;
}
</style>
