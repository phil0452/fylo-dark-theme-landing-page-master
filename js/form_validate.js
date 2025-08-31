 function handleSubmit(event) {
event.preventDefault();

    let email = document.getElementById("email");
    let errorMessage = document.getElementById("error-message");
debugger;
  if (email.value == null || email.value == "") {
  errorMessage.classList.add("active");
  } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) === false) { 
    errorMessage.classList.add("active");
  }
  else {
    errorMessage.classList.remove("active");
     console.log('Form submitted via inline handler!');
     alert('Form submitted via inline handler!');
  }
}