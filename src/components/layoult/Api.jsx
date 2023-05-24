import { useEffect, useState } from "react";


const Api = () => {
    const myKey = "cdc17bd20cmsh6e3105545b1023bp1eb18bjsn39c1b1a4c350"

    const [country, setCountry] = useState([]);
    const [leagues, setLeague] = useState([]);

    function fetchData(endpoint) {

        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", myKey);
        myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api-football-v1.p.rapidapi.com/v3/${endpoint}`, requestOptions)
            .then(response => response.json())
            .then(name => setLeague(name.response))
            .catch(error => console.log('error', error))
        

        
        //console.log(leagues)
    }

    useEffect(() => {
        //fetchData("countries")
        fetchData("leagues")
    }, [])


    return (
        <>
            <label htmlFor="country">Selecione um país:</label>
            <select name="" className="styles.country">
                {leagues.map((c, index) => (
                    <option key={index} value={c.country.name}>
                        {c.country.name}
                        
                    </option>
                ))}
            </select>

            <label htmlFor="league">Selecione a liga:</label>
            <select name="" className="styles.league">
                {leagues.map((l, index) => ( 
                    <option key={index} value={l.league.name}>
                        {l.league.name}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Api;