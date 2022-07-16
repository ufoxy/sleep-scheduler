import github from "../assets/imgs/github.svg";
import "./navbar.css";

function Navbar() {
    return (
        <header className="header">
            <div
                className="flex-row"
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <h1>
                    <a href="/home">Sleep Scheduler</a>
                </h1>
                <a
                    style={{ paddingLeft: "15px" }}
                    href="https://github.com/ufoxy/sleep-schedule"
                    aria-label="Homepage"
                    title="GitHub"
                >
                    <img src={github} alt="" className="icon-img" />
                </a>
            </div>

            <nav className="stroke" id="mainNav">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <p className="centralize">|</p>
                    <li>
                        <a href="#" onClick={() => alert("Page under development")}>Guide</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
