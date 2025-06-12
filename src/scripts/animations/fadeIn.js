import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initFadeInAnimation() {
  const $fadeInEl = document.querySelectorAll("[data-animation='fade-in']");

  $fadeInEl.forEach(($el) => {
    const fadeInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $el,
        start: "top 80%",
        toggleActions: "play reset play reverse",
      },
    });

    fadeInTimeline.from($el, {
      opacity: 0,
      y: 100,
    });
  });
}
