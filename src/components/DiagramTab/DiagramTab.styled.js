import styled from 'styled-components';

export const TabSection = styled.section`
  // background: rgba(255, 255, 255, 0.4);
  // backdrop-filter: blur(50px);

  @media (max-width: 767px) {
    max-width: 320px;
    // padding-top: 40px;
  }

  @media (min-width: 768px) {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 680px;
  }

  @media (min-width: 1280px) {
    // padding-top: 32px;
    // padding-left: 69px;
     width: 730px;
  }
`;

export const TabTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 8px;

  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.5em;
  text-transform: capitalize;

  @media (min-width: 768px) {
    // margin-bottom: 20px;
  }
`;

export const NoTransactions = styled.p`
  padding-top: 50px; 
  margin: 0 auto;
  @media (min-width: 1280px) {
    margin: 0;
  }
`;
