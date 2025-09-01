import AppLogo from "/clone.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import Home from "./pages/Home";


function App() {
  return (
    <>
      <h3><FontAwesomeIcon icon="fa-solid fa-dog" /><FontAwesomeIcon icon={faHouse} />Home</h3>
      <Home />
    </>
  );
}

export default App;
