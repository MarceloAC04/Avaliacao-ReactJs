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

  const [tarefas, setTarefas] = useState([
    {"id": 1, "nome": "Começar a execução do projeto", "status": false },
    {"id": 2, "nome": "Começar a execução do projeto", "status": false }
  ]);

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  function post(nomeTarefa) {
    const novaTarefa = {
      id: tarefas.length+ 1,
      nome: nomeTarefa,
      status: false
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  function checkedTarefa(index) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === index? { ...tarefa, status: true } : tarefa
    );
    setTarefas(novasTarefas);
  }

    return (
      <div className="App">
        <Container>
          <Title titleText={"Quarta-Feira, 21 de Agosto"} color="#ffff" />
          <Input id={"filter"} placeholder={"Procurar tarefa"} />
          <Table
            dados={tarefas}
            checkedTarefa={checkedTarefa}
          />
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
            showHideModal={showHideModal}
            fnPost={post}
          />
        ) : (null)}
      </div>
    );
  }
export default App;
