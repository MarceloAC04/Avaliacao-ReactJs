import Container from './componentes/Container/Container'
import Title from './componentes/Title/Title'
import './App.css';
import Input from './componentes/Input/Input';
import Button from './componentes/Button/Button';
import { useState } from 'react';
import Modal from './componentes/Modal/Modal';
import Table from './componentes/Table/Table';

function App() {
  const [showModal, setShowModal] = useState(false);

  const tarefas = [
    { "id": 1, "nome": "Começar a execução do projeto", "feita": false },
    { "id": 2, "nome": "Começar a execução do projeto", "feita": false }
  ]

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  return (
    <div className="App">
      <Container>
        <Title titleText={"Quarta-Feira, 21 de Agosto"} color="#ffff" />
        <Input id={"filter"} placeholder={"Procurar tarefa"} />
        <Table dados={tarefas} />
      </Container>
      <Button
        classe={"nova-tarefa"}
        type={"submit"}
        textButton={"Nova Tarefa"}
        onClick={() => setShowModal(true)}
      />

      {showModal ? (
        <Modal
        dados={tarefas}
          showHideModal={showHideModal} />
      ) : (null)}
    </div>
  );
}

export default App;
