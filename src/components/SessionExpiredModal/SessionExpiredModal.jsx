import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSessionExpiredModal } from 'redux/modalSlice';
import { logOut } from 'redux/auth/auth-operations';
import ModalWindow from 'components/ModalWindow';
import { useNavigate } from 'react-router-dom';
import { ModalContainer, BtnContainer, CloseBtn, CloseIcon, ConfirmBtn, Message, Title } from './SessionExpiredModal.styled';

const SessionExpiredModal = () => {
  const dispatch = useDispatch();
  const sessionExpired = useSelector((state) => state.modal.sessionExpired);
  const navigate = useNavigate();

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

        <Title>Session Expired</Title>
        <Message>Your session has expired. Please log in again to continue.</Message>

        <BtnContainer>
          <ConfirmBtn onClick={handleClose}>Go to Login</ConfirmBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalWindow>
  );
};

export default SessionExpiredModal;
