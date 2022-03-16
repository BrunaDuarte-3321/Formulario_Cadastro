import './App.css';
import FormularioCadastro from './Components/pages/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

const App = () => {
  const onSubmit = (dados) => {
    console.log(dados);
  };

  const validatioCpf = (cpf) => {
    if (cpf.length !== 11) {
      return { valido: false, texto: 'CPF deve ter 11 digitos' };
    } else {
      return { valido: true, texto: '' };
    }
  };
  return (
    <div className="geral">
      <Container component="article" maxWidth="sm" className="top">
        <Typography variant="h3" align="center" component="h1">
          Cadastra-se
        </Typography>
        <FormularioCadastro
          className="form"
          onSubmit={onSubmit}
          validatioCpf={validatioCpf}
        />
      </Container>
    </div>
  );
};

export default App;
