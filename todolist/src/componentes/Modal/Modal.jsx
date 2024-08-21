import { useState } from "react";
import Button from "../Button/Button";
import Input from '../Input/Input'
import "./Modal.css"

const Modal = ({
  modalTitle = "Descreva sua tarefa",
  tarefaText = "Exemplo de descrição",
  showHideModal = false,
  fnPost = null
}) => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  return (

    <div className="modal">
      <div className="modal-box">
        <h1 className="modal-title">{modalTitle}</h1>
        <Input
          id={"description"}
          value={nomeTarefa}
          fnChange={(e) => setNomeTarefa(e.target.value)}
          type={"textarea"}
          placeholder={tarefaText} />
        <Button
          classe={"confirmar-tarefa"}
          textButton={"Confirmar tarefa"}
          onClick={() => {
            fnPost(nomeTarefa)
            showHideModal(true)
            setNomeTarefa('');
          }}
        />
      </div>
    </div>
  );
};

export default Modal;