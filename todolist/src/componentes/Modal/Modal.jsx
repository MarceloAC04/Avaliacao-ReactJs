import { useState } from "react";
import Button from "../Button/Button";
import Input from '../Input/Input'
import "./Modal.css"

const Modal = ({
  modalTitle = "Descreva sua tarefa",
  tarefaText = "Exemplo de descrição",
  dados,
  showHideModal = false,
}) => {
  const [nomeTarefa, setNomeTarefa] = useState("");

  function post(nomeTarefa) {
    dados.push({"id": (dados.length + 1), "nome": nomeTarefa, "feita": false})
    console.log(dados)
    return dados;
  }

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
            post(nomeTarefa)
            showHideModal(true) }}
           />
      </div>
    </div>
  );
};

export default Modal;