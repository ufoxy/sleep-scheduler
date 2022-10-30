import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import ContinueAndBackButton from "../Continue and Back Button/continue-and-back-button";
import wakeUp from "../../assets/imgs/wake-up.png";
import fallSleep from "../../assets/imgs/zzz.png";
import "./sleep-or-wakeup.css";
import "aos/dist/aos.css";

export default function SleepOrWakeUp() {
  const [wakeUpOrFallAsleep, setWakeUpOrFallAsleep] = useLocalStorageState(
    "wake-up-or-fall-asleep",
    {
      storageSync: true,
      defaultValue: '',
    }
  );

  const [target, setTarget] = useState('')

  useEffect(() => {
    console.log(target)
  },[target])

  return (
    <div className="div-container">
      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="plans">
            <div
              className="title"
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-easing="ease-out-back"
            >
              I want to calculate my sleep time, according to the time of:
            </div>
            <label
              className="plan basic-plan"
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-easing="ease-out-back"
            >
              <input
                type="radio"
                name="plan"
                id="basic"
                value="Wake-up"
                onChange={(e) => setTarget(e.target.value)}
              />
              <div className="plan-content">
                <img loading="lazy" src={wakeUp} alt="" />
                <div className="plan-details">
                  <span>Wake up</span>
                  <p>Select here if you have set a wake up time.</p>
                </div>
              </div>
            </label>
            <label
              className="plan complete-plan"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-easing="ease-out-back"
            >
              <input type="radio" id="complete" name="plan" value="Fall-Asleep" onChange={(e) => setTarget(e.target.value)} />
              <div className="plan-content">
                <img loading="lazy" src={fallSleep} alt="" />
                <div className="plan-details">
                  <span>Fall asleep</span>
                  <p>Select here if you have set a fall asleep time</p>
                </div>
              </div>
            </label>
          </div>
          <ContinueAndBackButton
            children="Continue"
            href={"/select-time"}
            onclick={setWakeUpOrFallAsleep(target)}
          />
        </div>
      </section>
    </div>
  );
}
