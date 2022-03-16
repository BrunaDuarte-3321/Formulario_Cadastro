import React, { useState } from 'react';
import DadosEntrega from '../DadosEntrega';
import DadosPessoais from '../DadosPessoais';
import DadosUsuario from '../DadosUsuario';

function FormularioCadastro({ onSubmit, validatioCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };
  const formularios = [
    <DadosUsuario onSubmit={proximo} />,
    <DadosPessoais onSubmit={proximo} validatioCpf={validatioCpf} />,
    <DadosEntrega onSubmit={onSubmit} />,
  ];
  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
