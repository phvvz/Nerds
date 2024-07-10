const modal = document.querySelector(".modal");
const clickModalShow = document.querySelector(".map-contact__btn");
const clickCloseModal = modal.querySelector(".btn-close");
const form = modal.querySelector("form");
const userName = modal.querySelector("[name=name]");
const userEmail = modal.querySelector("[name=email]");
const userText = modal.querySelector("[name=text]");
const overlay = document.querySelector(".overlay");

let isStorageSupport = true;
let storage = "";
//перехват ошибок «исключительные ситуации» (исключения) start
try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}
// end .......................

clickModalShow.addEventListener("click", function (evt) {
  evt.preventDefault();

  modal.classList.add("modal_show");
  overlay.classList.add("overlay_show");
  //фокус на поле name

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

clickCloseModal.addEventListener("click", function () {
  modal.classList.remove("modal_show", "modal-error");
  overlay.classList.remove("overlay_show");
  modal.offsetWidth = modal.offsetWidth;
  let issClass = modal.classList.contains("modal_show");
  if (!issClass) {
    localStorage.removeItem("name");
  }
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal_show")) {
      evt.preventDefault();
      modal.classList.remove("modal_show", "modal-error");
      overlay.classList.remove("overlay_show");
    }
  }
});
window.addEventListener("click", function () {
  modal.classList.remove("modal-show");
});
