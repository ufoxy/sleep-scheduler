import { useEffect, useState } from "react";
import "./about.css";
import sleeping from "../assets/imgs/sleeping.png";
import sleepStages from "../assets/imgs/sleep-stages.png";
import sleepFunctioning from "../assets/imgs/sleep-functioning.png";
import whySleep from "../assets/imgs/why-sleep.png";
import clock from "../assets/imgs/calculate-clock.png"
import BasicButton from "../components/basic-button";
import Navbar from "../components/navbar";

function About() {

  const [progressBar, setProgressBar] = useState(Number)
  const [progressBarColor, setProgressBarcolor] = useState('#6595DF')

  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
      console.log(scrolled)
      setProgressBar(scrolled)
  }

  window.onscroll = function () {
    progressBarScroll();
  };

  useEffect(() => {
    if (progressBar >= 16 && progressBar < 39) {
      setProgressBarcolor('#5D83D8')
    } else if (progressBar >= 40 && progressBar < 66) {
      setProgressBarcolor('#5272BF')
    } else if (progressBar >= 66 && progressBar < 89) {
      setProgressBarcolor('#5B5C9F')
    } else if (progressBar >= 90 && progressBar < 100) {
      setProgressBarcolor('#8358A1')
    }
  }, [progressBar])


  return (
    <div className="container">
      <div className="progress-container"
        style={!progressBar ? { display: 'none' } : {}}
      >
        <div className="progress-bar" id="progressBar"
          style={{ width: `${progressBar}%`, backgroundColor: `${progressBarColor}` }}></div>
      </div>
      
      <Navbar />

      <main>
        <section>
          <article className="flex-row">
            <img src={sleeping} alt="" className="img" />
            <div className="content-container flex-collumn centralize">
              <div style={{ borderLeft: '8px solid #6595DF', borderRadius: '12px', paddingLeft: '30px' }}>
                <h2 style={{ color: '#6595DF' }}>Quanto tempo preciso dormir?</h2>
                <p>
                  Para programar um boa noite de sono deve-se calcular quantos
                  ciclos de 90 minutos você tem de dormir para despertar no
                  momento em que o último ciclo terminar e, assim, acordar mais
                  relaxado, com energia e boa disposição.
                </p>
              </div>
            </div>
          </article>

          <article className="flex-row">
            <div className="content-container flex-collumn centralize" style={{ paddingRight: '3rem' }}>
              <div style={{ borderLeft: '8px solid #5D83D8', borderRadius: '12px', paddingLeft: '30px' }}>
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
            </div>
            <img src={sleepFunctioning} alt="" className="img" />
          </article>

          <article className="flex-collumn">
            <h2 style={{ color: '#5272BF' }}>Quais são as fases do sono?</h2>
            <p>Existem 4 fases do sono, sendo elas:</p>
            <div className="flex-row">
              <img src={sleepStages} alt="" className="sleep-stages" />
              <div className="content-container flex-collumn">
                <div style={{ borderLeft: '8px solid #5272BF', borderRadius: '12px', paddingLeft: '30px' }}>
                  <p style={{ paddingTop: '1rem' }}>
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
            </div>
          </article>
          <article className="flex-row">
            <div className="content-container flex-collumn centralize">
              <div style={{ borderLeft: '8px solid #5B5C9F', borderRadius: '10px', paddingLeft: '30px' }}>
                <h2 style={{ color: '#5B5C9F' }}>Por que precisamos dormir bem?</h2>
                <p>
                  Dormir bem é fundamental para o bom funcionamento do organismo,
                  pois é durante o sono que o organismo consegue recuperar as
                  energias, regular o nível de vários hormônios fundamentais para o
                  bom funcionamento do corpo e otimizar o metabolismo.
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
            </div>
            <img src={whySleep} alt="" className="img" />
          </article>

          <div className="sec centralize">
            <article className="flex-row">
              <img src={clock} alt="" className="img" />
              <div className="centralize">
                <div className="centralize calculate-container flex-collumn-center">
                  <h2 style={{ color: '#8358A1' }}>Calcule o seu sono.</h2>
                  <p>
                    Veja que horas deve acordar ou ir dormir para ter uma boa noite de
                    sono usando a calculadora a seguir:
                  </p>
                  <BasicButton children={"Calculate"} color={"secondary"} href={"sleep-or-wake-up"} />
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
