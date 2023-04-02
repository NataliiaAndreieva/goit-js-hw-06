const sizeControl = document.querySelector("#font-size-control");
const span = document.querySelector('#text');

sizeControl.addEventListener("input", onSize);

function onSize(evt) {
    //console.dir(evt.currentTarget.valueAsNumber)
    span.style.fontSize = `${evt.target.value}px`;
}


