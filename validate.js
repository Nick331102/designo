

function errorMessages() {

    const form = document.querySelector(".contact__form");
    const userInput = document.querySelector("#input")
    const errorMessage = document.querySelectorAll(".error__message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (userInput.value === "") {
            errorMessage.classList.add("show")
        }
    })
}
errorMessages()