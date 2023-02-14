const buttons = document.querySelectorAll(".button_post-modal");
const modal = document.querySelector(".post-modal");
const buttonClose = document.querySelector(".post-modal__button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("active");
  });
});

buttonClose.addEventListener("click", () => {
  modal.classList.remove("active");
});
