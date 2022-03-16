import { Button, TextField } from '@mui/material';
import React from 'react';

const DadosUsuario = () => {
  return (
    <form action="">
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit">Cadastrar</Button>
    </form>
  );
};

export default DadosUsuario;
