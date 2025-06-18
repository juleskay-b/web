import React from 'react';

const Button = ({ buttonText, onClick, disabled }) => {

  const buttonStyle = {
    backgroundColor: "#f36e51",
    color: "white",
    padding: "10px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.25rem"
  };

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;