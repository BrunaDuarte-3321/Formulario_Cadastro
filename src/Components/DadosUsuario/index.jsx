import { Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

const DadosUsuario = ({ onSubmit }) => {
  const [email, SetEmail] = useState('');
  const [senha, setsenha] = useState('');

  const validacoes = useContext(ValidacoesCadastro);

  const [erros, setErros] = useState({
    senha: { valido: true, texto: '' },
  });

  const ValidarCampos = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  };
  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={({ target }) => {
          SetEmail(target.value);
        }}
        id="email"
        name="email"
        required
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={({ target }) => {
          setsenha(target.value);
        }}
        onBlur={ValidarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        required
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit">
        Próximo
      </Button>
    </form>
  );
};

export default DadosUsuario;
