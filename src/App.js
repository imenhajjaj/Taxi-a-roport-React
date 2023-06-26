import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import List from "./pages/List/List.jsx";
import Vehi from "./components/vehi/Vehi.js";
import Crud  from "./components/Crud.jsx";
import Add from "./components/Add.js";

import Vehicule from "./pages/vehicule/vehicule.jsx";
import './App.css';
import Edit from "./components/Edit.js";



function App() {
  return (
   <div className="App">
    <Router>
 
    <Routes>
  
      <Route path="/" element={<Home/>}/>
      <Route path="/taxi" element={<List/>}/>
      <Route path="/taxi/:id" element={<Vehicule/>}/>
      <Route path="/vehi" element={<Vehi/>}/>
      <Route path="/admin" element={<Crud/>}/>
      <Route path="/create" element={<Add/>}/>
      <Route path="/Edit" element={<Edit/>}>



        
        
    </Route> 

  </Routes>
    </Router>
    </div>
  );

}

export default App;
