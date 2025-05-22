import { gsap } from "gsap";
export default function initShrinkAnimation() {
  const $shrinkElements = document.querySelectorAll(
    '[data-animation="shrink"]'
  );

  $shrinkElements.forEach(($el) => {
    $el.addEventListener("mouseenter", () => {
      gsap.to($el, {
        scale: 0.8,
        rotation: 15,
        duration: 0.5,
        ease: "back.in(2)",
      });
    });

    $el.addEventListener("mouseleave", () => {
      gsap.to($el, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
           ease: "back.out(2)"
      });
    });
  });
}
