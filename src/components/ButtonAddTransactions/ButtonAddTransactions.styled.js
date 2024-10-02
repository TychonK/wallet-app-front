import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: var(--color-secondary);
  border-color: transparent;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  transition: transform 250ms var(--cubic-bezier);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    bottom: 55px;
    right: 55px;
    width: 55px;
    height: 55px;
  }

  svg {
    display: block;
  }
`;
