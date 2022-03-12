import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

const FormularioCadastro = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nome, sobrenome);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={nome}
        onChange={({ target }) => {
          let tmpNome = target.value;

          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substring(0, 3);
          }
          setNome(tmpNome);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={({ target }) => setSobrenome(target.value)}
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
  );
};

export default FormularioCadastro;
