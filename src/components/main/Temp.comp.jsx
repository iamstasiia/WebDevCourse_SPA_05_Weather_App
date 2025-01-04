import { getWeatherIcon } from "../../functions/weatherCodeDescription.func.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const TempComponent = ({ weatherData }) => {
    const temperature = weatherData.list[0].main.temp;
    const weatherCode = weatherData.list[0].weather[0].id;
    const weatherName = weatherData.list[0].weather[0].main;

    return (
        <section className="temp-container">
            <div>
                <h2>{Math.round(temperature)}°</h2>
                <p>
                    <FontAwesomeIcon icon={getWeatherIcon(weatherCode)} className="weather-icon" />
                    {weatherName}
                </p>
            </div>
        </section>
    );
};

TempComponent.propTypes = {
    weatherData: PropTypes.object,
};

export default TempComponent;
