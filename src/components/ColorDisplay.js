import React from "react";
import "./ColorDisplay.css";

const ColorDisplay = () => {
  const colors = [
    { name: "Neutral 300", var: "--rds-neutral-300" },
    { name: "Primary 300", var: "--rds-primary-300" },
    {
      name: "Secondary 400",
      var: "--rds-secondary-400",
    },
    { name: "Tertiary 400", var: "--rds-tertiary-400" },
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
