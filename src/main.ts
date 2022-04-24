import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faAngular,
    faAws,
    faDAndD,
    faDiscord,
    faGithub,
    faJsSquare,
    faLinkedin,
    faNodeJs,
    faPython
} from "@fortawesome/free-brands-svg-icons";
import {
    faBuilding,
    faCode,
    faDiceD20,
    faDragon,
    faEnvelope,
    faFileAlt,
    faRobot,
    faSitemap,
    faUniversity,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// ==== fontawesome ====
// brands
library.add(faGithub, faDiscord, faDAndD, faLinkedin, faPython, faAws, faJsSquare, faNodeJs, faAngular)
// regular
library.add(faEnvelope, faUniversity, faBuilding, faRobot, faSitemap, faCode, faFileAlt, faDragon, faDiceD20, faExclamationTriangle)

// ==== init ====
createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
