import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ClientesHandle from "./pages/ClientesHandle";
import Clientes from "./pages/Clientes";
import ProdutosHandle from "./pages/ProdutosHandle";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path="/clientes">
            <Clientes />
          </Route>
          <Route path="/clientes/create">
            <ClientesHandle/>
          </Route>
          <Route path="/produtos/create">
            <ProdutosHandle/>
          </Route>
          <Route exact path="/produtos">
            <Produtos/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
