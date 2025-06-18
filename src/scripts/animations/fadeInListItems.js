import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initFadeInListItemsAnimation() {
  const $items = document.querySelectorAll(
    '[data-animation="fade-in-list-items"]'
  );

  $items.forEach(($item) => {
    const $children = $item.querySelectorAll(
      '[data-animation-child="fade-in-list-items"]'
    );

    gsap.from($children, {
      scrollTrigger: {
        trigger: $item,
        start: "top 100%",
        toggleActions: "play reset play reverse",
      },
      opacity: 0,
      x: -20,
    stagger: {
      amount: 1,
      from: "start",
    }

    });
  });
}
