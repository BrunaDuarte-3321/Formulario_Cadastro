import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const DadosUsuario = ({ onSubmit }) => {
  const [email, SetEmail] = useState('');
  const [senha, setsenha] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={({ target }) => {
          SetEmail(target.value);
        }}
        id="email"
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
        id="senha"
        label="senha"
        required
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default DadosUsuario;
