import AppLogo from "/clone.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <h3><FontAwesomeIcon icon="fa-solid fa-dog" /><FontAwesomeIcon icon={faHouse} />Home</h3>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
