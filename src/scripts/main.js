import initMouseAnimation from "./animations/mouse";
import initPageLoaderAnimation from "./animations/pageLoader";
import initTitleStickAnimation from "./animations/itemStick";

document.addEventListener("DOMContentLoaded", () => {
  initMouseAnimation();
  initPageLoaderAnimation();
  initTitleStickAnimation();
});
