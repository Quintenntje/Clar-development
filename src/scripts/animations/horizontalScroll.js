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
    const yellow = "#f4b63e";
    const white = "#f8f6f1";

    const ContainerMovement = gsap.to($container, {
      x: () => `-${$container.scrollWidth + $container.offsetWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: $container.parentElement,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: () => `+=${$container.scrollHeight}`,

        onLeaveBack: () => {
          gsap.to($body, {
            backgroundColor: white,
          });
          gsap.to($container, {
            color: blue,
          });
          gsap.to($horizontalScrollTitle, {
            color: blue,
          });

          gsap.to($mouseball, {
            backgroundColor: yellow,
          });
        },
      },
    });

    $scrollItems.forEach(($item) => {
      ScrollTrigger.create({
        trigger: $item,
        containerAnimation: ContainerMovement,
        scrub: true,
        start: "left 18%",
        end: "right 20%",

        onUpdate: (self) => {
          const opacity = 1 - self.progress * 1.5;

          gsap.to($item, {
            opacity: opacity,
          });
        },

        onLeaveBack: (self) => {
           const opacity = 1 - self.progress * 1.5;

          gsap.to($item, {
            opacity: opacity,
          });
          runColorAnimation();
        },

        onEnterBack: (self) => {
          runColorAnimation();
        },

        onEnter: (self) => {
          runColorAnimation();
        },
      });

      function runColorAnimation() {
        gsap.to($body, {
          backgroundColor: $item.getAttribute("data-color-bg"),
        });
        gsap.to($container, {
          color: $item.getAttribute("data-color-text"),
        });

        gsap.to($horizontalScrollTitle, {
          color: $item.getAttribute("data-color-text"),
        });

        gsap.to($mouseball, {
          backgroundColor: $item.getAttribute("data-mouse-color"),
        });
      }
    });
  });
}
