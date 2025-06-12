import initMouseAnimation from "./animations/mouse";
import initPageLoaderAnimation from "./animations/pageLoader";
import initTitleStickAnimation from "./animations/itemStick";
import initFadeInAnimation from "./animations/fadeIn";
import initHorizontalScrollAnimation from "./animations/horizontalScroll";
import initFadeInListItemsAnimation from "./animations/fadeInListItems";
import loadLottieFiles from "./lottie";
import initGrowAnimation from "./animations/grow";
import initShrinkAnimation from "./animations/shrink";
import initParallaxEffectAnimation from "./animations/parallax";


document.addEventListener("DOMContentLoaded", () => {
  initMouseAnimation();
  initPageLoaderAnimation();
  initTitleStickAnimation();
  initFadeInAnimation();
  initHorizontalScrollAnimation();
  initFadeInListItemsAnimation();
  initGrowAnimation();
  initShrinkAnimation();
  initParallaxEffectAnimation();
  loadLottieFiles();
});
