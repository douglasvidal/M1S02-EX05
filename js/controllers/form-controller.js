import * as chronometerService from "../services/chronometer-service.js";
import * as sectionController from "./section-controller.js";

function State() {
  this.buttonChronometer = null;
}

const state = new State();

export function init() {
  state.buttonChronometer = document.querySelector("#chronometer");

  state.buttonChronometer.addEventListener(
    "click",
    handleButtonChronometerClick
  );
}

function handleButtonChronometerClick(event) {
  event.preventDefault();  
  chronometerService.untilTen(sectionController.textChronometerElement());
}
