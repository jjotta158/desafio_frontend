import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import AddSeller from './pages/sellers/AddSeller'
import ListSeller from './pages/sellers/ListSellers'
import EditSeller from './pages/sellers/EditSeller'

import ListSales from './pages/sales/List'
import AddSale from './pages/sales/Add'
import EditSale from './pages/sales/Edit'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/editar-venda/:id">
          <EditSale />
        </Route>
        <Route path="/vendas/">
          <ListSales />
        </Route>
        <Route path="/adicionar-venda/">
          <AddSale />
        </Route>
        <Route path="/editar-vendedor/:id">
          <EditSeller />
        </Route>
        <Route path="/vendedores">
          <ListSeller />
        </Route>
        <Route path="/adicionar-vendedor">
          <AddSeller />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
