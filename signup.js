const email = document.getElementById("email");
const password = document.getElementById("pwd");
const form = document.getElementById("register-form");

function registerUser(e) {
  e.preventDefault();
  let userEmail = email.value;
  let userPassword = password.value;
  email.value = "";
  password.value = "";
  console.log(userEmail, userPassword);

  //retrieve user data from local storage
  let userData = JSON.parse(localStorage.getItem("userObj"));

  if (!userData) {
    localStorage.setItem(
      "userObj",
      JSON.stringify({ emails: [], passwords: [] })
    );
  }

  addUserToLocalstorage(userEmail, userPassword);
}

function addUserToLocalstorage(email, password) {
  let data = JSON.parse(localStorage.getItem("userObj"));

  //add the email and password to the emails and passwords array
  data.emails.push(email);
  data.passwords.push(password);

  //save the data to the localstorage. So it can be persisted and retrieved later.
  localStorage.setItem("userObj", JSON.stringify(data));

  //navigate to the login page.
  window.location = "login.html";
}

form.addEventListener("submit", registerUser);

//To hide password
const pwd = document.getElementById("pwd");
const label = document.getElementById("showHide");
let isClicked = false;

label.addEventListener("click", () => {
  if (!isClicked) {
    pwd.type = "text";
    isClicked = true;
    label.textContent = "Hide";
  } else {
    pwd.type = "password";
    isClicked = false;
    label.textContent = "Show";
  }
});
