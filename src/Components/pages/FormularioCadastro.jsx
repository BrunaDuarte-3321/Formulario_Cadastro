import React from 'react';
import DadosEntrega from '../DadosEntrega';
import DadosPessoais from '../DadosPessoais';
import DadosUsuario from '../DadosUsuario';

function FormularioCadastro({ onSubmit, validatioCpf }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validatioCpf={validatioCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
