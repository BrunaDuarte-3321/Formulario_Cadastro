import { TextField, Button } from '@mui/material';
import React from 'react';

const DadosEntrega = () => {
  return (
    <form action="">
      <TextField
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button fullWidth variant="contained" type="submit">
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default DadosEntrega;
