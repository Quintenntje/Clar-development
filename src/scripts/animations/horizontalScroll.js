import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const $body = document.querySelector("body");

const $mouseContainer = document.querySelector("[data-animation='mouse']");
const $mouseball = $mouseContainer.querySelector(
  "[data-animation-child='ball']"
);

const $horizontalScrollTitle = document.querySelector(
  '[data-animation="horizontal-scroll-title"]'
);

export default function initHorizontalScrollAnimation() {
  const $scrollContainer = document.querySelectorAll(
    '[data-animation="horizontal-scroll"]'
  );

  $scrollContainer.forEach(($container) => {
    const $scrollItems = $container.querySelectorAll(
      '[data-animation-child="horizontal-scroll"]'
    );

    const blue = "#082b9d";
    const white = "#f8f6f1";

    const ContainerMovement = gsap.to($container, {
      x: () => `-${$container.scrollWidth + $container.offsetWidth}px`,
      scrollTrigger: {
        trigger: $container.parentElement,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: () => `+=${$container.scrollHeight}`,
        invalidateOnRefresh: true,

        onLeaveBack: () => {
          gsap.to($body, {
            backgroundColor: white,
          });
          gsap.to($container, {
            color: blue,
          });
          gsap.to($horizontalScrollTitle, {
            backgroundColor: white,
            color: blue,
          });

          gsap.to($mouseball, {
            backgroundColor: blue,
          });
        },
      },
    });

    $scrollItems.forEach(($item) => {
      gsap.to($item, {
        scrollTrigger: {
          trigger: $item,
          markers: true,
          start: "left 20%",
          end: "right 30%",
          containerAnimation: ContainerMovement,

          onLeaveBack: (self) => {
            gsap.to($item, {
              opacity: 1,
            });
          },

          onEnter: (self) => {
            gsap.to($item, {
              opacity: 0,
            });
          },

          onEnterBack: (self) => {
            gsap.to($item, {
              opacity: 1,
            });
          },

          onUpdate: (self) => {
            gsap.to($body, {
              backgroundColor: $item.getAttribute("data-color-bg"),
            });
            gsap.to($container, {
              color: $item.getAttribute("data-color-text"),
            });

            gsap.to($horizontalScrollTitle, {
              backgroundColor: $item.getAttribute("data-color-bg"),
              color: $item.getAttribute("data-color-text"),
            });

            gsap.to($mouseball, {
              backgroundColor: $item.getAttribute("data-mouse-color"),
            });
          },
        },
      });
    });
  });
}
