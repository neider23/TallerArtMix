import React from "react";
import Navegation from "./Components/Navigation";
import Principal from "./Components/Principal";
import "./Estilos.scss"
function App() {
  return (
    <div className="GridApp">      
      <Navegation />      
      <Principal/>
    </div>
  );
}

export default App;

