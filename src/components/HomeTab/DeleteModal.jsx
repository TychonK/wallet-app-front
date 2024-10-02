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
import { useTranslation } from 'react-i18next';

const DeleteModal = ({ setModal, onDelete, _id }) => {

  const handleDelete = () => {
    onDelete(_id); // Call the deletion function
    setModal(false); // Close the modal after deletion
  };
    
     const { t } = useTranslation();

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

      <Title>{t('delete_sure')}?</Title>

      <BtnContainer>
        <ConfirmBtn type="button" onClick={handleDelete}>
          {t('delete_ok')}
        </ConfirmBtn>
        <CancelBtn
          type="button"
          onClick={() => {
            setModal(false);
          }}
        >
          {t('cancel')}
        </CancelBtn>
      </BtnContainer>
    </ModalContainer>
  );
};

export default DeleteModal;
