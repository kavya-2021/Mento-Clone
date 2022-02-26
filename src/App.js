import './App.css';
import { Routes, Route } from "react-router-dom";
//import Sidebar from './components/AllTopicFolder/Sidebar';
import Alltopics from './components/AllTopicFolder/Alltopics';
import Dummy from './components/AllTopicFolder/Dummy';
//import Dummy from './components/AllTopicFolder/Dummy.jsx';


function App() {
  return (
    <>  
   <Routes>               
         <Route path={"/a"} element={<Dummy/>}/> 
         <Route path={"/"} element={<Alltopics/>}/>          
      </Routes>
    
    </> 
  );
}

export default App;
