import WeatherInfo from "./WeatherInfo"

const CountryData = ({ country }) => {

    const { name, capital, area, languages, flags } = country

    return (
        <div>
            <h1>{name.common}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h2>languages:</h2>
            <ul>
                {Object.entries(languages).map(
                    ([languageCode, language]) =>
                        <li key={languageCode}>{language}</li>
                )}
            </ul>
            <img src={flags.png} alt={name.common} />
            <WeatherInfo city_name={capital} />
        </div>
    )
}

export default CountryData 