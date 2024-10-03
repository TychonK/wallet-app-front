import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSessionExpiredModal } from 'redux/modalSlice';
import { logOut } from 'redux/auth/auth-operations';
import ModalWindow from 'components/ModalWindow';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ModalContainer, BtnContainer, CloseBtn, CloseIcon, ConfirmBtn, Message, Title } from './SessionExpiredModal.styled';

const SessionExpiredModal = () => {
  const dispatch = useDispatch();
  const sessionExpired = useSelector((state) => state.modal.sessionExpired);
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!sessionExpired) return null;

  const handleClose = () => {
     dispatch(hideSessionExpiredModal());
     dispatch(logOut());
     navigate('/login');
  };

  return (
    <ModalWindow closeModal={handleClose}>
      <ModalContainer>
        <CloseBtn onClick={handleClose}>
          <CloseIcon viewBox="0 0 24 24">
            <path d="M12 10.585l4.95-4.95 1.415 1.415L13.415 12l4.95 4.95-1.415 1.415L12 13.415l-4.95 4.95-1.415-1.415L10.585 12 5.636 7.05l1.415-1.415L12 10.585z" />
          </CloseIcon>
        </CloseBtn>

        <Title>{t('session_expired_title')}</Title>
        <Message>{t('session_expired_text')}</Message> 

        <BtnContainer>
          <ConfirmBtn onClick={handleClose}>{t('session_expired_login')}</ConfirmBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalWindow>
  );
};

export default SessionExpiredModal;
