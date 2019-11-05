import React from 'react';


const Libro = ({ author, Image }) => {
  return (
    <div>
        <img src={Image} alt="Profile" className="Img"/>
      
      <div>
        <h2>{author}</h2>
      </div>
    </div>
  );
};

export default Libro;
