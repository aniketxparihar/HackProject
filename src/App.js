import './App.css';
import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
function App() {
  const location=useLocation();
  useEffect(() => {
    console.log(location)
  }, [location])
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
