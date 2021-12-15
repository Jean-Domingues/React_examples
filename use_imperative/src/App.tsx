import React, { useRef, useState, useEffect } from "react";
import "./global.css";
import InputRef from "./components/InputRef";
import Modal, { ModalHandles } from "./components/Modal";

function App() {
  const [name, setName] = useState<any>();

  const inputRefElement = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandles>(null);

  useEffect(()=> {
    if (inputRefElement.current) {
      // Acessa o elemento de forma imperativa, e o manipula diretamente na DOM do html
      inputRefElement?.current?.focus()
      inputRefElement.current.style.padding = '20px'
    }
  }, [])

  const handleClick = () => {
    if (inputRefElement.current) {
      inputRefElement.current.style.padding = '10px'
    }
    setName(inputRefElement.current?.value);
    modalRef.current?.handleToggleVisible();
  };


  return (
    <>
      <Modal name={name} ref={modalRef} />
      <div className="container">
        <div>
          <h1>Nome</h1>

          <InputRef ref={inputRefElement} />
          <button type="button" onClick={handleClick}>
            Mostrar nome
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
