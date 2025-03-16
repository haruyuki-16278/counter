let count = 0;

function onClickPlus() {
  count += 1;
  const countElem = document.querySelector("span.count");
  countElem.textContent = count;
}

function onClickMinus() {
  count -= 1;
  const countElem = document.querySelector("span.count");
  countElem.textContent = count;
}

document.querySelector("button.plus").addEventListener("click", onClickPlus);
document.querySelector("button.minus").addEventListener("click", onClickMinus);
