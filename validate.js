const form = document.querySelector(".contact__form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const errorMessage = document.querySelector(".error__message")
const emailError = document.querySelector(".error__message--email")
const phoneError = document.querySelector(".error__message--phone")

form.addEventListener("submit", (e) => {
    e.preventDefault();
  checkInputs();
    })

function checkInputs() {
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()

    if (userNameValue === "") {
        errorMessage.classList.add("show")
}
    if (emailValue === "") {
        emailError.classList.add("show")
}
    if (phoneValue === "") {
        phoneError.classList.add("show")
        
}
}






