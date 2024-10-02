import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 25px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.headers};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`;

export const CloseBtn = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  padding: 0;
  color: var(--color-primary);
  background-color: ${({ theme }) => theme.headers};
  border: none;
  cursor: pointer;

  transition: transform 250ms var(--cubic-bezier),
    color 250ms var(--cubic-bezier), background-color 250ms var(--cubic-bezier),
    animation 250ms var(--cubic-bezier);

  &:hover,
  &:focus-within {
    transform: scale(1.1) rotate(180deg);
    color: var(--color-white);
    background-color: var(--color-primary);
  }
`;

export const CloseIcon = styled.svg`
  width: 60%;
  height: 60%;
  stroke: currentColor;
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

export const Message = styled.div`
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ConfirmBtn = styled.button`
  height: 50px;
  padding: 0 20px;

  background: var(--color-secondary);
  border-radius: 20px;
  border: transparent;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);

  transition: background-color 250ms var(--cubic-bezier),
    color 250ms var(--cubic-bezier), transform 250ms var(--cubic-bezier);

  &:hover {
    background-color: var(--color-secondary-dark);
    transform: scale(1.1);
  }
`;
