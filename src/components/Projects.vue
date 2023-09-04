<script setup lang="ts"></script>

<template>
  <p class="is-flex mb-4">
    <span class="icon">
      <font-awesome-icon :icon="['fas', 'sitemap']" />
    </span>
    <span class="icon">
      <font-awesome-icon :icon="['fas', 'code']" />
    </span>
    <span class="icon">
      <font-awesome-icon :icon="['fab', 'd-and-d']" />
    </span>
    <span class="icon">
      <img class="svg-grey-dark svg-margin" src="../assets/FFXIVMeteor.svg" alt="FFXIV Meteor" />
    </span>
    <span class="icon">
      <font-awesome-icon :icon="['fas', 'robot']" />
    </span>
  </p>
  <div class="columns is-multiline">
    <!-- kani -->
    <div class="column is-6-tablet is-4-desktop is-3-fullhd">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/kani-logo.png" alt="Kani Logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Kani</p>
              <p class="subtitle is-6">Build AI apps faster and cleaner than ever before.</p>
            </div>
          </div>

          <p>
            Kani is a lightweight, flexible, and model-agnostic framework for developing language model applications.
            Kani helps developers implement a variety of complex features by supporting the core building blocks of chat
            interaction: model interfacing, chat management, and robust function calling. Researchers, hobbyists, and
            industry professionals alike can use Kani to accelerate their development.
          </p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2023 - current</i>
            </div>

            <div class="level-right">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'code']" />
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="https://github.com/zhudotexe/kani" target="_blank" class="card-footer-item">GitHub</a>
          <a href="https://kani.readthedocs.io/en/latest/" target="_blank" class="card-footer-item">Docs</a>
        </footer>
      </div>
    </div>
    <!-- /kani -->

    <!-- paissa -->
    <div class="column is-6-tablet is-4-desktop is-3-fullhd">
      <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="../assets/PaissaBanner.webp" alt="Paissa Stack Banner" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/PaissaLogo.png" alt="Paissa Stack Logo" />
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
                <img class="svg-grey-dark" src="../assets/CSharpLogo.webp" alt="CSharp" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'sitemap']" />
              </span>
              <span class="icon">
                <img class="svg-grey-dark svg-margin" src="../assets/FFXIVMeteor.svg" alt="FFXIV Meteor" />
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="https://github.com/zhudotexe/FFXIV_PaissaHouse" target="_blank" class="card-footer-item">GitHub</a>
          <router-link to="/paissa" class="card-footer-item">PaissaDB</router-link>
        </footer>
      </div>
    </div>
    <!-- /paissa -->

    <!-- avrae -->
    <div class="column is-6-tablet is-4-desktop is-3-fullhd">
      <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="../assets/AvraeBanner.webp" alt="Avrae Banner" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/AvraeLogo.png" alt="Avrae Logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Avrae</p>
              <p class="subtitle is-6">Just roll with it.</p>
            </div>
          </div>

          <p>
            Avrae is the world's largest Discord bot designed to help players and Dungeon Masters around the world play
            D&amp;D together online. Rolling with over 5 million users across over 500,000 Discord servers since 2016.
          </p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2016 - 2023</i>
            </div>

            <div class="level-right">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'node-js']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'aws']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'd-and-d']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'discord']" />
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

    <!-- zhu.codes -->
    <div class="column is-6-tablet is-4-desktop is-3-fullhd">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">zhu.codes</p>
              <p class="subtitle is-6">Getting meta</p>
            </div>
          </div>

          <p>
            This site was built using a FastAPI backend and Vue 3 frontend. It's a lot more than just a static site
            &mdash; try and see if you can encounter all of the variations of this page! (Hint: some components are time
            or location-specific.)
          </p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2021 - current</i>
            </div>

            <div class="level-right">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'vuejs']" />
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="https://github.com/zhudotexe/zhu.codes" target="_blank" class="card-footer-item">GitHub</a>
        </footer>
      </div>
    </div>
    <!-- /zhu.codes -->

    <!-- draconic -->
    <div class="column is-6-tablet is-4-desktop is-3-fullhd">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/DraconicLogo.svg" alt="Draconic Logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Draconic Language</p>
              <p class="subtitle is-6">Safe server-side user scripting.</p>
            </div>
          </div>

          <p>
            The Draconic language is built to enable users to write powerful custom commands in Avrae that run on the
            application layer, while enforcing limits on resource usage. With a custom interpreter built in Python,
            safety is enforced through both a runtime watchdog and its type system.
          </p>
          <p>
            Draconic is used in production to run over 75 thousand user scripts daily. You can see some user creations
            on the
            <a href="https://avrae.io/dashboard/workshop" target="_blank">Avrae Alias Workshop</a>.
          </p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2020 - 2023</i>
            </div>

            <div class="level-right is-flex is-justify-content-center">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'code']" />
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
                <img class="svg-grey-dark" src="../assets/d20Logo.svg" alt="d20 Logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">d20</p>
              <p class="subtitle is-6">Oops I made a DSL</p>
            </div>
          </div>

          <p>
            <i>d20</i>
            is a fast, powerful, safe, and extensible dice engine for D&D, d20 systems, and any other system that needs
            dice. Built on top of the Lark parser, each roll comes with a rich expression tree that enables applications
            to have full control over each roll.
          </p>
          <p><i>d20</i> is used in production to handle over 1 million dice rolls each day.</p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2020 - 2023</i>
            </div>

            <div class="level-right">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'code']" />
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
                <img src="../assets/KinesisToolsLogo.svg" alt="Kinesis Tools Logo" />
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
            <a href="mailto:me@andrew-zhu.com" target="_blank"> Contact me </a>
            for help using these tools for your own data science project!
          </p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2022</i>
            </div>

            <div class="level-right">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'vuejs']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'aws']" />
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a
            href="https://github.com/zhudotexe/aws-kinesis-dataset-exploration-tool"
            target="_blank"
            class="card-footer-item"
            >GitHub</a
          >
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
                <img src="../assets/DicecloudLogo.png" alt="Dicecloud Tools Logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Dicecloud Tools</p>
              <p class="subtitle is-6">New characters simplified.</p>
            </div>
          </div>

          <p>
            The Dicecloud Tools are an old project meant to help users create new characters and manage their spellbooks
            in Dicecloud with minimal effort.
          </p>
          <p>The Dicecloud Tools are looking for new maintainers!</p>
          <div class="level is-mobile">
            <div class="level-left">
              <i>2018 - 2020</i>
            </div>

            <div class="level-right">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'js-square']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'd-and-d']" />
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="dnd/dicecloudtools/autochar.html" target="_blank" class="card-footer-item"> Autochar </a>
          <a href="dnd/dicecloudtools/spellbook.html" target="_blank" class="card-footer-item"> Spell Manager </a>
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
                <img src="../assets/IrisLogo.jpeg" alt="Iris Logo" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Iris</p>
              <p class="subtitle is-6">An AI-powered virtual assistant.</p>
            </div>
          </div>

          <p>
            Built at CruzHacks 2019, Iris combines wearable technology and facial recognition in an AI-powered virtual
            assistance to help Alzheimer's patients combat memory loss.
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
                <font-awesome-icon :icon="['fab', 'python']" />
              </span>
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'angular']" />
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="https://github.com/CruzHacks2019/iris-frontend" target="_blank" class="card-footer-item"> GitHub </a>
          <a href="https://devpost.com/software/iris-io" target="_blank" class="card-footer-item">Devpost</a>
        </footer>
      </div>
    </div>
    <!-- /iris -->
  </div>
</template>

<style scoped></style>
