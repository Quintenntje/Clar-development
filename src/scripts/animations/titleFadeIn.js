import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initTitleFadeInAnimation() {
  const $titles = document.querySelectorAll("[data-animation='title-fade-in']");

  $titles.forEach(($title) => {
    const $titleText = $title.querySelectorAll(
      "[data-animation-child='title-fade-in']"
    );

    if ($titleText.length === 4) {
      const titleTextArray = Array.from($titleText);

      const first = titleTextArray.slice(0, 2);
      const second = titleTextArray.slice(2, 4);

      first.forEach(($text, index) => {
        const delay = 0.2;

        textAnimation($text, $title, delay);
      });

      second.forEach(($text, index) => {
        const delay = 0.2 + 0.75;

        textAnimation($text, $title, delay);
      });
    } else {
      $titleText.forEach(($text, index) => {
        const delay = index * 0.2;

        textAnimation($text, $title, delay);
      });
    }
  });

  function textAnimation($text, $title, delay) {
    gsap.to($text, {
      scrollTrigger: {
        trigger: $title,
         start: "top 100%",
        toggleActions: "play reset play reset",
      },

      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      rotation: 0,
      duration: 0.5,
      delay: delay,
    });
  }
}
