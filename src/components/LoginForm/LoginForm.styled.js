import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormWrapper = styled.div`
  padding: 107px 0px;
  background-color: ${({ theme }) => theme.headers};
  height: 100vh;

  @media (min-width: 768px) {
    width: 533px;
    height: auto;
    margin: auto;
    padding: 40px 0px;
    border-radius: var(--border-radius);
  }
  @media (min-width: 1280px) {
    width: 730px;
    margin: 0;
    padding: 120px 110px;

    border-radius: 0;
    border-radius: 0 0 10px 10px;
    background: var(--color-blur);
    backdrop-filter: var(--backdrop-filter);
  }
`;

export const FormBg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1280px) {
  min-height: 489px;
    max-width: 533px;
    padding: 60px 40px;
    border-radius: var(--border-radius);
    background: ${({ theme }) => theme.headers};
  }
`;

export const Form = styled.form`
  position: relative;
  width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  @media (min-width: 768px) {
    width: 533px;
    border-radius: var(--border-radius);
  }
`;

export const Label = styled.label`
  width: 280px;
  height: 32px;
  position: relative;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--color-gray-light);

  @media (min-width: 768px) {
    width: 410px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-left: 50px;
  width: calc(100% - 50px);

  outline: 0;
  border: 0;
  font-family: 'Circe';
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.headers};
  &::placeholder {
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    text-transform: capitalize;
  }
`;

export const InputIcon = styled.svg`
  position: absolute;
  bottom: 10px;
 
  height: 20px;
  width: 40px;

  left: 5px;
  padding-left: 10px;
  color: var(--color-gray);

  @media (min-width: 1280px) {
    top: 1px;
  }
`;

export const SignInBtn = styled.button`
  width: 280px;
  height: 50px;
  margin-bottom: 20px;
  background: var(--color-secondary);
  border-radius: var(--border-radius);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--color-secondary);
  color: var(--color-white);
  transition: background-color 300ms var(--cubic-bezier),
    color 300ms var(--cubic-bezier);
  &:hover,
  &:focus {
    background-color: #03a682;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const SignUpBtn = styled(NavLink)`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  transition: background-color 300ms var(--cubic-bezier),
    color 300ms var(--cubic-bezier);
  &:hover,
  &:focus {
    background: var(--color-primary-light);
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  width: 100%;
  top: 40px;

  font-size: 12px;
  font-weight: bold;
  color: var(--color-tertiary);
`;

export const Switcher = styled.div`
  position: absolute;
  right: 25px;
  top: -80px;

  @media (min-width: 768px) {
    top: -20px;
  }

  @media (min-width: 1280px) {
    top: 20px;
  }
`;
