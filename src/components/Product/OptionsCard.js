import React from "react";

export const OptionsCard = ({ option, title, subtitle, selected }) => {
  return (
    <div className={selected ? "product_card product_card-selected" : "product_card"}>
      <div>{option}</div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};
