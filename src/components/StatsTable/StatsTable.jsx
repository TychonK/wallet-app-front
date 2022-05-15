import {
  Table,
  TableData,
  TableHeader,
  TableRow,
  TableBody,
  HeadCell,
  ExpenceType,
  TotalTableData,
  TotalAmount,
} from './StatsTable.styled';

function StatsTable({ expences }) {

  const caclulateExpences = (expences) => {
    return expences.reduce((acc, expence) => acc + expence.amount, 0);
  }

  const totalExpences = caclulateExpences(expences);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <HeadCell>Category</HeadCell>
            <HeadCell>Amount</HeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expences.map(expence => (
            <TableRow key={expence.type}>
              <TableData>
                <ExpenceType markColor={expence.color}>
                  {expence.type}
                </ExpenceType>
              </TableData>
              <TableData>{expence.amount}</TableData>
            </TableRow>
          ))}
          <TableRow>
            <TotalTableData>Expences:</TotalTableData>
            <TotalTableData><TotalAmount type={"expence"}>Income</TotalAmount></TotalTableData>
          </TableRow>
          <TableRow>
            <TotalTableData>Income:</TotalTableData>
            <TotalTableData><TotalAmount type={"income"}>{totalExpences}</TotalAmount></TotalTableData>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default StatsTable;
