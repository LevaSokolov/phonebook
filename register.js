document.getElementById("go-back-button").onclick = function () {
  window.location.href = "./login.html";
};

document.getElementById("register-button").onclick = function () {
  const userNameInput = document.getElementById("user-name-input-reg");
  const passwordInput = document.getElementById("pass-input-reg");

  if (userNameInput.value && passwordInput.value !== "") {
    try {
      fetch("http://127.0.0.1:5432/add-user", {
        method: "POST",
        body: JSON.stringify({
          login: userNameInput.value,
          password: passwordInput.value,
        }),
      }).then((response) => {
        response.json().then((data) => {
          if (data.message) {
            alert("This username is already taken");
            return;
          }
          alert("You have been registered successfuly");
          setTimeout(() => (window.location.href = "./login.html"), 4000);
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  } else {
    alert("Fill in all the fields, fool");
  }
};
