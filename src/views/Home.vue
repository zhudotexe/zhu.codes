<script setup lang="ts">
import CurrentTime from "@/components/CurrentTime.vue";
import HomeSubtitle from "@/components/HomeSubtitle.vue";
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
                <span>University of Pennsylvania <i>(2022 - 2027, Ph.D.)</i></span>
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
                <span>D&amp;D Beyond, Wizards of the Coast</span>
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
        I'm a Ph.D. student at the University of Pennsylvania.
      </p>
      <p>
        My research interests include natural language processing, programming languages,
        distributed systems, and more.
      </p>
      <p>
        In my free time, I make all sorts of applications to help people play Dungeons and Dragons online, find a house
        in Final Fantasy XIV, mentor a high school robotics team, and whatever else catches my interest.
      </p>
      <p>
        You can find me lurking in various D&amp;D Discord servers, in Eorzea leading the <i>&laquo;kupo?&raquo;</i>
        Free Company, or by shooting me an email (it's
        <CurrentTime to-time-zone="America/New_York"/>
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
          <img class="svg-grey-dark svg-margin" src="../assets/FFXIVMeteor.svg" alt="FFXIV Meteor">
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

      <div class="columns is-multiline">
        <!-- avrae -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img src="../assets/AvraeBanner.png" alt="Avrae Banner">
              </figure>
            </div>

            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/AvraeLogo.png" alt="Avrae Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    Avrae
                  </p>
                  <p class="subtitle is-6">
                    Just roll with it.
                  </p>
                </div>
              </div>

              <p>
                Avrae is the world's largest Discord bot designed to help players and Dungeon Masters around the world
                play D&amp;D together online.
                Rolling with over 5 million users across over 400,000 Discord servers since 2016.
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2016 - current</i>
                </div>

                <div class="level-right">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'node-js']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'aws']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'd-and-d']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'discord']"/>
                  </span>
                </div>
              </div>
            </div>

            <footer class="card-footer">
              <a href="https://github.com/avrae/avrae" target="_blank" class="card-footer-item">GitHub</a>
              <a href="https://avrae.io/" target="_blank" class="card-footer-item">Website</a>
            </footer>
          </div>
        </div>
        <!-- /avrae -->

        <!-- paissa -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img src="../assets/PaissaBanner.jpeg" alt="Paissa Stack Banner">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/PaissaLogo.png" alt="Paissa Stack Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">The Paissa Stack</p>
                  <p class="subtitle is-6">Look into their eyes.</p>
                </div>
              </div>

              <p>
                Built in response to the Final Fantasy XIV housing crisis, the Paissa Stack combines a distributed data
                collection agent with a low-power central server. It'll broadcast when houses become available on your
                server, and the data helps us learn about the hidden housing timers.
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2021 - current</i>
                </div>

                <div class="level-right is-flex is-justify-content-center">
                  <span class="icon">
                    <img class="svg-grey-dark" src="../assets/CSharpLogo.png" alt="CSharp">
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'sitemap']"/>
                  </span>
                  <span class="icon">
                    <img class="svg-grey-dark svg-margin" src="../assets/FFXIVMeteor.svg" alt="FFXIV Meteor">
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/zhudotexe/FFXIV_PaissaHouse" target="_blank" class="card-footer-item">
                GitHub
              </a>
              <router-link to="/paissa" class="card-footer-item">
                PaissaDB
              </router-link>
            </footer>
          </div>
        </div>
        <!-- /paissa -->

        <!-- draconic -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/DraconicLogo.svg" alt="Draconic Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Draconic Language</p>
                  <p class="subtitle is-6">Safe server-side user scripting.</p>
                </div>
              </div>

              <p>
                The Draconic language is built to enable users to write powerful custom commands in Avrae that run on
                the application layer, while enforcing limits on resource usage. With a custom interpreter built in
                Python, safety is enforced through both a runtime watchdog and its type system.
              </p>
              <p>
                Draconic is used in production to run over 75 thousand user scripts daily. You can see some user
                creations on the <a href="https://avrae.io/dashboard/workshop" target="_blank">Avrae Alias Workshop</a>.
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2020 - current</i>
                </div>

                <div class="level-right is-flex is-justify-content-center">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'code']"/>
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/avrae/draconic" target="_blank" class="card-footer-item">GitHub</a>
            </footer>
          </div>
        </div>
        <!-- /draconic -->

        <!-- d20 -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img class="svg-grey-dark" src="../assets/d20Logo.svg" alt="d20 Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">d20</p>
                  <p class="subtitle is-6">Oops I made a DSL</p>
                </div>
              </div>

              <p>
                <i>d20</i>
                is a fast, powerful, safe, and extensible dice engine for D&D, d20 systems, and any other system that
                needs dice. Built on top of the Lark parser, each roll comes with a rich expression tree that enables
                applications to have full control over each roll.
              </p>
              <p>
                <i>d20</i> is used in production to handle over 1 million dice rolls each day.
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2020 - current</i>
                </div>

                <div class="level-right">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'code']"/>
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/avrae/d20" target="_blank" class="card-footer-item">GitHub</a>
              <a href="https://pypi.org/project/d20/" target="_blank" class="card-footer-item">PyPI</a>
            </footer>
          </div>
        </div>
        <!-- /d20 -->

        <!-- kinesis tools -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/KinesisToolsLogo.svg" alt="Kinesis Tools Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">AWS Kinesis Tools</p>
                  <p class="subtitle is-6">The fastest way to iterate on data heuristics in the West.</p>
                </div>
              </div>

              <p>
                Built in order to quickly iterate on heuristics and filter a large quantity of events captured for the
                <a href="https://www.cis.upenn.edu/~ccb/language-to-avrae.html" target="_blank">Avrae NLP project</a>
                at UPenn, the Kinesis Tools are a blazing-fast (>10GB/min) way to explore a structured dataset.
              </p>
              <p>
                <a href="mailto:me@andrew-zhu.com" target="_blank">
                  Contact me
                </a>
                for help using these tools for your own data science project!
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2022 - current</i>
                </div>

                <div class="level-right">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'vuejs']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'aws']"/>
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/zhudotexe/aws-kinesis-dataset-exploration-tool"
                 target="_blank"
                 class="card-footer-item">GitHub</a>
            </footer>
          </div>
        </div>
        <!-- /kinesis tools -->

        <!-- dicecloud tools -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/DicecloudLogo.png" alt="Dicecloud Tools Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Dicecloud Tools</p>
                  <p class="subtitle is-6">New characters simplified.</p>
                </div>
              </div>

              <p>
                The Dicecloud Tools are an old project meant to help users create new characters and manage their
                spellbooks in Dicecloud with minimal effort.
              </p>
              <p>
                The Dicecloud Tools are looking for new maintainers!
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2018 - 2020</i>
                </div>

                <div class="level-right">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'js-square']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'd-and-d']"/>
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="dnd/dicecloudtools/autochar.html"
                 target="_blank"
                 class="card-footer-item">
                Autochar
              </a>
              <a href="dnd/dicecloudtools/spellbook.html"
                 target="_blank"
                 class="card-footer-item">
                Spell Manager
              </a>
            </footer>
          </div>
        </div>
        <!-- /dicecloud tools -->

        <!-- iris -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/IrisLogo.jpeg" alt="Iris Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Iris</p>
                  <p class="subtitle is-6">An AI-powered virtual assistant.</p>
                </div>
              </div>

              <p>
                Built at CruzHacks 2019, Iris combines wearable technology and facial recognition in an AI-powered
                virtual assistance to help Alzheimer's patients combat memory loss.
              </p>
              <p>
                <i>Winner: Tech Cares, Best Use of Google Cloud Platform</i>
              </p>
              <div class="level is-mobile">
                <div class="level-left">
                  <i>2019</i>
                </div>

                <div class="level-right">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'python']"/>
                  </span>
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'angular']"/>
                  </span>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/CruzHacks2019/iris-frontend" target="_blank" class="card-footer-item">
                GitHub
              </a>
              <a href="https://devpost.com/software/iris-io" target="_blank" class="card-footer-item">Devpost</a>
            </footer>
          </div>
        </div>
        <!-- /iris -->

      </div>
    </div>
  </section>
  <!-- /projects -->

  <!--&lt;!&ndash; publications &ndash;&gt;-->
  <!--<section class="section">-->
  <!--  <div class="container">-->
  <!--    <h1 class="title">-->
  <!--      Publications-->
  <!--    </h1>-->
  <!--    <h2 class="subtitle">-->
  <!--      blep-->
  <!--    </h2>-->
  <!--  </div>-->
  <!--</section>-->
  <!--&lt;!&ndash; /publications &ndash;&gt;-->
</template>

<style scoped>
.svg-margin {
  margin: 2px;
}
</style>
