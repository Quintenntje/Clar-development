import { DotLottie } from "@lottiefiles/dotlottie-web";

function loadLottieFiles() {
  const $canvases = document.querySelectorAll("[data-lottie-source]");

  $canvases.forEach(($canvas) => {
    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      speed: 1,
      canvas: $canvas,
      layout: {
        fit: "cover",
        align: [0.5, 0],
      },
      src: `/assets/lotties/${$canvas.getAttribute("data-lottie-source")}`,
    });
  });
}

export default loadLottieFiles;
