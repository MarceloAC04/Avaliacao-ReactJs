import Container from './componentes/Container/Container'
import Title from './componentes/Title/Title'
import './App.css';
import Input from './componentes/Input/Input';
import Button from './componentes/Button/Button';
import { useState } from 'react';
import Modal from './componentes/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Container>
        <Title titleText={"Terça-Feira, 20 de Agosto"} color="#ffff"/>
        <Input id={"filter"} placeholder={"Procurar tarefa"}/>
      </Container>
      <Button classe={"nova-tarefa"} type={"submit"} textButton={"Nova Tarefa"} onClick={() => setShowModal(true)}/>

      {showModal ? (
        <Modal
        showHideModal={showModal}/>
      ) : (null)}
    </div>
  );
}

export default App;
