import { useEffect, useState } from "react";
import moment from "moment";
import BasicButton from "./button";
import ResponsiveTimePickers from "./static-time-picker-landscape";

export default function SelectTime() {
  const [value, setValue] = useState(moment("2022-01-01T00:00:00.000Z"));
  const data: any = [];

  function calculate() {
    const date = moment(value);
    const array = [];
    for (let i = 1; i <= 6; i++) {
      const data = date
        .clone()
        .add(i * 90, "minutes")
        .format("hh:mm a");
      array.push({ cycle: i, timeToWakeUp: data, sleepTime: i * 90 });
    }
    data.push(...array);
    console.log(data);
  }

  return (
    <div className="container">
      <p
        className="title"
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-easing="ease-out-back"
      >
        Select a time when you're sure you'll start sleeping, remembering that
        it's not bedtime.
      </p>
      <div
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-easing="ease-out-back"
      >
        <ResponsiveTimePickers value={value} setValue={setValue} />
      </div>
      <BasicButton children="Continue" href={"/h"} onclick={calculate} />
    </div>
  );
}
