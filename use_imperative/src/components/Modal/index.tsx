import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './styles.css'

export interface ModalHandles {
  handleToggleVisible: () => void;
}

interface Props {
  name: string;
}

const Modal: React.RefForwardingComponent<ModalHandles, Props> = ( {name}, ref) => {
  const [ modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleVisible = () => {
    setModalIsOpen(!modalIsOpen)
  }

  useImperativeHandle(ref, ()=> {
    return {
      handleToggleVisible
    };
  })

  if(!modalIsOpen) {
    return null;
  }

  return (
    <div className="background" onClick={handleToggleVisible}>
      <div className="modal">
        <h1>{name}</h1>
      </div>
    </div>
  )
}


export default forwardRef(Modal);