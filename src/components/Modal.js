import React from 'react';
const Modal = ({ show, setShow, text }) => {
  return (
    <div className={`modal ${show && 'show'}`} onClick={() => setShow(false)}>
      <p>{text}</p>
    </div>
  );
};
export default Modal;
