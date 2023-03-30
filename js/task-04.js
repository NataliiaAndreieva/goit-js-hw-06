const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector(
  '[data-action="increment"]'
);

let counterValue = 0;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  newValue(); 
}
function increment() {
counterValue += 1;
newValue(); 
}

function newValue() {
  valueEl.textContent = counterValue;
}