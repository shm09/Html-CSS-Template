const userName = document.querySelector("[name=username]"),
  userEmail = document.querySelector("[name=email]"),
  userSubject = document.querySelector("[name=subject]"),
  contactSection = document.querySelector(".contact-forms"),
  forms = document.forms[0],
  allInput = document.querySelectorAll("input:not([type=submit])"),
  input = document.querySelectorAll("input"),
  alertEl = document.querySelector(".inputs-alerts-error");

let count = 0;

input.forEach((e) => (e.onfocus = () => (e.style.opacity = "1")));

// Form On Submit
forms.onsubmit = (e) => {
  let userNameValid = false,
    userEmailValid = false,
    userSubjectValid = false;

  if (
    userName.value === "" ||
    userEmail.value === "" ||
    userSubject.value === ""
  ) {
    e.preventDefault();
    allInput.forEach((e) => {
      if (allInput[count].value === "") {
        e.onfocus = () => (e.style.opacity = "1");
        alertEl.innerHTML = `Should fill the ${allInput[count].attributes.name.nodeValue} Information`;
        alertEl.style.display = "block";
        allInput[count].focus();
        allInput[count].style.border = "1px solid #ed2525d9";
      } else if (allInput[count] !== "") {
        alertEl.style.display = "none";
        e.onblur = () => (e.style.opacity = ".5");
        allInput[count].blur();
        allInput[count].style.border = "1px solid #14b014";
        allInput[count].style.opacity = ".5";
        count < allInput.length - 1 ? count++ : (count = 0);
      }
    });
  }

  if (
    userName.value !== "" &&
    userEmail.value !== "" &&
    userSubject.value !== ""
  ) {
    alertEl.style.display = "none";
    userNameValid = true;
    userEmailValid = true;
    userSubjectValid = true;
  }

  if (
    userNameValid === false ||
    userEmailValid === false ||
    userSubjectValid === false
  ) {
    e.preventDefault();
  }
};
