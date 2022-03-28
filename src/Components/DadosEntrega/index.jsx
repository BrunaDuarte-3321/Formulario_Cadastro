import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const DadosEntrega = ({ onSubmit }) => {
  const [cep, SetCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={({ target }) => {
          SetCep(target.value);
        }}
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={({ target }) => {
          setEndereco(target.value);
        }}
        id="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={numero}
        onChange={({ target }) => {
          setNumero(target.value);
        }}
        id="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={({ target }) => {
          setEstado(target.value);
        }}
        id="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={({ target }) => {
          setCidade(target.value);
        }}
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
