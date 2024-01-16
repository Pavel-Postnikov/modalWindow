import React, { useState } from "react";
import "./styles.css";
import Modal from "./components/Modal";
import Button from "./components/Button";

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const action = () => alert("Действие выполнено");

  const handleClickButton = () => {
    if (confirmation) {
      action();
    } else {
      setModalVisible(true);
    }
  };

  const handleConfirmAction = () => {
    setConfirmation(true);
    setModalVisible(false);
    // setTimeout для того, чтобы модальное окно успело закрыться перед alert
    setTimeout(() => action(), 100);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="App">
      <Button onClick={handleClickButton} label={"Выполнить действие"} />
      {modalVisible && (
        <Modal
          onConfirm={handleConfirmAction}
          onClose={handleCloseModal}
          title="Согласие с правилами"
        >
          <p>
            Для данной функции применяются особые условия и правила пользования,
            их необходимо подтвердить, нажав на кнопку Подтвердить
          </p>
        </Modal>
      )}
    </div>
  );
}
