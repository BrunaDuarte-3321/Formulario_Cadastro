import './App.css';
import FormularioCadastro from './Components/pages/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

import { validatioCpf, passwordValidation } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

const App = () => {
  const onSubmit = (dados) => {
    console.log(dados);
  };

  return (
    <div className="geral">
      <Container component="article" maxWidth="sm" className="top">
        <Typography variant="h3" align="center" component="h1">
          Cadastra-se
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validatioCpf,
            senha: passwordValidation,
            nome: passwordValidation,
          }}
        >
          <FormularioCadastro onSubmit={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    </div>
  );
};

export default App;
