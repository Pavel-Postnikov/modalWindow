import React, { useState, useEffect } from "react";
import "./style.css";
import Button from "../Button";
import ButtonClose from "../ButtonClose";

interface IModal {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<IModal> = ({ title, children, onClose, onConfirm }) => {
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [countdown]);

  return (
    <div className="modalOverlay">
      <div className="modal">
        <div className="modalCloseButton">
          <ButtonClose onClose={onClose} />
        </div>
        <div className="modalHeader">
          <h2>{title}</h2>
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <Button onClick={onClose} label={"Отмена"} />
          <Button
            onClick={onConfirm}
            label={`Подтвердить`}
            countdown={countdown}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
