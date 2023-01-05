import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

interface ModalProps {
  element: JSX.Element;
  width: string;
  height: string;
  color: string;
  isOpen: boolean;
  setModalState: React.Dispatch<boolean>;
}

const Modal = ({ element, width, height, color, isOpen, setModalState }: ModalProps) => {
  const ModalRef = useRef<HTMLDialogElement | null>(null);
  const closeModal = () => {
    if (!ModalRef.current) return;
    ModalRef.current.close();
  };
  const openModal = () => {
    if (!ModalRef.current) return;
    ModalRef.current.showModal();
  };
  const handleExitButtonClick = () => {
    setModalState(false);
  };

  useEffect(() => {
    if (isOpen) openModal();
    else closeModal();
  }, [isOpen]);

  return (
    <DialogModal ref={ModalRef} width={width} height={height} color={color}>
      {element}
      <ExitButton onClick={handleExitButtonClick}>X</ExitButton>
    </DialogModal>
  );
};

export default Modal;

const DialogModal = styled.dialog<{
  width: string;
  height: string;
  color: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  border-radius: 1rem;
  box-shadow: 1px 1px 4px 0 gray;
`;

const ExitButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'Work Sans';
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
`;
