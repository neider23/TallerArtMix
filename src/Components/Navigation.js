import React from "react";
import { FiBookOpen,FiBook } from "react-icons/fi";



class Navegation extends React.Component {
  render() {
    return (
      <div className="Nav">
        <ul className="List">
          <li className="Item"><FiBook /> Teatro</li>
          <li className="Item"><FiBookOpen /> Poemas</li>
        </ul>
      </div>
    );
  }
}

export default Navegation;