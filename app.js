const EYE_WIDTH = 75;
const EYE_HEIGHT = 50;
const PUPIL_SIZE = 25;
const xRatio = (EYE_WIDTH - PUPIL_SIZE) / EYE_WIDTH;
const yRatio = (EYE_HEIGHT - PUPIL_SIZE) / EYE_HEIGHT;
let pupils;
let eyes;

window.addEventListener("load", () => {
  eyes = document.querySelectorAll(".eye");
  pupils = document.querySelectorAll(".pupil");
  eyes.forEach((eye) => {
    eye.style.width = `${EYE_WIDTH}px`;
    eye.style.height = `${EYE_HEIGHT}px`;
  });

  pupils.forEach((pupil) => {
    pupil.style.width = `${PUPIL_SIZE}px`;
    pupil.style.height = `${PUPIL_SIZE}px`;
  });
});

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const { clientHeight, clientWidth } = document.body;

  const heightPercent = clientY / clientHeight;
  const widthPercent = clientX / clientWidth;

  pupils.forEach((pupil) => {
    pupil.style.top = `${heightPercent * yRatio * 100}%`;
    pupil.style.left = `${widthPercent * xRatio * 100}%`;
  });
});

const closeEyes = () => {
  eyes.forEach((eye) => {
    eye.style.height = `${EYE_HEIGHT * 0.2}px`;
  });
};

const openEyes = () => {
  eyes.forEach((eye) => {
    eye.style.height = `${EYE_HEIGHT}px`;
  });
};

window.addEventListener("mousedown", closeEyes);
window.addEventListener("touchstart", closeEyes);

window.addEventListener("mouseup", openEyes);
window.addEventListener("touchend", openEyes);
