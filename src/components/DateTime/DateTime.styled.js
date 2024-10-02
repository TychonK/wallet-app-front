import styled from 'styled-components';

export const DateInput = styled.div`
  position: relative;
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
  border-bottom: 1px solid var(--color-gray-light);
  box-sizing: border-box;
  color: ${({ theme }) => theme.gray};

  background-color: ${({ theme }) => theme.headers};

  @media (min-width: 768px) {
    width: 185px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

export const DateIcon = styled.button`
  position: absolute;
  top: 18px;
  right: 15px;
  background: transparent;
  border: none;
  outline: none;
`;


export const CustomDateTimeStyles = styled.div`
  .rdtPicker {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 10px;
  }

  .rdtPicker th,
  .rdtPicker td,
  .rdtPicker span {
    color: ${({ theme }) => theme.text}; // Date text color
  }

  .rdtPicker .rdtDay:hover,
  .rdtPicker .rdtMonth:hover,
  .rdtPicker .rdtYear:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text}; // Active item color on hover
  }

  .rdtPicker .rdtActive {
    background-color: ${({ theme }) =>
      theme.primary}; // Selected date background
    color: ${({ theme }) => theme.headers}; // Selected date text color
  }
`;
