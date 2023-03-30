const validation = document.querySelector("#validation-input");
const textLength = validation.getAttribute("data-length");

validation.addEventListener("blur", checkText)

function checkText(evt) {
    if (evt.currentTarget.value.length === Number(textLength)) {
        validation.classList.add("valid");
        validation.classList.remove("invalid");
     
       
    } else {
        validation.classList.add("invalid");
       
    }
}
    



