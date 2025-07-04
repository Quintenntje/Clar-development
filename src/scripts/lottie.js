import { DotLottie } from "@lottiefiles/dotlottie-web";

function loadLottieFiles() {
  const $canvases = document.querySelectorAll("[data-lottie-source]");

  $canvases.forEach(($canvas) => {
    const dotLottie = new DotLottie({
      autoplay: $canvas.getAttribute("data-lottie-autoplay") === "true",
      loop: $canvas.getAttribute("data-lottie-loop") === "true",
      speed: $canvas.getAttribute("data-lottie-speed") || 1,
      canvas: $canvas,
      layout: {
        fit: "cover",
        align: [0.5, 0],
      },
      src: `./assets/lotties/${$canvas.getAttribute("data-lottie-source")}`,
    });
  });
}

export default loadLottieFiles;
