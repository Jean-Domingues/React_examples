import React, { useRef, useState } from 'react';
import './global.css'
import InputRef from './components/InputRef';
import Modal, { ModalHandles } from './components/Modal';

function App() {
  const [ name, setName ] = useState<any>()

  const inputRefElement = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandles>(null);

  const handleClick = ( ) => {
   setName(inputRefElement.current?.value)  
   modalRef.current?.handleToggleVisible();
  }

  return (
    <>
     <Modal name={name} ref={modalRef} />
    <div className="container">
     
      <div>
      <h1>Nome</h1>

         <InputRef ref={inputRefElement} />
        <button type="button" onClick={handleClick}>Mostrar nome</button>

      </div>
      
    </div>
    </>
  );
}

export default App;
