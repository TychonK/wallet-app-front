import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 320px;
  max-height: 700px;
  padding: 20px 20px 35px;
  background-color: ${({ theme }) =>
    theme.headers}; // Theme color for modal background
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 540px;
    max-height: 600px;
    padding: 40px 70px;
    border-radius: 20px;
  }
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  color: var(--color-primary);

  transition: background-color 250ms var(--cubic-bezier),
    color 250ms var(--cubic-bezier), transform 250ms var(--cubic-bezier);

  &:hover {
    color: var(--color-white);
    background-color: var(--color-primary);
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.text}; // Theme color for title text
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const CheckboxText = styled.span`
  font-family: 'Circe';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.gray}; 
`;

export const CheckboxTextPlus = styled(CheckboxText)`
  color: ${({ theme }) => theme.primary}; 
`;

export const CheckboxTextMinus = styled(CheckboxText)`
  color: var(--color-tertiary); 
`;

export const ModalSelect = styled.select`
  height: 32px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  border: transparent;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray}; 
  background: ${({ theme }) =>
    theme.headers}; 
  color: ${({ theme }) => theme.text}; 

  &::placeholder {
    color: ${({ theme }) => theme.text}; 
  }
`;

export const ModalInputWrapper = styled.div`
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ModalInput = styled.input`
  height: 32px;
  width: 280px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  border: transparent;
  outline: none;

  border-bottom: 1px solid ${({ theme }) => theme.gray}; // Border from theme
  background: ${({ theme }) => theme.headers}; // Background color from theme
  color: ${({ theme }) => theme.text}; // Text color from theme

  @media (min-width: 768px) {
    width: 185px;
  }
`;

export const ModalInputComment = styled.textarea`
  height: 84px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  border: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.gray}; // Theme for the border
  outline: none;
  resize: none;
  background: ${({ theme }) => theme.headers}; // Theme for background
  color: ${({ theme }) => theme.text}; // Text color from theme

  @media (min-width: 768px) {
    height: 32px;
  }
`;

const ModalButton = styled.button`
  height: 50px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 20px;
`;

export const ModalButtonAdd = styled(ModalButton)`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  border: transparent;
  outline: none;

  transition: background-color 250ms var(--cubic-bezier);

  @media (min-width: 768px) {
    margin: 20px auto;
    width: 300px;
  }

  &:hover,
  &:focus {
    background-color: #03a682; // Optional hover effect, or set via theme
  }
`;

export const ModalButtonCancel = styled(ModalButton)`
  background-color: transparent;
  color: var(--color-primary);

  border: 1px solid var(--color-primary);

  transition: background-color 300ms var(--cubic-bezier),
    color 300ms var(--cubic-bezier);

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 300px;
  }

  &:hover,
  &:focus {
    background: var(--color-primary-light);
    color: var(--color-white);
    border-color: transparent;
  }
`;

export const ErrorMesage = styled.p`
  position: absolute;
  width: 100%;
  top: 55px;
  font-size: 12px;
  font-weight: bold;
  color: var(
    --color-tertiary
  ); 

  @media (min-width: 768px) {
    margin: 0;
  }
`;
