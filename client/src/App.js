
import {Admin} from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavComp } from './pages'
import { StepperControl } from './Stepper'


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
              <h1>does this render home</h1>
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;

