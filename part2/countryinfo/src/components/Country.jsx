import CountryData from "./CountryData"
import WeatherInfo from "./WeatherInfo"

const Country = ({ countriesToShow, setCountriesToShow }) => {

    if (countriesToShow.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    else if (countriesToShow.length === 0) {
        return
    }
    else if (countriesToShow.length === 1) {
        const country = countriesToShow[0]

        return (
            <CountryData country={country} />
        )
    }
    else {
        return (
            <div>
                {
                    countriesToShow.map((country, idx) => (
                        <div key={idx}>
                            <li>{country.name.common} <button onClick={() => { setCountriesToShow([country]) }}>show</button> </li>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default Country