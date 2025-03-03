import Navbar from "./componenets/navbar/Navbar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Footer from "./componenets/footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //

function App() {
  return (
    <>
      <div className={`mainContainer`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/services" exact Component={Services} />
            <Route path="/contact" exact Component={Contact} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
