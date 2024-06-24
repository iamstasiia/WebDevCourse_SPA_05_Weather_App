import { getWeatherDescription } from "../../functions/weatherCodeDescription.func.js";

const InfoComponent = ({ weatherData }) => {

    const windSpeed = weatherData.list[0].wind.speed;
    const humidity = weatherData.list[0].main.humidity;
    const feelTemp = weatherData.list[0].main.feels_like;
    const weatherCode = weatherData.list[0].weather[0].id;

    return (
        <section className="details-container">
            <div>
                <h3>Wind</h3>
                <strong>{windSpeed}</strong>
                <small>m/s</small>
            </div>
            <div>
                <h3>Humidity</h3>
                <strong>{humidity}%</strong>
            </div>
            <div>
                <h3>Feels like</h3>
                <strong>{Math.round(feelTemp)}°</strong>
            </div>
            <div>
                <h3>Details</h3>
                <strong>{getWeatherDescription(weatherCode)}</strong>
            </div>
        </section>
    );
};

export default InfoComponent;
