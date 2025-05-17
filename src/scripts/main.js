import initMouseAnimation from "./animations/mouse";
import initPageLoaderAnimation from "./animations/pageLoader";
import initTitleStickAnimation from "./animations/titleStick";

document.addEventListener("DOMContentLoaded", () => {
  initMouseAnimation();
  initPageLoaderAnimation();
  initTitleStickAnimation();
});
