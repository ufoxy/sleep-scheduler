import { useEffect } from "react";
import AOS from "aos";
import BasicButton from "./button";
import wakeUp from "../assets/imgs/wake-up.png"
import fallSleep from "../assets/imgs/zzz.png"
import "./sleep-or-wakeup.css";
import "aos/dist/aos.css";

export default function SleepOrWakeUp() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "linear",
      delay: 2000,
    });
  }, []);

  return (
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
          <input checked type="radio" name="plan" id="basic" />
          <div className="plan-content">
            <img
              loading="lazy"
              src={wakeUp}
              alt=""
            />
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
          <input type="radio" id="complete" name="plan" />
          <div className="plan-content">
            <img
              loading="lazy"
              src={fallSleep}
              alt=""
            />
            <div className="plan-details">
              <span>Fall asleep</span>
              <p>Select here if you have set a fall asleep time</p>
            </div>
          </div>
        </label>
      </div>
      <BasicButton children="Continue" href={"/h"} />
    </div>
  );
}
function useHistory() {
  throw new Error("Function not implemented.");
}

