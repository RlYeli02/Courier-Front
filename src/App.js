import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./Components/Signup"
import Login from "./Components/Login"
import Welcome from "./Components/Welcome"
import Packages from "./Components/Packages"

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/packages">
            <Packages />
          </Route>
          <Welcome/>
        </Switch>
    </div>
    </Router>
  )
}

export default App;
