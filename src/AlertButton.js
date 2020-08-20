import React from "react";

export default function AlertButton() {
  const handleClick = (event) => alert(event.target.value);

  return (
    <button onClick={handleClick} value="Click me">
      Click me
    </button>
  );
}
