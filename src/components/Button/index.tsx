import React from "react";
import "./style.css";

interface IButton {
  onClick: () => void;
  label: string;
  countdown?: number;
}

const Button: React.FC<IButton> = ({ onClick, label, countdown = 0 }) => {
  return (
    <button onClick={onClick} disabled={countdown > 0}>
      {label} {countdown > 0 && `(${countdown})`}
    </button>
  );
};

export default Button;
