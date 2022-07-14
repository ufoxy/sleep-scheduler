import Navbar from '../components/navbar';
import sweetDreamSleep from '../assets/imgs/sweet-dream-sleep.png'
import './home.css'
import BasicButton from '../components/basic-button';

function Home() {
    return (
        <div className="super container">
            <Navbar />
            <main>
                <section className="home-section flex-row">
                    <img src={sweetDreamSleep} alt="Sleeping Girl" className="home-img" />
                    <div className="content-home-container flex-collumn">
                        <div className='content'>
                            <h2>Calcule o seu sono</h2>
                            <p>Veja que horas deve acordar ou ir dormir para ter uma boa noite de sono usando a calculadora a seguir:</p>
                            <div className="button-home-container">
                                <BasicButton children={"Calculate"} color={"primary"} variant={"contained"} href={"sleep-or-wake-up"} />
                                <BasicButton children={"Guide"} color={"primary"} variant={"outlined"} href={"home"}
                                    size={{ width: "180px", height: "45px", fontWeight: '600', fontSize: '16px' }} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;