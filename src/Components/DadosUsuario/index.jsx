import { Button, TextField } from '@mui/material';
import React from 'react';

const DadosUsuario = ({ onSubmit }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        id="email"
        required
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
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
