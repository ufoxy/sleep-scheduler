import { useState } from "react";
import "./App.css";
import RadioButton from "./components/radio-button";

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <section className="section section-container">
          <article className="article">
            <p>Quero calcular o meu tempo de sono, de acordo a hora de:</p>
            <RadioButton />
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
