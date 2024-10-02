import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 25px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.headers};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: -30px;
  margin-left: -30px;
`;

export const ConfirmBtn = styled.button`
  height: 50px;
  padding: 0 20px 0 20px;

  margin-left: 30px;
  margin-top: 30px;

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
    background-color: var(--color-white);
    background-color: var(--color-secondary-dark);
    transform: scale(1.1);
  }
`;

export const CancelBtn = styled.button`
  height: 50px;
  padding: 0 20px 0 20px;

  margin-left: 30px;
  margin-top: 30px;

  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);

  transition: background-color 250ms var(--cubic-bezier),
    color 250ms var(--cubic-bezier), transform 250ms var(--cubic-bezier);

  &:hover {
    background: var(--color-primary-light);
    color: var(--color-white);
    transform: scale(1.1);
  }
`;
