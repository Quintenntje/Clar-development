import { gsap } from "gsap";

const $mouseContainer = document.querySelector("[data-animation='mouse']");
const $mouseball = $mouseContainer.querySelector(
  "[data-animation-child='ball']"
);

export const mouseEnterAnimation = gsap.from($mouseball, {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "bounce.inOut",
});

export default function initMouseAnimation() {
  const mm = gsap.matchMedia();

  mm.add("(pointer: fine)", () => {
    const quickToX = gsap.quickTo($mouseContainer, "x");
    const quickToY = gsap.quickTo($mouseContainer, "y");

    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      quickToX(clientX);
      quickToY(clientY);
    });

    document.addEventListener("mouseleave", () => {
      gsap.to($mouseContainer, {
        scale: 0,
        ease: "power2.inOut",
      });
    });

    document.addEventListener("mouseenter", () => {
      gsap.to($mouseContainer, {
        scale: 1,
        ease: "power2.inOut",
      });
    });
  });
}
