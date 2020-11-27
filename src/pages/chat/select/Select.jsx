import React from "react";
import "./Select.css";

const Select = ({ opciones, handleOptions }) => {
  return (
    <div className="selector-content">
      <div className="selector-container">
        <div className="selector-options">
          {opciones.map((opc) => (
            <div onClick={(e) => handleOptions(opc.id)} key={opc.id} className="selector-options">
              <label>{opc.text}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
