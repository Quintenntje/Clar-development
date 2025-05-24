import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initParallaxEffectAnimation() {
  const $containers = document.querySelectorAll('[data-animation="parallax"]');

  $containers.forEach(($container) => {
    gsap.from($container, {
      scrollTrigger: {
        trigger: $container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "-100svh",
      ease: "none",
    });
  });
}
