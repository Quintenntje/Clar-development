import { gsap } from "gsap";
export default function initShrinkAnimation() {
  const $shrinkElements = document.querySelectorAll(
    '[data-animation="shrink"]'
  );

  $shrinkElements.forEach(($shrinkElementChild) => {
    const $childElements = $shrinkElementChild.querySelectorAll(
      '[data-animation-child="shrink"]'
    );

    $childElements.forEach(($el) => {
      $shrinkElementChild.addEventListener("mouseenter", () => {
        gsap.to($el, {
          scale: 0.8,
          rotation: 15,
          duration: 0.5,
          ease: "back.in(2)",
        });
      });

      $shrinkElementChild.addEventListener("mouseleave", () => {
        gsap.to($el, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(2)",
        });
      });
    });
  });
}
