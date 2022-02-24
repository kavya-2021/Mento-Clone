import logo from './logo.svg';
import './App.css';
import {HomePage} from "./components/HomePage/HomePage"

import {DetailsPage} from './components/DetailsPage'
import './style.css'

import {Routes, Route} from 'react-router-dom'

import {Navbar} from "./components/NavBar/NavBar"
 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
         <Route path="/" element={<HomePage/>}/>
         <Route path="/courses/:type" element={<DetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
