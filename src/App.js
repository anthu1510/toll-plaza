import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from "./components/Login";
import Dashbaord from "./components/Dashbaord";

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact>
                  <Login/>
              </Route>
              <Route path="/dashboard">
                  <Dashbaord/>
              </Route>
          </Switch>
      </BrowserRouter>
  );
};

export default App;
