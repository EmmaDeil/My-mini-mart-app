import AppLogo from "/clone.svg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import PageTitle from "./components/PageTitle";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ServiceForm from "./components/Forms/ServiceForm";
import Careers from "./pages/Careers";


function App() {
  return (
    <>
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
              <Route path="/careers" element={<Careers />} />
              <Route path="/serviceform" element={<ServiceForm />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
