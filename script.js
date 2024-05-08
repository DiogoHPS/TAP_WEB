function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var matricula = document.getElementById("matricula").value;
    var password = document.getElementById("password").value;
    var rpassword = document.getElementById("rpassword").value;

    // Verifica se as senhas coincidem
    if (password !== rpassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Armazena os dados do usuário em cookies
    document.cookie = "username=" + encodeURIComponent(username);
    document.cookie = "email=" + encodeURIComponent(email);
    document.cookie = "matricula=" + encodeURIComponent(matricula);
    document.cookie = "password=" + encodeURIComponent(password);

    // Redireciona para a página de login
    window.location.href = 'login.html';
}

function irParaLogin() {
    window.location.href = 'login.html';
}

function irParaindex() {
    window.location.href = 'index.html';
}

// gerador qr code

let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");
  if (user_input.value != "") {
    if (qr_code_element.childElementCount == 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    console.log("not valid input");
    qr_code_element.style = "display: none";
  }
});

function generate(user_input) {
  qr_code_element.style = "";

  let qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`,
    width: 180, //128
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  let download = document.createElement("button");
  qr_code_element.appendChild(download);

  let download_link = document.createElement("a");
  download_link.setAttribute("download", "qr_code.png");
  download_link.innerHTML = `Download`;

  download.appendChild(download_link);

  let qr_code_img = document.querySelector(".qr-code img");
  let qr_code_canvas = document.querySelector("canvas");

  if (qr_code_img.getAttribute("src") == null) {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
    }, 300);
  }
}