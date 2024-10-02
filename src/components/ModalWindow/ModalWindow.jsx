import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './ModalWindow.styled';

const ModalWindow = ({ children, closeModal: setModal }) => {
  const modalRoot = document.querySelector('#modal-root');
  
    const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        setModal(false);
      }
      if (e.target === e.currentTarget) {
        setModal(false);
      }
    },
    [setModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, setModal]);

    return createPortal(
    <Overlay onClick={handleKeyDown}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot,
  );
}

export default ModalWindow;