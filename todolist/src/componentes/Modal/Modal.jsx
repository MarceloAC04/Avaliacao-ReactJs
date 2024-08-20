import Button from "../Button/Button";
import Input from '../Input/Input'
import "./Modal.css"

const Modal = ({
  modalTitle = "Descreva sua tarefa",
  tarefaText = "Exemplo de descrição",
  showHideModal = false
}) => {
  return (
    <div className="modal">
      <div className="modal-box">
        <h1 className="modal-title">{modalTitle}</h1>
        <Input id={"description"} type={"textarea"} placeholder={tarefaText}/>
        <Button classe={"confirmar-tarefa"} textButton={"Confirmar tarefa"} onClick={() => showHideModal(true)} />
      </div>
    </div>
  );
};

export default Modal;