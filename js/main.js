let menuBtn = document.querySelector(".menu-container"),
  spnaMenuBtn = menuBtn.children,
  overlay = document.querySelector(".overlay"),
  removedSpna = document.getElementById("remove");

menuBtn.onclick = function (e) {
  overlay.classList.toggle("active");
  changeMenueBar();
};

function changeMenueBar() {
  for (var i = 0; i <= spnaMenuBtn.length - 1; i++) {
    if (overlay.classList.contains("active")) {
      spnaMenuBtn[i].classList.add("active");
      removeSpan();
    } else {
      spnaMenuBtn[i].classList.remove("active");
      renderSpan();
    }
  }
}

function removeSpan() {
  removedSpna.style.width = "0px";
  removedSpna.style.display = "none";
}
function renderSpan() {
  removedSpna.style.width = "45px";
  removedSpna.style.display = "block";
}
