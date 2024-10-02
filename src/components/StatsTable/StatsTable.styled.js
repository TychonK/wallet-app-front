import styled from 'styled-components';

export const ContentWrapper = styled.div`

`

export const SelectsWrapper = styled.div`
  & div:not(:last-child) {
    @media (max-width: 767px) {
    margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 336px;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    width: 395px;
  }
`

export const Table = styled.table`
  width: 280px;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 20px;

  font-family: 'Circe';
  font-style: normal;

  @media (min-width: 768px) {
    width: 336px;
    margin: 0;
  }

  @media (min-width: 1280px) {
    min-width: 395px;
  }
`;
export const TableHeader = styled.thead`
  width: 280px;

  background-color: ${({ theme }) => theme.headers};
`;

export const HeadCell = styled.th`
  padding: 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5em;
  text-transform: capitalize;

  &:first-child {
    padding-left: 20px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    text-align: left;
  }

  &:last-child {
    padding-rigth: 20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: end;
  }

  @media (min-width: 1280px) {
    padding: 18px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
`;

export const TableData = styled.td`
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;

  &:nth-child(even) {
    padding-right: 20px;
    text-align: end;
  }
`;

export const TotalTableData = styled.td`
  padding-top: 14px;
  text-transform: capitalize;

  &:first-child {
    padding-left: 20px;
    font-weight: 700;
  }

  &:last-child {
    padding-right: 20px;
    text-align: end;
  }
`;

export const ExpenceType = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 60px;

  line-height: 1.5em;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    width: 24px;
    height: 24px;
    background-color: ${props => props.markColor};
  }
`;

export const TotalAmount = styled.span`
  font-weight: 700;
  color: ${props => (props.type === 'income' ? '#24CCA7' : '#FF6596')};
`;
