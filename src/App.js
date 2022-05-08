import './App.css';
import { Outlet,useLocation } from "react-router-dom";
import { useEffect } from 'react';
function App() {

  return (
    <div className="App">
      
      <Outlet/>
    </div>
  );
}

export default App;
