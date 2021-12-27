const form = document.querySelector(".contact__form");
const input = document.getElementById("input")
const errorMessage = document.querySelectorAll(".error__message");

function errorMessages() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value.length < 1 || input.value === null) {
            errorMessage.classList.add("show")
        }
    })
}

errorMessages()