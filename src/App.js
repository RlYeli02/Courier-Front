import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./Components/Signup"
import Login from "./Components/Login"

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default App;
