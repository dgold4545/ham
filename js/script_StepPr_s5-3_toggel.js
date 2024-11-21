// TOGGEL SWITCH:

const switcher = document.querySelector(".switch input");
const carouselSw = document.querySelector("#carousel");
const carouselSwExtra = document.querySelector("#carousel_extra");

toggelSwitch();
switcher.addEventListener("change", toggelSwitch);

function toggelSwitch() {
  if (switcher.checked) {
    carouselSw.classList.add("hidden");
    carouselSwExtra.classList.remove("hidden");
    generalThumb();
  } else {
    carouselSw.classList.remove("hidden");
    carouselSwExtra.classList.add("hidden");

    startedSection();
  }
}
