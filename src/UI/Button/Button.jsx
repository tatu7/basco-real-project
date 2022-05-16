import React from "react";
import "./_button.scss";
function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export default Button;
