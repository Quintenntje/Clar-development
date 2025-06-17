import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initFadeInAnimation() {
  const $fadeInEl = document.querySelectorAll("[data-animation='fade-in']");

  $fadeInEl.forEach(($el) => {
    gsap.from($el, {
      scrollTrigger: {
        trigger: $el,
        start: "top 100%",
        toggleActions: "play reset play reverse",
      },
      y: 150,
      opacity: 0,
    });
  });
}
