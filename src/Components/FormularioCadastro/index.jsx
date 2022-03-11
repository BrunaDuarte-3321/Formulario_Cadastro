import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

const FormularioCadastro = () => {
  return (
    <>
      <form action="">
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="Sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={<Switch name="promocoes" defaultChecked />}
          label="Promoções"
        />
        <FormControlLabel
          control={<Switch name="novidade" defaultChecked />}
          label="Novidades"
        />

        <Button variant="contained">Cadastrar</Button>
      </form>
    </>
  );
};

export default FormularioCadastro;
