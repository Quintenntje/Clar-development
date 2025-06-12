import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function initGrowAnimation() {
  const $growParent = document.querySelectorAll('[data-animation="grow"]');

  $growParent.forEach(($parent) => {
    const $children = $parent.querySelectorAll('[data-animation-child="grow"]');

    gsap.from($children, {
      scrollTrigger: {
        trigger: $parent,
        start: "top 100%",
        toggleActions: "play reset play reverse",
      },
      scale: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });
  });
}
