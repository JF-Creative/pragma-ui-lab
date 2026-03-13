import "./App.css";
import { Countdown } from "../../../modules/countdown";
import { SponsorRotator } from "../../../modules/SponsorRotator";
import logo from "./assets/20240616_Logo_V13-Caballitos-Palo-color.png";
import emisoras from "./assets/BANNER 1.png";
import { sponsors } from "./data/sponsor";

function App() {
  return (
    <section className="module">
      <div className="container">
        <div className="p1">
          <img className="logo" alt="caballitos-de-palo-v13" src={logo} />
          <div className="timerContainer">
            <Countdown />
          </div>
          <div className="patreon">
            <p>Patrocina:</p>
            <div className="sponsors-container">
              <SponsorRotator logos={sponsors} />
            </div>
          </div>
        </div>
        <div className="p2">
          <p>Escuche nuestras emisoras: </p>
          <img className="img-emisoras" src={emisoras} alt="Emisoras de RCN Radio" />
        </div>
      </div>
    </section>
  );
}

export default App;
