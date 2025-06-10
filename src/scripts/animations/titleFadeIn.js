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
      const delay = index * 0.2;

      gsap.to($text, {
        scrollTrigger: {
          trigger: $title,
          start: "top 80%",
          end: "center 80%",
          toggleActions: "play none none reverse",
        },

        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        rotation: 0,
        duration: 0.5,
        delay: delay,
      });
    });
  });
}
