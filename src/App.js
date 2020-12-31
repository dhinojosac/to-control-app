import React from "react"; 
import PatientFront from './components/PatientUI/PatientFront.js';
import Login from "./containers/Login.js";
import Header from "./components/Header/Header.js";
import PatientView from "./components/PatientUI/PatientView.js"
import "./App.css";
import {isAuthenticated,getUser, logout, login} from  "./Services/AuthServices.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";


function  PrivateRoute(props){

  const condition = isAuthenticated();

  console.log(condition)

  return  condition ? (<Route  path={props.path}>{props.component}</Route>) :  <Redirect  to="/login"  />;
};



function LogButton(){
  const history = useHistory();

  function handleLogin() {
    console.log("Click login button")
    history.push("/login");
  }
  
  function handleLogout() {
    console.log("Click logout button")
    logout();
    history.push("/");
  }

 

  return <button onClick={() => isAuthenticated()? handleLogout():handleLogin() }>{isAuthenticated()?"Logout":"Login"}</button>;
  
}

function Home(){
  console.log(isAuthenticated())
  return <div className="home-text">
         <LogButton/>
         <h1> Home</h1>
         <p>This is the home page.</p>
         {isAuthenticated()?<p>Welcome {getUser()}. Do you want to see all your <a href="http://localhost:3005/patients">patients</a>?</p>:null}
         </div>;
}

function App() {
  const history = useHistory();

  var front = <><LogButton/> <PatientFront/>  </>;
  return (
    <>
    <Header  status={isAuthenticated()?"Logout":"Login"}  h={history}/>
    <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/singup">
              <Login />
            </Route>
            
            <Route exact path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/patients" component={front}/>

            <PrivateRoute path="/patientviewer" component={<PatientView />}/>

          </Switch>

        </div>
      </Router>
    
    </>
  );
}

export default App;
