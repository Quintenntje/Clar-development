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
        end: "top 30%",
        toggleActions: "play none reverse reverse",
      },
    });

    fadeInTimeline.from($children, {
      scale: 0,
      duration: 1,
      stagger: {
        amount: 1,
        from: "end",
      },
    });
  });
}
