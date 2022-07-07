import * as React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <header>
        <h1>
          <a href="/home">Calculadora do sono</a>
        </h1>
      </header>
      <main>
        <article>
          <h2>Quanto tempo preciso dormir?</h2>
          <p>
            Para programar um boa noite de sono deve-se calcular quantos ciclos
            de 90 minutos você tem de dormir para despertar no momento em que o
            último ciclo terminar e, assim, acordar mais relaxado, com energia e
            boa disposição.
          </p>
          <p>
            <h4>Como funciona o ciclo do sono?</h4>
            <p>
                O ciclo do sono corresponde ao
                conjunto das fases do sono que tem início a partir do momento que a
                pessoa adormece e vai até a fase do sono REM, que é a fase do sono
                mais profunda e que garante o sono mais reparador e mais relaxante,
                no entanto é mais difícil de atingir essa fase do sono.
            </p>
            <p>
                O corpo
                passa por vários ciclos que tem duração de 90 a 100 minutos por
                ciclo e normalmente são necessários 4 a 5 ciclos por noite, o que
                correspondente a 8 horas de sono.
            </p>
          </p>
          <p>
            <h4>Quais são as fases do sono?</h4>
            Existem 4 fases do sono, sendo elas:
            <ul>
                <li>
                    Sono leve - fase 1, que é uma fase bastante leve e que dura mais ou
                    menos 10 minutos. Essa fase tem início a partir do momento que a
                    pessoa fecha os olhos, no entanto é possível acordar facilmente com
                    qualquer som;
                </li>
                <li>
                    Sono leve - fase 2, que dura cerca de 20 minutos e
                    nessa fase o corpo já se encontra relaxado, mas a mente continua
                    ativa e, por isso, é ainda possível acordar durante essa fase do
                    sono;
                </li>
                <li>
                    Sono profundo - fase 3, em que os músculos encontram-se
                    completamente relaxados e o corpo está menos sensível a barulhos ou
                    movimentos, sendo mais difícil acordar, além de que nessa fase é
                    muito importante para a recuperação do corpo;
                </li>
                <li>
                    Sono REM - fase 4,
                    também conhecida como fase de sono profundo, é a última fase do
                    ciclo do sono e que dura cerca de 10 minutos, começando 90 minutos
                    depois de adormecer.
                </li>
            </ul>
          </p>
          <p>
            Na fase REM os olhos se movimentam muito rapidamente, os batimentos
            cardíacos aumentam e os sonhos aparecem. É difícil atingir o sono
            REM e, por isso é importante diminuir a luz do ambiente e não usar o
            celular ou o computador antes de dormir, pois assim é possível
            chegar ao sono REM de forma mais fácil.
          </p>
          <p>
              <h4>Por que precisamos dormir bem?</h4>
              <p>Dormir bem é fundamental para o bom funcionamento do organismo, pois é durante o sono que o organismo consegue recuperar as energias, regular o nível de vários hormônios fundamentais para o bom funcionamento do corpo e otimizar o metabolismo. Além disso, é durante o sono há a consolidação do que foi aprendido durante o dia, bem como reparação dos tecidos e fortalecimento do sistema imune.</p>
              
              <p>Assim, quando não se tem uma boa noite de sono é possível que se tenha algumas consequências, como alterações de humor, aumento das inflamações no corpo, falta de energia e enfraquecimento do sistema imune, por exemplo, além de também aumentar o risco de desenvolver algumas doenças, como obesidade, diabetes e pressão alta, por exemplo. Confira mais razões do porquê precisamos dormir melhor.</p>
          </p>
          <div className="calculate-container">
            <p>
                Veja que horas deve acordar ou ir dormir para ter uma boa noite de
                sono usando a calculadora a seguir:
            </p>
          </div>
        </article>
      </main>
      <footer>kotenka 2022</footer>
    </div>
  );
}

export default Home;
