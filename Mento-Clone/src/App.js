import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";

import { DetailsPage } from "./components/DetailsPage";
import "./style.css";

import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/NavBar/NavBar";

import { Footer } from "./components/Footer/Footer";

import { AboveFooter } from "./components/Footer/AboveFooter";

import { About } from "./components/NavBar/About";
import { Login } from "./components/Details/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/courses/:type" element={<DetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
