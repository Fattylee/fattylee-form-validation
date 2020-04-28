const form = document.querySelector("#form");
// const username = document.querySelector("#username");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const password2 = document.querySelector("#password2");

const { username, email, password, password2, submit } = form.elements;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = username.value;
  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const password2Value = password2.value;

  clearAllFields();
  console.log(usernameValue, emailValue, passwordValue, password2Value);
});

function clearAllFields() {
  username.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";
}
