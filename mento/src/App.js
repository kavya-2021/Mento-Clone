import "./App.css";
import { Products } from "./components/Products";
// import { Cards } from "./components/card";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
