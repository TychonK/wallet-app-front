import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
`;

export const Select = styled.select`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  color: white;
  color: var(--color-gray);
  background-color: var(--color-white);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;

  transition: color 250ms var(--cubic-bezier),
    background-color 250ms var(--cubic-bezier);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &:hover,
  &:focus-within {
    color: var(--color-white);
    background-color: var(--color-primary);
  }
`;
