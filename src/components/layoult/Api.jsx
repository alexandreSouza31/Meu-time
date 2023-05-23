import { useEffect, useState } from "react";


const Api = () => {
    const myKey = "cdc17bd20cmsh6e3105545b1023bp1eb18bjsn39c1b1a4c350"

    const [country, setCountry] = useState([]);

    function fetchData() {

        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "cdc17bd20cmsh6e3105545b1023bp1eb18bjsn39c1b1a4c350");
        myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api-football-v1.p.rapidapi.com/v3/countries", requestOptions)
            .then(response => response.json())
            .then(name => setCountry(name.response))
            .catch(error => console.log('error', error));

        console.log(country)
    }

    useEffect(() => {
        fetchData()
        
    }, [])

    return (
        <>
            <label htmlFor="country">Selecione um país:</label>
            <select name="" className="styles.country">
                {country.map((c, index) => (
                    <option key={index} value={c.name}>{c.name}

                    </option>
                ))}
            </select>
        </>
    )
}

export default Api;