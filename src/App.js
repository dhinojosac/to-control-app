  import PatientFront from './components/PatientUI/PatientFront';
import Login from "./containers/Login.js";
import Header from "./components/Header/Header.js";
import "./App.css";

function App() {
  return (
    <>
    <Header />
    
    {/*}
    <Login />
    {*/}
    <PatientFront/>
    </>
  );
}

export default App;
