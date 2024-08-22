import Container from './componentes/Container/Container'
import Title from './componentes/Title/Title'
import './App.css';
import Input from './componentes/Input/Input';
import Button from './componentes/Button/Button';
import { useEffect, useState } from 'react';
import Modal from './componentes/Modal/Modal';
import Table from './componentes/Table/Table';

function App() {
  const [showModal, setShowModal] = useState(false);

  const [tarefas, setTarefas] = useState([
    {"id": 1, "nome": "Começar a execução do projeto", "status": false },
    {"id": 2, "nome": "Começar a execução do projeto", "status": false }
  ]);

  const [editTarefa, setEditTarefa] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

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

  function deleteTarefa(index) {
    const novasTarefas = tarefas.filter((tarefa => tarefa.id !== index));
    setTarefas(novasTarefas);
  }

  function editarTarefa(index, nome) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === index ? { ...tarefa,  nome } : tarefa
    );
    setTarefas(novasTarefas);
  }

  function modalEdit(index) {
    setEditIndex(index)
    setEditTarefa(tarefas[index])
    setShowModal(true)
  }

  function closeModalEdition() {
    setEditIndex(null);
    setEditTarefa(null);
    setShowModal(false)
  }

  useEffect(() => {
    console.log(editIndex, editTarefa);
  })

    return (
      <div className="App">
        <Container>
          <Title titleText={"Quarta-Feira, 21 de Agosto"} color="#ffff" />
          <Input id={"filter"} placeholder={"Procurar tarefa"} />
          <Table
            dados={tarefas}
            checkedTarefa={checkedTarefa}
            deleteTarefa={deleteTarefa}
            editaTarefa={modalEdit}
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
            tarefaEdit={editTarefa}
            indexEdit={editIndex}
            fnPost={post}
            fnEdit={editarTarefa}
            closeEdition={closeModalEdition}
          />
        ) : (null)}
      </div>
    );
  }
export default App;
