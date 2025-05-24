import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initTitleFadeInAnimation() {
  const $titles = document.querySelectorAll("[data-animation='title-fade-in']");

  $titles.forEach(($title) => {
    const $titleText = $title.querySelectorAll(
      "[data-animation-child='title-fade-in']"
    );

    $titleText.forEach(($text, index) => {
      const delay = index * 0.5;

      gsap.from($text, {
        scrollTrigger: {
          trigger: $title,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },

        opacity: 0,
        y: 20,
        skewX: 10,
        duration: 0.5,
        delay: delay,
      });
    });
  });
}
