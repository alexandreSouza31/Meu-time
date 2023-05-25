import { useEffect, useState } from "react";

const Api = () => {
  const myKey = "cdc17bd20cmsh6e3105545b1023bp1eb18bjsn39c1b1a4c350";

  const [allInfo, setAllInfo] = useState([]);
  const [countryState, setCountryState] = useState();
  const [leagueState, setLeagueState] = useState([]);
  const [seasonState, setSeasonState] = useState([]);

  function fetchData(endpoint) {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", myKey);
    myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/${endpoint}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((name) => setAllInfo(name.response))
      .catch((error) => console.log("error", error));

    console.log("ess é o allInfo",allInfo);
  }

  useEffect(() => {
    fetchData("leagues");
   
  }, []);

  function leagueFilter(lg) {
    
    const countryFilter = lg.filter((c) => c.country.name === countryState);
    const getLeague = countryFilter.map((l) => l.league.name);
    const getSeason = countryFilter.map((s) => s.seasons[0].year);
    
    setLeagueState(getLeague);
    setSeasonState(getSeason);
  }

  return (
    <>
      
      {/* country */}
      <label htmlFor="country">Selecione um país:</label>
      <select 
        onChange={(e) => {

          setCountryState(e.target.value);
        }}

        onBlur={() => {
          leagueFilter(allInfo)
        }}
        name=""
        className="styles.country"
      >
        {allInfo.map((c, index) => (
          <option key={index} value={c.country.name}>
            {c.country.name}
          </option>
        ))}
      </select>

      {/* league */}
      <label htmlFor="league">Selecione a liga:</label>
      <select name="" className="styles.league">
        {leagueState.length !== 0 &&
          leagueState.map((l, index) => (
            <option key={index} value={l}>
              {l}
            </option>
          ))}
      </select>

      {/* season */}
      <label htmlFor="season">Selecione a temporada:</label>
      <select name="" className="styles.season">
        {seasonState.length !== 0 &&
          seasonState.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
      </select>

    </>
  );
};

export default Api;
