function login(usuario, senha) {

  // Validação básica
  if (!usuario || !senha) {
    return false
  }

  // Credenciais fixas
  if (usuario === "admin" && senha === "123") {
    return true
  }

  return false
}

module.exports = login