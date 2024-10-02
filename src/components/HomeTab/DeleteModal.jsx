import React from 'react';
import icons from 'images/sprite.svg';
import {
    ModalContainer,
    CloseBtn,
    CloseIcon,
    Title,
    BtnContainer,
    ConfirmBtn,
    CancelBtn,
 } from 'components/LogoutContent/LogoutContent.styled';

const DeleteModal = ({ setModal, onDelete, _id }) => {
  const handleDelete = () => {
    onDelete(_id); // Call the deletion function
    setModal(false); // Close the modal after deletion
  };

  return (
    <ModalContainer>
      <CloseBtn
        type="button"
        onClick={() => {
          setModal(false);
        }}
      >
        <CloseIcon>
          <use href={`${icons}#close`} />
        </CloseIcon>
      </CloseBtn>

      <Title>Are you sure you want to delete this transaction?</Title>

      <BtnContainer>
        <ConfirmBtn type="button" onClick={handleDelete}>
          Yes, Delete
        </ConfirmBtn>
        <CancelBtn
          type="button"
          onClick={() => {
            setModal(false);
          }}
        >
          Cancel
        </CancelBtn>
      </BtnContainer>
    </ModalContainer>
  );
};

export default DeleteModal;
