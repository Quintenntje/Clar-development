import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initFadeInAnimation() {
  const $fadeInEl = document.querySelectorAll("[data-animation='fade-in']");

  $fadeInEl.forEach(($el) => {
    gsap.from($el, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: $el,
        start: "top 100%",
        end: "bottom 0%",
        toggleActions: "play reset play reverse",
      },
    });
  });
}
