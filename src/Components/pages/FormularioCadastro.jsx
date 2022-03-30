import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DadosEntrega from '../DadosEntrega';
import DadosPessoais from '../DadosPessoais';
import DadosUsuario from '../DadosUsuario';

function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      onSubmit(dadosColetados);
    }
  }, []);
  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const coletarDados = (dados) => {
    setDados({ ...dadosColetados, ...dados });
    console.log(dadosColetados);
    proximo();
  };
  const formularios = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,
    <DadosEntrega onSubmit={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro</Typography>,
  ];
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
