import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faAws,
  faDAndD,
  faDiscord,
  faGithub,
  faGoogle,
  faJsSquare,
  faLinkedin,
  faNodeJs,
  faPython,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faBrain,
  faBuilding,
  faCode,
  faDiceD20,
  faDragon,
  faEnvelope,
  faExclamationTriangle,
  faFileAlt,
  faFilter,
  faRobot,
  faSitemap,
  faSort,
  faSortDown,
  faSortUp,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

// ==== fontawesome ====
// brands
library.add(
  faGithub,
  faDiscord,
  faDAndD,
  faLinkedin,
  faPython,
  faAws,
  faJsSquare,
  faNodeJs,
  faAngular,
  faVuejs,
  faGoogle
);
// regular
library.add(
  faEnvelope,
  faUniversity,
  faBuilding,
  faRobot,
  faSitemap,
  faCode,
  faFileAlt,
  faDragon,
  faDiceD20,
  faExclamationTriangle,
  faAngleLeft,
  faAngleRight,
  faSort,
  faSortUp,
  faSortDown,
  faFilter,
  faBrain
);

// ==== init ====
createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
