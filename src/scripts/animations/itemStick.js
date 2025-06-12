import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initTitleStickAnimation() {
  const $containers = document.querySelectorAll("[data-animation='title-pin']");

  $containers.forEach(($container) => {
    const $title = $container.querySelectorAll(
      "[data-animation-child='title-pin']"
    );

    $title.forEach(($child) => {
      stickAnimation($container, $child);
    });
  });
}

function stickAnimation($container, $child) {
  const containerHeight = $container.offsetHeight;
  const childHeight = $child.offsetHeight;

  const scrollDistance = containerHeight - childHeight;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $container,
      start: "top top",
      end: `+=${scrollDistance}`,
      scrub: true,
    },
  });

  tl.to($child, {
    y: scrollDistance,
  });
}
