import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initTitleStickAnimation() {
  const $container = document.querySelectorAll("[data-animation='title-pin'");

  $container.forEach(($el) => {
    const $title = $el.querySelectorAll("[data-animation-child='title-pin']");

    $title.forEach(($child) => {
      stickAnimation($el, $child);
    });
  });
}

function stickAnimation($el, $child) {
  const containerHeight = $el.offsetHeight;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $el,
      start: "top top",
      end: `+=${containerHeight}`,
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  tl.to($child, {
    y: containerHeight / 4,
  });
}
