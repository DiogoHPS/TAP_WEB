function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aqui você pode adicionar a lógica de validação e envio dos dados
  
    // Exemplo de saída
    console.log("Usuário: " + username + ", Senha: " + password);
  }

  function irParaLogin() {
    window.location.href = 'login.html';
  }