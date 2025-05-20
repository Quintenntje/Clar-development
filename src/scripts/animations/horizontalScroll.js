import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initHorizontalScrollAnimation() {
  const $scrollContainer = document.querySelectorAll(
    '[data-animation="horizontal-scroll"]'
  );

  $scrollContainer.forEach(($container) => {
    const $scrollItems = $container.querySelectorAll(
      '[data-animation-child="horizontal-scroll"]'
    );

    const panelContainerMovement = gsap.to($container, {
      x: () => `-${$container.scrollWidth}`,
      scrollTrigger: {
        trigger: $container,
        scrub: true,
        pin: true,
        anticipatePin: true,
        start: "top top",
        end: () => `+=${$container.scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    $scrollItems.forEach(($item) => {
      gsap.to($item, {
        // scrollTrigger: {
        //   trigger: $item,
        //   start: "0 50%",
        //   containerAnimation: panelContainerMovement,
        // },
      });
    });
  });
}
