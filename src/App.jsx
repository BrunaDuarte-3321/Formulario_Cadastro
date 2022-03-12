import './App.css';
import FormularioCadastro from './Components/FormularioCadastro';
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
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário Com Hooks
      </Typography>
      <FormularioCadastro onSubmit={onSubmit} validatioCpf={validatioCpf} />
    </Container>
  );
};

export default App;
