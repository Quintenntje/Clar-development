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
        toggleActions: "play none none reverse",
      },
    });

    fadeInTimeline.from($children, {
      scale: 0.5,
      stagger:{
        amount: 0.2,
        from: "end",
      }
    });
  });
}
