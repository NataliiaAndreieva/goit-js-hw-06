const userName = document.querySelector("#name-input");
const valueEl = document.querySelector("#name-output")

userName.addEventListener("input", onInput);

function onInput(evt) {
    if (!userName.value) {
        valueEl.textContent = 'Anonymous'
        return
    } 
    //else {
    valueEl.textContent = evt.currentTarget.value;
// }
};
