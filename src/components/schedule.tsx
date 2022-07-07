import useLocalStorageState from "use-local-storage-state";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Schedule() {
  const [schedule, setSchedule] = useLocalStorageState("schedule-table", {
    storageSync: true,
    defaultValue: [],
  });

  console.log(schedule)

  function getSchedule() {
    schedule.map((e: any) =>
      rows.push(createData(e.cycle, e.timeToWakeUp, e.sleepTime))
    );
  }

  const rows: any = [];
  getSchedule();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "blue",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(-n+2)": {
      backgroundColor: "green",
    },
    "&:nth-of-type(n+4)": {
      backgroundColor: "red",
    },
    "&:nth-of-type(3)": {
      backgroundColor: "yellow",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(cycle: string, timeToWakeUp: string, sleepTime: string) {
    return { cycle, timeToWakeUp, sleepTime };
  }

  return (
    <div className="div-container">
      <section className="section">
        <div className="container">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Ciclos (90')</StyledTableCell>
                  <StyledTableCell align="left">Hora de Acordar</StyledTableCell>
                  <StyledTableCell align="left">Tempo de Sono</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <StyledTableRow key={row.cycle}>
                    <StyledTableCell component="th" scope="row">
                      {row.cycle}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.timeToWakeUp}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.sleepTime}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}
