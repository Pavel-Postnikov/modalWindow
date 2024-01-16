import React from "react";
import "./styles.css";

interface IButtonClose {
  onClose: () => void;
}

const ButtonClose: React.FC<IButtonClose> = ({ onClose }) => {
  return (
    <span className="closeButton" onClick={onClose}>
      &times;
    </span>
  );
};

export default ButtonClose;
