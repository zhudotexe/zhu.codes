import {library} from "@fortawesome/fontawesome-svg-core";
import {faDAndD, faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBuilding, faCode, faEnvelope, faRobot, faSitemap, faUniversity} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// ==== fontawesome ====
// brands
library.add(faGithub, faDiscord, faDAndD)
// regular
library.add(faEnvelope, faUniversity, faBuilding, faRobot, faSitemap, faCode)

// ==== init ====
createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
