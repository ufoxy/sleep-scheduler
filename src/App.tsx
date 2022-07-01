import { useState, useEffect } from "react";
import "./App.css";
import SleepOrWakeUp from "./components/sleep-or-wakeup";
import StaticTimePickerLandscape from "./components/static-time-picker-landscape";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-out-sine',
      delay: 150,
    });
  }, []);

  return (
    <div className="App">
      <main>
        <section className="section section-container" data-aos="fade-up" >
          <SleepOrWakeUp />
          <StaticTimePickerLandscape />
        </section>
      </main>
    </div>
  );
}

export default App;
