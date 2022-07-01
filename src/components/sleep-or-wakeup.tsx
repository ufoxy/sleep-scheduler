import React from "react";
import "./sleep-or-wakeup.css";

export default function SleepOrWakeUp() {
  return (
    <div className="container">
      <div className="plans">
        <div className="title">
          I want to calculate my sleep time, according to the time of:
        </div>
        <label className="plan basic-plan">
          <input checked type="radio" name="plan" id="basic" />
          <div className="plan-content">
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
              alt=""
            />
            <div className="plan-details">
              <span>Wake up</span>
              <p>
                Select here if you have set a wake up time.
              </p>
            </div>
          </div>
        </label>
        <label className="plan complete-plan">
          <input type="radio" id="complete" name="plan" />
          <div className="plan-content">
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg"
              alt=""
            />
            <div className="plan-details">
              <span>Fall asleep</span>
              <p>
                Select here if you have set a fall asleep time
              </p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
