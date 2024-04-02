import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleInfo,
  faCircleExclamation,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircleInfo,
  faCircleExclamation,
  faArrowRight
);

config.autoAddCss = false;

// Register the component globally
export default {
  install: (app: any) => {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
