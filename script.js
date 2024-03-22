const submitBtn = document.querySelector(".submit-btn");
const rateBtn = document.querySelector(".rate-btn");
const appreciation = document.querySelector(".appreciation");
const details = document.querySelector(".details");
const numbers = document.querySelectorAll(".number");
const span = document.querySelector("span");

submitBtn.addEventListener("click", displayAppreciation);
rateBtn.addEventListener("click", displayDetails);
numbers.forEach(number => {
    number.addEventListener("click", () => {
        span.innerHTML = number.innerHTML;
    });
});

function displayAppreciation() {
    appreciation.classList.remove("hidden");
    details.classList.add("hidden");
}
function displayDetails() {
    appreciation.classList.add("hidden");
    details.classList.remove("hidden");
}
