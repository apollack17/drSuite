
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavComp, Admin } from './pages'
import { StepperControl } from './Stepper'
import { Button } from '@material-ui/core'


function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/admin">
              <NavComp />
              <h1>testmin</h1>
              <Admin/>
            </Route>
            <Route path="/patient">
              <NavComp />
              <StepperControl />
            </Route>
            <Route path="/">
              <NavComp />
              <h2>Welcome to DRSUITE</h2>
              <h3>Please log in or open Patient Portal</h3>
              <Button>Log In</Button>
              <Button
                href="/patient"
                >Patient Portal</Button>
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;

