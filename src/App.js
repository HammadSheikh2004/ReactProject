import './App.css';
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Courses from "./Components/Courses.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
          <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/courses' element={<Courses />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );

}

export default App;
