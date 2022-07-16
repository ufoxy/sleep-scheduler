import { styled } from "@mui/material/styles";
import useLocalStorageState from "use-local-storage-state";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./schedule.css"

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
      backgroundColor: "#EAF9FF",
      color: '#000',
      fontWeight: '600'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: '#000',
      fontWeight: '600'
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(-n+2)": {
      backgroundColor: "#8CBF8C",
    },
    "&:nth-of-type(n+4)": {
      backgroundColor: "#E3A492",
    },
    "&:nth-of-type(3)": {
      backgroundColor: "#F2DA78",
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
      <section className="section section-container">
        <div className="content-div">
          <div className="text-container">
            <h3 className="schedule-h3">Result:</h3>
            <p className="schedule-p">To be considered restorative, sleep must include 5 or 6 complete 90-minute cycles.</p>
          </div>
          <p className="schedule-p">That’s why, below, we show you what time you should go to sleep to ensure that, following the wake up time you have chosen, you have adequate and regenerating sleep:</p>
        </div>
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
