import React from "react";

import "./styles.css";

const IconColumn = ({ icon, title, description, columnClass }) => {
  return (
    <div className={`columnContainer ${columnClass}`}>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default IconColumn;
