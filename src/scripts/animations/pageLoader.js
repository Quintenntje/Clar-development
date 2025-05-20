import { gsap } from "gsap";
import { mouseEnterAnimation } from "./mouse.js";
import { titleFadeInAnimation } from "./titleFadeIn.js";

const $wrapper = document.querySelector("[data-animation='loader']");
const $logo = document.querySelector("[data-animation-child='logo']");

function logoTimeline() {
  const $logo = document.querySelector("[data-animation-child='logo']");
  const tl = gsap.timeline({
    delay: 1,
  });

  tl.to($logo, {
    y: 0,
    bottom: 0,
    ease: "power2.out",
  }).to($logo, {
    delay: 0.25,
    y: -200,
    ease: "power2.out",
  });

  return tl;
}

function wrapperTimeline() {
  const $wrapper = document.querySelector("[data-animation='loader']");
  const tl = gsap.timeline();

  tl.to($wrapper, {
    xPercent: 100,
  });

  return tl;
}

function initPageLoaderAnimation() {
  const masterTimeline = gsap.timeline();

  masterTimeline
    .add(logoTimeline($logo))
    .add(
      wrapperTimeline($wrapper)
        .add(mouseEnterAnimation, "<+.5")
        .add(titleFadeInAnimation, "<+.5")
    );
}

export default initPageLoaderAnimation;
