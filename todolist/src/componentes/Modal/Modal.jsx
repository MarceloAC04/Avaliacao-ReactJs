import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from '../Input/Input'
import "./Modal.css"

const Modal = ({
  modalTitle = "Descreva sua tarefa",
  tarefaText = "Exemplo de descrição",
  showHideModal = false,
  fnPost = null,
  fnEdit = null,
  tarefaEdit, 
  indexEdit,
  closeEdition
}) => {
  const [nomeTarefa, setNomeTarefa] = useState("");

  useEffect(() => {
    if (tarefaEdit) {
      setNomeTarefa(tarefaEdit.nome);
    }
  }, [tarefaEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nomeTarefa.trim()) {
      if (indexEdit !== null) {
        fnEdit(indexEdit, nomeTarefa);
      } else {
        fnPost(nomeTarefa);
      }
      setNomeTarefa('');
      closeEdition()
    }
  };
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
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Modal;