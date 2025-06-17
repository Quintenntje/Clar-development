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

    $children.forEach(($el, index) => {
      const fadeInTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: $item,
          start: "top 100%",
          toggleActions: "play reset play reverse",
        },
      });

      fadeInTimeline.from($el, {
        opacity: 0,
        x: -20,
        delay: index * 0.2,
      });
    });
  });
}
