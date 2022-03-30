import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosPessoais = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidade, setNovidade] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (possoEnviar()) {
      onSubmit({ nome, sobrenome, cpf, novidade, promocoes });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={nome}
        onChange={({ target }) => {
          setNome(target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={({ target }) => setSobrenome(target.value)}
        id="Sobrenome"
        name="sobrenome"
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
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
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
        Próximo
      </Button>
    </form>
  );
};

export default DadosPessoais;
