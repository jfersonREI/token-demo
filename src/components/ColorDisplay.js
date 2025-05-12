import React from "react";
import "./ColorDisplay.css";

const ColorDisplay = () => {
  const colors = [
    { name: "Primitive Red 100", var: "--rds-color-primitive-red-100" },
    { name: "Primitive Blue 100", var: "--rds-color-primitive-blue-100" },
    {
      name: "Semantic Primary Base",
      var: "--rds-color-semantic-primary-base",
    },
    { name: "Semantic Error Base", var: "--rds-color-semantic-error-base" },
  ];

  return (
    <div className="color-display">
      {colors.map((color) => (
        <div key={color.name} className="color-box">
          <div
            className="color-swatch"
            style={{ backgroundColor: `var(${color.var})` }}
          ></div>
          <p>{color.name}</p>
          <p>{color.var}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorDisplay;
