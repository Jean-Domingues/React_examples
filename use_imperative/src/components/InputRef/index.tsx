import React, { forwardRef } from 'react';


const InputRef: React.RefForwardingComponent<HTMLInputElement> = ({}, ref) => {
  return  <input type="text" placeholder="Insira seu nome" ref={ref}/>;
}

export default forwardRef(InputRef);