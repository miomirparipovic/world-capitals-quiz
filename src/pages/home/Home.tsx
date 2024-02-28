import { CONTINENTS } from "../../data/countries";
import "./home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-title">
        <h1>World Capitals Quiz</h1>
      </div>
      <div className="home-top">
        <div>
          <select className="home-select">
            <option></option>
            {CONTINENTS.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="choice">Random countries...</div>
      </div>

      <div className="home-main">test</div>
    </div>
  );
}
