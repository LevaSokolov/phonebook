"use strict";

let userNameInput = document.getElementById("username-input");

let passwordInput = document.getElementById("pass-input");

document.getElementById("forgot").onclick = function () {
  alert("doesn't matter :)");
};

document.getElementById("login-button").onclick = pressLoginButton;

document.getElementById("to-register-page").onclick = function () {
  window.location.href = "../register.html";
};

function pressLoginButton() {
  try {
    fetch("http://127.0.0.1:5432/login", {
      method: "POST",
      body: JSON.stringify({ login: userNameInput.value, password: passwordInput.value }),
    }).then((response) => {
      response
        .json()
        .then((data) => {
          if (response.status === 401) {
            throw new Error(data.message);
          }
          localStorage.setItem("token", data.token);
          window.location.href = "./index.html";
        })
        .catch((e) => {
          alert(e.message)
        });
    });
  } catch (error) {
    console.error(error.message);
  }
}

// hi
