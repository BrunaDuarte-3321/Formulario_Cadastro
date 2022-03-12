import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

const FormularioCadastro = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidade, setNovidade] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, sobrenome, cpf, novidade, promocoes });
      }}
    >
      <TextField
        value={nome}
        onChange={({ target }) => {
          setNome(target.value);
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
        value={cpf}
        onChange={({ target }) => {
          setCpf(target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={({ target }) => {
              setPromocoes(target.checked);
            }}
            name="promocoes"
            defaultChecked={promocoes}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidade}
            onChange={({ target }) => {
              setNovidade(target.checked);
            }}
            name="novidade"
            defaultChecked={novidade}
          />
        }
        label="Novidades"
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
