import { useState } from "react";
import "./App.css";
import SleepOrWakeUp from "./components/sleep-or-wakeup";
import StaticTimePickerLandscape from "./components/static-time-picker-landscape";

function App() {
  return (
    <div className="App">
      <main>
        <section className="section section-container">
          <SleepOrWakeUp />
          <StaticTimePickerLandscape />
        </section>
      </main>
    </div>
  );
}

export default App;
