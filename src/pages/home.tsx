import Navbar from "../components/navbar";
import sweetDreamSleep from "../assets/imgs/sweet-dream-sleep.png";
import BasicButton from "../components/basic-button";
import "./home.css";

function Home() {
    return (
        <div className="super container">
            <Navbar />
            <main>
                <section className="home-section flex-row">
                    <img src={sweetDreamSleep} alt="Sleeping Girl" className="home-img" />
                    <div className="content-home-container flex-collumn">
                        <div className="content">
                            <h2>Calculate your sleep</h2>
                            <p className="home-p">
                                See what time you should wake up or go to sleep for a good
                                night's sleep using the calculator below:
                            </p>
                            <div className="button-home-container">
                                <BasicButton
                                    children={"Calculate"}
                                    color={"primary"}
                                    variant={"contained"}
                                    href={"sleep-or-wake-up"}
                                />
                                <BasicButton
                                    children={"Guide"}
                                    color={"primary"}
                                    variant={"outlined"}
                                    href={"#"}
                                    size={{
                                        width: "180px",
                                        height: "45px",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                    }}
                                    onclick={() => alert("Page under development")}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
