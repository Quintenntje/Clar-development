import initMouseAnimation from "./animations/mouse";
import initPageLoaderAnimation from "./animations/pageLoader";
import initTitleStickAnimation from "./animations/itemStick";
import initTitleFadeInAnimation from "./animations/titleFadeIn";

document.addEventListener("DOMContentLoaded", () => {
  initMouseAnimation();
  initPageLoaderAnimation();
  initTitleStickAnimation();
  initTitleFadeInAnimation();
});
