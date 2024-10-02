import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectTitle = styled.div`
`;

export const SelectButton = styled.button`
  height: 32px;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 8px;

  background: transparent;

  border: transparent;
  outline: none;
  border-bottom: 1px solid var(--color-gray-light);
  cursor: pointer;
`;

export const SelectTitleText = styled.p`
  text-align: left;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: var(--color-gray-light);

  color: ${({ theme }) => theme.text};
`;

export const SelectItemText = styled(SelectTitleText)`
  color: var(--color-black);
`;

export const SelectIcon = styled.svg`
  position: absolute;
  right: 20px;
  top: 8px;
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: -20px;
  background: var(--color-background-select);
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  z-index: 1;
`;

export const SelectItem = styled.li`
  display: block;
  min-height: 44px;
  padding: 5px 20px;
  border: none;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5em;
  text-align: left;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-tertiary);
  }
`;
