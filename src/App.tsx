import { useState, useEffect } from "react";
import AppRouter from "./routes";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-out-sine",
      delay: 150,
    });
  }, []);

  return (
    <div className="App">
      <main>
        <section
          className="section"
          data-aos="fade-up"
        >
          <AppRouter />
        </section>
      </main>
    </div>
  );
}

export default App;
