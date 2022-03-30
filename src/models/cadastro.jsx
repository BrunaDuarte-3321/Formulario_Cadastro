const validatioCpf = (cpf) => {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 digitos' };
  } else {
    return { valido: true, texto: '' };
  }
};

const passwordValidation = (password) => {
  if (password.length < 4 || password.length > 72) {
    return { valido: false, texto: 'Senha deve ter 4 e 72 dígitos' };
  }
  else{
    return {valido: true, texto: ''}
  }
};

export {validatioCpf, passwordValidation}