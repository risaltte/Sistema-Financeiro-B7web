import * as C from "./App.styles";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { ItemsProvider } from "./hooks/useItems";

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import logoImg from "./assets/images/logo.png";

const App = () => {
  return (
    <ItemsProvider>
      <C.Container>
        <C.Header>
          <C.Logo src={logoImg} alt="Logo"></C.Logo>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        
        <C.Body>
          <InfoArea />

          <InputArea />
          
          <TableArea />
        </C.Body>
      </C.Container>
      <ToastContainer 
        autoClose={5000}
        theme={"dark"}
      />
    </ItemsProvider>
  );
}

export default App;