// Buttons

const buttonA = document
  .querySelector(".a")
  .addEventListener("click", playAnimation);
const buttonB = document
  .querySelector(".b")
  .addEventListener("click", deselectAnimation);
const buttonPad = document
  .querySelector(".numpad")
  .addEventListener("click", padSelection);
// const buttonSta = document
//   .querySelector(".start")
//   .addEventListener("click", func);
// const buttonSel = document
//   .querySelector(".select")
//   .addEventListener("click", func);

// Character Array
const characters = document.querySelectorAll(".ch");
const idles = document.querySelectorAll(".sp");

// Audio Files
const soundMove = new Audio("wav/song904.wav");
const soundSelect = new Audio("wav/song906.wav");
const soundDeselect = new Audio("wav/song905.wav");

function padSelection() {
  soundMove.pause();
  soundMove.currentTime = 0;
  removeAnimation();
  // for (i = 0; i < characters.length; i++) {
  //   if (!characters[i].classList.contains("selected")) {
  //     characters[i].classList.add("selected");
  //     idles[i].classList.remove("hidden");
  //     for (j = 0; j < characters.length; j++) {
  //       if (j != i) {
  //         characters[j].classList.remove("selected");
  //         idles[j].classList.add("hidden");
  //       }
  //     }
  soundMove.play();
  if (characters[0].classList.contains("selected")) {
    selectHec();
  } else if (characters[1].classList.contains("selected")) {
    selectEli();
  } else {
    selectLyn();
  }
  return;
}

function playAnimation() {
  removeAnimation();
  soundSelect.pause();
  soundSelect.currentTime = 0;
  for (i = 0; i < characters.length; i++) {
    if (characters[i].classList.contains("selected")) {
      if (characters[i].classList.contains("lynp")) {
        document.querySelector(".lyna").classList.remove("hidden");
      } else if (characters[i].classList.contains("hecp")) {
        document.querySelector(".heca").classList.remove("hidden");
      } else if (characters[i].classList.contains("elip")) {
        document.querySelector(".elia").classList.remove("hidden");
      }
    }
  }
  soundSelect.play();
}

function deselectAnimation() {
  soundDeselect.pause();
  soundDeselect.currentTime = 0;
  removeAnimation();
  characters[0].classList.remove("selected");
  characters[1].classList.remove("selected");
  characters[2].classList.remove("selected");
  soundDeselect.play();
}

function removeAnimation() {
  document.querySelector(".lyna").classList.add("hidden");
  document.querySelector(".lyn").classList.add("hidden");
  document.querySelector(".heca").classList.add("hidden");
  document.querySelector(".hec").classList.add("hidden");
  document.querySelector(".elia").classList.add("hidden");
  document.querySelector(".eli").classList.add("hidden");
}

function removeSelection() {
  characters[0].classList.remove("selected");
  characters[1].classList.remove("selected");
  characters[2].classList.remove("selected");
  idles[0].classList.add("hidden");
  idles[1].classList.add("hidden");
  idles[2].classList.add("hidden");
}

function selectLyn() {
  removeSelection();
  characters[0].classList.add("selected");
  idles[0].classList.remove("hidden");
}

function selectHec() {
  removeSelection();
  characters[1].classList.add("selected");
  idles[1].classList.remove("hidden");
}

function selectEli() {
  removeSelection();
  characters[2].classList.add("selected");
  idles[2].classList.remove("hidden");
}
