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
                Rolling with over 5 million users across over 340,000 Discord servers since 2016.
              </p>
              <p>
                <i>2016 - current</i>
              </p>
              <div>
                icons lahee
              </div>
            </div>
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
              <p>
                <i>2021 - current</i>
              </p>
              <div>
                icons lahee
              </div>
            </div>
          </div>
        </div>
        <!-- /paissa -->

        <!-- draconic -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <!--<div class="card-image">-->
            <!--  <figure class="image is-16by9">-->
            <!--    <img src="../assets/PaissaBanner.jpeg" alt="Paissa Stack Banner">-->
            <!--  </figure>-->
            <!--</div>-->
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/PaissaLogo.png" alt="Paissa Stack Logo">
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
              <p>
                <i>2020 - current</i>
              </p>
              <div>
                icons lahee
              </div>
            </div>
          </div>
        </div>
        <!-- /draconic -->

        <!-- d20 -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <!--<div class="card-image">-->
            <!--  <figure class="image is-16by9">-->
            <!--    <img src="../assets/PaissaBanner.jpeg" alt="Paissa Stack Banner">-->
            <!--  </figure>-->
            <!--</div>-->
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/PaissaLogo.png" alt="Paissa Stack Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">d20</p>
                  <p class="subtitle is-6">Safe server-side user scripting.</p>
                </div>
              </div>

              <p>
                blep
              </p>
              <p>
                <i>2020 - current</i>
              </p>
              <div>
                icons lahee
              </div>
            </div>
          </div>
        </div>
        <!-- /d20 -->

        <!-- dicecloud tools -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <!--<div class="card-image">-->
            <!--  <figure class="image is-16by9">-->
            <!--    <img src="../assets/PaissaBanner.jpeg" alt="Paissa Stack Banner">-->
            <!--  </figure>-->
            <!--</div>-->
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/PaissaLogo.png" alt="Paissa Stack Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Dicecloud Tools</p>
                  <p class="subtitle is-6">Safe server-side user scripting.</p>
                </div>
              </div>

              <p>
                blep
              </p>
              <p>
                <i>2018 - 2020</i>
              </p>
              <div>
                icons lahee
              </div>
            </div>
          </div>
        </div>
        <!-- /dicecloud tools -->

        <!-- iris -->
        <div class="column is-6-tablet is-4-desktop is-3-fullhd">
          <div class="card">
            <!--<div class="card-image">-->
            <!--  <figure class="image is-16by9">-->
            <!--    <img src="../assets/PaissaBanner.jpeg" alt="Paissa Stack Banner">-->
            <!--  </figure>-->
            <!--</div>-->
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/PaissaLogo.png" alt="Paissa Stack Logo">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Iris</p>
                  <p class="subtitle is-6">Safe server-side user scripting.</p>
                </div>
              </div>

              <p>
                blep
              </p>
              <p>
                <i>2019</i>
              </p>
              <div>
                icons lahee
              </div>
            </div>
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

  <section class="section">
    <div class="container">
      <p>
        This website is still under construction (I just wanted to get CI/CD running :p). If you're looking for the old
        version of the website, use <a href="https://andrew-zhu.com">andrew-zhu.com</a>.
      </p>
    </div>
  </section>
</template>

<script>
import CurrentTime from "@/components/CurrentTime";

export default {
  name: 'Home',
  components: {CurrentTime}
}
</script>
