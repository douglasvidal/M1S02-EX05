export function untilTen(pElement) {
  let counter = 0;
  let idSetInterval = setInterval(() => {
    counter++;
    pElement.innerText = counter;
    if (counter > 10) {
      clearInterval(idSetInterval);
      pElement.innerText = "Seu tempo acabou!! Tente novamente!!";
    }
  }, 1000);
}
