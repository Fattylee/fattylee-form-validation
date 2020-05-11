const form = document.querySelector("#form");
const { username, email, password, password2, submit } = form.elements;

form.addEventListener("submit", handleFormValidation);

function handleFormValidation(event) {
  event.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const password2Value = password2.value;
  isValid = false;

  // validate username field
  if (usernameValue === "") {
    addErrorFlag(username, "Username cannot be blank");
  } else if (usernameValue.length < 3) {
    addErrorFlag(username, "Username length cannot be less than 3 characters");
  } else {
    removeErrorFlag(username);
  }
  // validate email field
  if (emailValue === "") {
    addErrorFlag(email, "Email cannot be blank");
  } else if (emailValue.length < 10) {
    addErrorFlag(email, "Email length cannot be less than 10 characters");
  } else {
    removeErrorFlag(email);
  }

  // validate password field
  if (passwordValue === "") {
    addErrorFlag(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    addErrorFlag(
      password,
      "Password length cannot be less than 6 characters long"
    );
  } else {
    removeErrorFlag(password);
  }
  // validate password check field
  if (password2Value === "") {
    addErrorFlag(password2, "Password check cannot be blank");
  } else if (passwordValue !== password2Value) {
    addErrorFlag(password2, 'Password check does not match "Password"');
  } else {
    removeErrorFlag(password2);
  }

  if (isValid) {
    document.querySelector(".loader").style.display = "flex";
    setTimeout(() => {
      clearAllFields();
      restoreFormState();
      showModal();
      document.querySelector(".loader").style.display = "none";
    }, 3000);
  }
} // End handleFormValidation

document.querySelector(".modal a").addEventListener("click", showForm);

function showForm() {
  form.parentElement.className = "container";
  document.querySelector(".modal").className = "modal";
}
function showModal() {
  form.parentElement.className = "container hide";
  document.querySelector(".modal").className = "modal show";
}
function addErrorFlag(field, errorMsg) {
  field.parentElement.className = "form-control error";
  field.parentElement.querySelector("small").innerHTML = errorMsg;
  isValid = false;
}
function removeErrorFlag(field) {
  field.parentElement.className = "form-control success";
  isValid = true;
}
function clearAllFields() {
  username.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";
}
function restoreFormState() {
  Array.from(form.elements).forEach((e) => {
    e.parentElement.className = "form-control";
  });
}

// Set eventHandlers on each span inside the sidebar component
(function() {
  document.querySelectorAll(".sidebar span").forEach((span) => {
    span.addEventListener("click", (event) => {
      const spanColor = getComputedStyle(event.target).backgroundColor;
      document
        .querySelector(":root")
        .style.setProperty("--theme-bgcolor", spanColor);
    });
  });
})();
