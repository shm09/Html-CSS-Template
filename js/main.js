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

// Get Button Element
let btn = document.getElementById("scroll-top");

// Check The Scroll On Window
window.onscroll = function () {
  if (window.scrollY > 500) {
    // Change The style Of The Button
    btn.style.opacity = 1;
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.pointerEvents = "all";
    btn.style.right = "10px";
  } else {
    // Change The style Of The Button
    btn.style.opacity = 0;
    btn.style.width = "0px";
    btn.style.height = "0px";
    btn.style.pointerEvents = "none";
    btn.style.right = "-56px";
  }
};

// Add Scroll To Top On The Button
btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Make The Scrolling Smooth On Site
window.document.documentElement.style.scrollBehavior = "smooth";
