/** @type {number} */
let count = 0;

function onClickPlus() {
  count += 1;
  const countElem = /** @type {HTMLSpanElement} */ (document.querySelector("span.count"));
  countElem.textContent = count.toString();
}

function onClickMinus() {
  count -= 1;
  const countElem = /** @type {HTMLSpanElement} */ (document.querySelector("span.count"));
  countElem.textContent = count.toString();
}

document.querySelector("button.plus").addEventListener("click", onClickPlus);
document.querySelector("button.minus").addEventListener("click", onClickMinus);
