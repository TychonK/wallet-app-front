import styled from 'styled-components';

export const Switcher = styled.button`
  position: fixed;
  bottom: 20px;
  left: 10px;
  padding: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 100;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  @media (min-width: 768px) {
    left: 20px;
  }
`;
