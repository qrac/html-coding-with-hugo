//----------------------------------------------------
// FontAwesome
//----------------------------------------------------

//import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library, dom } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

config.showMissingIcons = false;
config.autoAddCss = false;
config.replacementClass = "icon";
library.add(faStar);
dom.i2svg();
