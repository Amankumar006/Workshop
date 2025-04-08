import React from "react";

function Button({ children = "Button", onClick }) {
  const handleClick = () => {
    alert("Button clicked!");
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;