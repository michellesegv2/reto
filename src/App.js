import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from "./components/Login/Login"
import { PersonalInformation } from "./components/PersonalInformation/PersonalInformation"

function App() {
  return (
    <Router>
      <div>
        {/* <Link to="/users">Users</Link> */}
        <Switch>
          <Route path="/datos">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <Login></Login>
  );
}

function Register() {
  return (<PersonalInformation></PersonalInformation>)
}


export default App;
