import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

export default function ResponsiveTimePickers() {
  const [value, setValue] = useState(new Date("2022-01-01T00:00:00.000Z"));
  const [date, setDate] = useState(new Date(value))
  console.log(value.toLocaleTimeString('en-US'))

  useEffect(() => {
    const array = [];
    for (let i = 1; i <= 6; i++) {
      const data = new Date(
        date.setTime(date.getTime() + i * 5.4e+6)
      ).toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
      });
      array.push({ cycle: i, timeToWakeUp: data, sleepTime: i * 90 });
      console.log(array);
    }
    if (date.toString() === 'Invalid Date') { console.log('Data inválida, não é possível continuar') }
  }, [value]);

  return (
    <div className="container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <p className="title">
          Choose a time when you're sure you'll start sleeping, remembering that
          it's not bedtime.
        </p>
        <DesktopTimePicker
          label="Select a time"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
