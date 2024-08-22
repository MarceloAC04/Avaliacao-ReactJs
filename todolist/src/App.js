import Container from './componentes/Container/Container';
import Title from './componentes/Title/Title';
import './App.css';
import Input from './componentes/Input/Input';
import Button from './componentes/Button/Button';
import { useEffect, useState } from 'react';
import Modal from './componentes/Modal/Modal';
import Table from './componentes/Table/Table';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [showModal, setShowModal] = useState(false);

  const [tarefas, setTarefas] = useState([
    { "id": 1, "nome": "Começar a execução do projeto", "status": false },
    { "id": 2, "nome": "Começar a execução do projeto2", "status": false }
  ]);

  const [listTarefas, setListTarefas] = useState([]);
  const [editTarefa, setEditTarefa] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTarefa, setSearchTarefa] = useState("");
  const tarefasFiltradas = tarefas.filter(tarefa =>
    tarefa.nome.toLowerCase().includes(searchTarefa.toLowerCase())
  )

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  function post(nomeTarefa) {
    const novaTarefa = {
      id: tarefas.length + 1,
      nome: nomeTarefa,
      status: false
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  function checkedTarefa(index) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === index ? (tarefa.status === true ? { ...tarefa, status: false } : { ...tarefa, status: true }) : tarefa
    );
    setTarefas(novasTarefas);
  }

  function deleteTarefa(index) {
    const novasTarefas = tarefas.filter((tarefa => tarefa.id !== index));
    setTarefas(novasTarefas);
  }

  function editarTarefa(index, nome) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === index ? { ...tarefa, nome } : tarefa
    );
    setTarefas(novasTarefas);
  }

  function modalEdit(index) {
    setEditIndex(index)
    setEditTarefa(tarefas[index - 1])
    setShowModal(true)
  }

  function closeModalEdition() {
    setEditIndex(null);
    setEditTarefa(null);
    setShowModal(false)
  }

  useEffect(() => {
    if (searchTarefa != "") {
      setListTarefas(tarefasFiltradas);
    }
    else {
      setListTarefas(tarefas);
    }
  }, [searchTarefa])

  useEffect(() => {
    setListTarefas(tarefas)
  }, [tarefas])

  return (
    <div className="App">
      <Container>
        <Title titleText={"Quarta-Feira, 21 de Agosto"} color="#ffff" />
        <label className='filtro'>
          <FaSearch size={20} color='#FFFF'/>
          <Input
            id={"filter"}
            fnChange={(e) => setSearchTarefa(e.target.value)}
            placeholder={"Procurar tarefa"}
          />
        </label>
        <Table
          dados={listTarefas}
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
          dados={listTarefas}
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
