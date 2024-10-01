import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;

  @media (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    padding: 0 16px;
    max-width: 1280px;
  }
`;
