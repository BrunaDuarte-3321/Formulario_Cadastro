import './App.css';
import FormularioCadastro from './Components/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

const App = () => {
  const onSubmit = (dados) => {
    console.log(dados);
  };
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário Com Hooks
      </Typography>
      <FormularioCadastro onSubmit={onSubmit} />
    </Container>
  );
};

export default App;
