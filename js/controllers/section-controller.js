function State() {
  this.textChronometer = null;
}

const state = new State();

export function init() {
  state.textChronometer = document.querySelector(".chronometer-text");
}

export function textChronometerElement() {
  return state.textChronometer;
}
