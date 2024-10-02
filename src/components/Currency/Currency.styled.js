import styled from 'styled-components';
import header from 'images/header.svg';
import footer from 'images/footer.svg';

export const CurrencyTable = styled.table`
  min-width: 280px;
  min-height: 174px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 30px;

  font-family: 'Circe';
  font-style: normal;
  color: #ffffff;

  background: url(${header}) top, url(${footer}) bottom;
  background-color: ${({ theme }) => theme.primary};
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    min-width: 310px;
    min-height: 182px;
  }

  @media (min-width: 1280px) {
    width: 393px;
    // margin-top: 32px;
  }
`;

export const TableHeader = styled.thead``;

export const HeadCell = styled.th`
  padding: 10px 12px;

  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-transform: capitalize;

  @media (min-width: 1280px) {
    padding: 18px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableData = styled.td`
  padding: 6px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    padding: 12px;
  }
`;

export const TableFooter = styled.tfoot`
  @media (min-width: 1280px) {
    height: 165px;
  }
`;
