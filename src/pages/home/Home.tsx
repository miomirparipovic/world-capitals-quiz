import { useEffect, useState } from "react";
import { CONTINENTS } from "../../data/countries";
import "./home.css";
import CountriesTable from "../../components/countries-table/CountriesTable";

export default function Home() {
  const [continent, setContinent] = useState("");
  const [countries, setCountries] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiVer = import.meta.env.VITE_API_VERSION;
  const fetchUrl = baseUrl + apiVer + "region/" + continent;
  console.log(fetchUrl);

  useEffect(() => {
    if (!continent) {
      console.log("no continent");
      return;
    }
    async function fetchData() {
      try {
        const response: Response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error(`Network response was not OK ${response.status}`);
        }
        const fetchedData = await response.json();
        setCountries(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [continent]);

  return (
    <div className="home-wrapper">
      <div className="home-title">
        <h1>World Capitals Quiz</h1>
      </div>
      <div className="home-top">
        <div>
          <select
            onChange={(e) => setContinent(e.target.value)}
            className="home-select"
          >
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
      <div className="home-main">
        <CountriesTable data={countries} />
      </div>
    </div>
  );
}
