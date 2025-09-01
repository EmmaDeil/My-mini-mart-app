import AppLogo from "/clone.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import PageTitle from "./components/PageTitle";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      {/* <h3><FontAwesomeIcon icon="fa-solid fa-dog" /><FontAwesomeIcon icon={faHouse} />Home</h3>  */}
      <Routes>
        {/* Users route without navbar/footer */}
        {/* <Route path="/users" element={<Users />} /> */}
        
        {/* All other routes with navbar/footer */}
        <Route path="/*" element={
          <>
          <PageTitle defaultTitle="The Ladeil Innovation Hub" />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<LoginForm />} /> */}
              {/* <Route path="/careers" element={<Careers />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
