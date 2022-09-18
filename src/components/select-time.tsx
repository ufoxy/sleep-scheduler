import { useEffect, useState } from "react";
import moment from "moment";
import ContinueAndBackButton from "./continue-and-back-button";
import ResponsiveTimePickers from "./static-time-picker-landscape";
import useLocalStorageState from "use-local-storage-state";

export default function SelectTime() {
  const [schedule, setSchedule] = useLocalStorageState("schedule-table", {
    storageSync: true,
    defaultValue: [],
  });

  const [wakeUpOrFallAsleep, setWakeUpOrFallAsleep] = useLocalStorageState(
    "wake-up-or-fall-asleep"
  );

  const [title, setTitle] = useState(
    wakeUpOrFallAsleep == "Fall-Asleep"
      ? `Select a time when you're sure you'll start sleeping, remembering that
  it's not bedtime.`
      : `Select a time you want to wake up, it is recommended that it be earlier times`
  );
  const [value, setValue] = useState(
    moment(
      wakeUpOrFallAsleep == "Fall-Asleep"
        ? "2022-01-01T00:00:00.000Z"
        : "2022-01-01T09:00:00.000Z"
    )
  );

  console.log(wakeUpOrFallAsleep);

  function calculateWakeUp() {
    const date = moment(value);
    const array: any = [];
    for (let i = 6; i >= 1; i--) {
      const data = date
        .clone()
        .subtract(i * 90, "minutes")
        .format("hh:mm a");
      array.push({ cycle: i, timeToWakeUp: data, sleepTime: i * 90 });
    }
    setSchedule(array);
  }

  function calculateFallAsleep() {
    const date = moment(value);
    const array: any = [];
    for (let i = 6; i >= 1; i--) {
      const data = date
        .clone()
        .add(i * 90, "minutes")
        .format("hh:mm a");
      array.push({ cycle: i, timeToWakeUp: data, sleepTime: i * 90 });
    }
    setSchedule(array);
  }

  return (
    <div className="div-container">
      <section className="section" data-aos="fade-up">
        <div className="container">
          <p
            className="title"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-easing="ease-out-back"
          >
            {title}
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-easing="ease-out-back"
          >
            <ResponsiveTimePickers value={value} setValue={setValue} />
          </div>
          <ContinueAndBackButton
            children="Continue"
            href={"/schedule"}
            onclick={
              wakeUpOrFallAsleep == "Fall-Asleep"
                ? calculateFallAsleep
                : calculateWakeUp
            }
          />
        </div>
      </section>
    </div>
  );
}
