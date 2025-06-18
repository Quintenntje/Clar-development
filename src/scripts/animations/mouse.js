import { gsap } from "gsap";

const $mouseContainer = document.querySelector("[data-animation='mouse']");
const $mouseball = $mouseContainer.querySelector(
  "[data-animation-child='ball']"
);
const $mouseballImage = $mouseContainer.querySelector(
  "[data-animation-child='image']"
);

export const mouseEnterAnimation = gsap.from($mouseball, {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "bounce.inOut",
});

export default function initMouseAnimation() {
  const mm = gsap.matchMedia();

  changeMouseBallColor();
  changeMouseToImage();
  increaseMouseIndex();

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

function increaseMouseIndex() {
  const $sections = document.querySelectorAll("[data-mouse-increase-index]");

  $sections.forEach(($section) => {
    const index = $section.dataset.mouseIncreaseIndex;

    $section.addEventListener("mouseover", () => {
      gsap.to($mouseContainer, {
        zIndex: index,
        duration: 0.5,
      });
    });

    $section.addEventListener("mouseleave", () => {
      gsap.to($mouseContainer, {
        zIndex: 3,
        duration: 0.5,
      });
    });
  });
}

function changeMouseBallColor() {
  const $sections = document.querySelectorAll("[data-mouse-color]");

  $sections.forEach(($section) => {
    const color = $section.dataset.mouseColor;

    $section.addEventListener("mouseover", () => {
      gsap.to($mouseball, {
        backgroundColor: color,
        duration: 0.5,
      });
    });
  });
}

function changeMouseToImage() {
  const $mouseImage = document.querySelectorAll("[data-mouse-image]");

  let blendModeTimeOut = null;
  $mouseImage.forEach(($image) => {
    const image = $image.dataset.mouseImage;

    $image.addEventListener("mouseover", () => {
      clearTimeout(blendModeTimeOut);
      $mouseContainer.style.mixBlendMode = "normal";
      gsap.to($mouseballImage, {
        backgroundImage: `url(../../assets/${image})`,
        duration: 0.5,
        scale: 1,
      });
    });

    $image.addEventListener("mouseleave", () => {
      blendModeTimeOut = setTimeout(() => {
        $mouseContainer.style.mixBlendMode = "difference";
      }, 500);
      gsap.to($mouseballImage, {
        scale: 0,
        backgroundImage: `url(../../assets/${image})`,
        duration: 0.5,
      });
    });
  });
}
