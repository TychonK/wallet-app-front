import styled from 'styled-components';

export const BalanceLabel = styled.span`
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  // color: var(--color-balance-label);
`;

export const BalanceSumm = styled.p`
  font-family: 'Circe', sans-serif;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
  // color: var(--color-black);
`;

export const BalanceCurrencySymbol = styled.span`
  font-weight: 400;
`;

export const BalanceWrapper = styled.div`
  background-color: ${({ theme }) => theme.headers};
  width: 252px;
  border-radius: 30px;
  padding: 10px 10px 10px 28px;
  margin-top: 28px;
  // margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 80px;
    margin-top: 0;
    width: 310px;
    padding-left: 5px 0 0 40px;
  }

  @media (min-width: 1280px) {
    height: auto;
    width: 393px;
  }
`;
