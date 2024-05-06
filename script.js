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


  function irParaCadastro() {
    window.location.href = 'cadastro.html';
  }
