import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Error from "./pages/error";
import Ordertracker from "./pages/ordertrack/ordertracker";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Ordertracker />
          </Route>
          <Route path="*" exact>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
