import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function initGrowAnimation() {
  const $growParent = document.querySelectorAll('[data-animation="grow"]');

  $growParent.forEach(($parent) => {
    const $children = $parent.querySelectorAll('[data-animation-child="grow"]');

    const fadeInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $parent,
        start: "top 80%",
        toggleActions: "play reset play reverse",
      },
    });

    fadeInTimeline.from($children, {
      scale: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });
  });
}
