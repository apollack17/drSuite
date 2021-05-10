
import {Admin} from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/admin">
              <h1>testmin</h1>
              <Admin/>
            </Route>
            <Route path="/">
              <h1>does this render home</h1>
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;

