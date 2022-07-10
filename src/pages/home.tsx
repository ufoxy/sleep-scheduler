import * as React from "react";
import "./home.css";
import sleeping from "../assets/imgs/sleeping.png";
import sleepStages from "../assets/imgs/sleep-stages.png";
import sleepFunctioning from "../assets/imgs/sleep-functioning.png";
import whySleep from "../assets/imgs/why-sleep.png";
import clock from "../assets/imgs/calculate-clock.png"
import BasicButton from "../components/basic-button";

import github from "../assets/imgs/github.svg"

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="flex-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h1>
            <a href="/home">Sleep Schedule</a>
          </h1>
          <a style={{ paddingLeft: '15px' }} href="https://github.com/ufoxy/sleep-schedule" aria-label="Homepage" title="GitHub">
            <img src={github} alt="" className="icon-img" />
          </a>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <article className="flex-row">
            <img src={sleeping} alt="" className="img" />
            <div className="div-content flex-collumn">
              <h2 style={{ color: '#6595DF' }}>Quanto tempo preciso dormir?</h2>
              <p>
                Para programar um boa noite de sono deve-se calcular quantos
                ciclos de 90 minutos você tem de dormir para despertar no
                momento em que o último ciclo terminar e, assim, acordar mais
                relaxado, com energia e boa disposição.
              </p>
            </div>
          </article>

          <article className="flex-row">
            <div className="div-content flex-collumn" style={{ paddingRight: '3rem' }}>
              <h2 style={{ color: '#5D83D8' }}>Como funciona o ciclo do sono?</h2>
              <p>
                O ciclo do sono corresponde ao conjunto das fases do sono que
                tem início a partir do momento que a pessoa adormece e vai até a
                fase do sono REM, que é a fase do sono mais profunda e que
                garante o sono mais reparador e mais relaxante, no entanto é
                mais difícil de atingir essa fase do sono.
              </p>
              <p>
                O corpo passa por vários ciclos que tem duração de 90 a 100
                minutos por ciclo e normalmente são necessários 4 a 5 ciclos por
                noite, o que correspondente a 8 horas de sono.
              </p>
            </div>
            <img src={sleepFunctioning} alt="" className="img" />
          </article>

          <article className="flex-collumn">
            <h2 style={{ color: '#6661B1' }}>Quais são as fases do sono?</h2>
            <p>Existem 4 fases do sono, sendo elas:</p>
            <div className="flex-row">
              <img src={sleepStages} alt="" className="sleep-stages" />
              <div className="sleep-stages-div">
                <p>
                  Na fase REM os olhos se movimentam muito rapidamente, os
                  batimentos cardíacos aumentam e os sonhos aparecem.
                </p>
                <p>
                  É difícil atingir o sono REM e, por isso é importante diminuir a luz do
                  ambiente e não usar o celular ou o computador antes de dormir,
                  pois assim é possível chegar ao sono REM de forma mais fácil.
                </p>
              </div>
            </div>
          </article>
          <article className="flex-row" style={{ margin: '8rem auto 3rem auto' }}>
            <img src={whySleep} alt="" className="img" />
            <div className="div-content flex-collumn">
              <h2 style={{ color: '#796E90' }}>Por que precisamos dormir bem?</h2>
              <p>
                Dormir bem é fundamental para o bom funcionamento do organismo,
                pois é durante o sono que o organismo consegue recuperar as
                energias, regular o nível de vários hormônios fundamentais para o
                bom funcionamento do corpo e otimizar o metabolismo. Além disso, é
                durante o sono há a consolidação do que foi aprendido durante o
                dia, bem como reparação dos tecidos e fortalecimento do sistema
                imune.
              </p>
              <p>
                Assim, quando não se tem uma boa noite de sono é possível que se
                tenha algumas consequências, como alterações de humor, aumento das
                inflamações no corpo, falta de energia e enfraquecimento do
                sistema imune, por exemplo, além de também aumentar o risco de
                desenvolver algumas doenças, como obesidade, diabetes e pressão
                alta, por exemplo.
              </p>
            </div>
          </article>

          <div className="sec centralize" style={{ paddingBottom: '7rem', paddingTop: '2rem' }}>
            <article className="flex-row">
              <img src={clock} alt="" className="img" />
              <div className="centralize">
                <div className="centralize calculate-div flex-collumn-center">
                  <h2 style={{ color: '#8358A1' }}>Calcule o seu sono.</h2>
                  <p>
                    Veja que horas deve acordar ou ir dormir para ter uma boa noite de
                    sono usando a calculadora a seguir:
                  </p>
                  <BasicButton children={"Calculate"} color={"secondary"} />
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>a</footer>
    </div>
  );
}

export default Home;
