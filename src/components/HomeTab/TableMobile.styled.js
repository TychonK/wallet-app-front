import styled from 'styled-components';

export const MobileCard = styled.div`
  position: relative;
  display: block;
  width: 280px;
  border-radius: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${({ theme }) => theme.headers};
  border-left: 5px solid
    ${props =>
      props.type === 'income'
        ? 'var(--color-secondary)'
        : 'var(--color-tertiary)'};
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const MobileCardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
`;

export const MobileCardItem = styled.p`
  font-weight: 700;
  text-transform: capitalize;
`;

export const MobileCardItemValue = styled.p`
  text-align: right;
`;

export const MobileCardItemColor = styled.p`
  color: ${props =>
    props.type === 'income'
      ? 'var(--color-secondary)'
      : 'var(--color-tertiary)'};
`;

export const NoTransactions = styled.p`
  margin-top: 20px;
`;

export const MobileButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-tertiary);
  object-fit: fill;
  border: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -10px;
  right: -15px;
  border-color: transparent;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 250ms var(--cubic-bezier);
  color: var(--color-white);

  &:hover {
    transform: scale(1.02) translate(-5px, 3px);
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    display: block;
  }
`;
