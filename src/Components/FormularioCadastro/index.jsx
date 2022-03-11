import React from 'react';
import { Button } from '@mui/material';

const FormularioCadastro = () => {
  return (
    <>
      <h1>Formulario Cadastro</h1>
      <form action="">
        <label htmlFor="">Nome</label>
        <input type="text" />
        <label htmlFor="">SobreNome</label>
        <input type="text" />
        <label htmlFor="">CPF</label>
        <input type="text" />
        <label htmlFor="">Promoção</label>
        <input type="checkbox" />
        <label htmlFor="">Novidades</label>
        <input type="checkbox" />
        <Button variant="contained">Cadastrar</Button>
      </form>
    </>
  );
};

export default FormularioCadastro;
