import Typed from "typed.js";

const loadDynamicBannerText = () => {
  let span = document.querySelector("#banner-typed-text");
  if (span) {
    new Typed("#banner-typed-text", {
      strings: ["Terror", "Comedy", "Scy-Fy", "Action"],
      typeSpeed: 50,
      loop: true,
    });
  }
};

export { loadDynamicBannerText };
