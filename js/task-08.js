const form = document.querySelector(".login-form");


form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
    evt.preventDefault();
    const formEl = evt.currentTarget.elements;

     const dataForm = {
       email: formEl.email.value,
       password: formEl.password.value,
     };
    
    if (formEl.email.value === "" || formEl.password.value === "") {
      return alert(`Всі поля повинні бути заповнені`);
    } 
      
    console.log(dataForm);
    evt.currentTarget.reset();
    
}
