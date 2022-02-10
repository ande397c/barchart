"use strict";
window.addEventListener("load", setup);

const model = [32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30, 7, 3, 6, 3, 6, 3, 19, 24, 29, 14, 4, 1, 18, 1];

const queueSize = getNumberOfCustomers();

const barArray = document.querySelectorAll(".bar");

console.log(barArray, model);

let randomBar = barArray[16] + model[5];

// barArray[16].style.height = "30%";

console.log(randomBar);

function setup() {
  console.log("setup");
}

function loop() {
  console.log("loop");
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function showData() {
  console.log("showData");
  barArray.forEach((bar) => {
    console.log("hey");
  });
}

function updateModel() {
  console.log("updateModel");
}
