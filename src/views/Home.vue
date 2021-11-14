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
            <h2 class="subtitle">
              I like to make things on the internet.
            </h2>

            <p>
              <a href="https://github.com/zhudotexe" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'github']"/>
                  </span>
                  <span>zhudotexe</span>
                </span>
              </a>

              <a href="discord://-/users/187421759484592128" target="_blank">
                <span class="icon-text mr-3">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'discord']"/>
                  </span>
                  <span>zhu.exe#4211</span>
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
                <span>University of California, Santa Cruz</span>
              </span>
            </p>
            <p>
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'building']"/>
                </span>
                <span>D&amp;D Beyond; FANDOM, Inc.</span>
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
        I'm a prospective Ph.D. student hoping to start in the fall of 2022.
      </p>
      <p>
        My research interests include distributed systems and algorithms, programming languages, low-power systems and
        edge computing, distributed machine learning, Byzantine fault tolerance, and volunteer computing.
      </p>
      <p>
        In my free time, I make all sorts of applications to help people play Dungeons and Dragons online, find a house
        in Final Fantasy XIV, mentor a high school robotics team, and whatever else catches my interest.
      </p>
      <p>
        You can find me lurking in various D&amp;D Discord servers, in Eorzea leading the <i>&laquo;kupo?&raquo;</i>
        Free Company, or by shooting me an email (it's
        <CurrentTime to-time-zone="America/Los_Angeles"/>
        for me right now).
      </p>
      <p class="is-flex is-justify-content-center">
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'sitemap']"/>
        </span>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'code']"/>
        </span>
        <span class="icon">
          <font-awesome-icon :icon="['fab', 'd-and-d']"/>
        </span>
        <span class="icon">
          <img src="../assets/FFXIVMeteor.svg" alt="FFXIV Meteor" style="margin: 2px">
        </span>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'robot']"/>
        </span>
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
      <h2 class="subtitle">
        blep
      </h2>
    </div>
  </section>
  <!-- /projects -->

  <!-- publications -->
  <section class="section">
    <div class="container">
      <h1 class="title">
        Publications
      </h1>
      <h2 class="subtitle">
        blep
      </h2>
    </div>
  </section>
  <!-- /publications -->
</template>

<script>
import CurrentTime from "@/components/CurrentTime";

export default {
  name: 'Home',
  components: {CurrentTime}
}
</script>
