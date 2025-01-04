import { getWeatherIcon } from "../../functions/weatherCodeDescription.func.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const HoursComponent = ({ weatherData }) => {
    const hours = weatherData.list;
    const weatherCode = weatherData.list[0].weather[0].id;

    const hoursArray = [];
    for (let i = 0; i < 16; i++) {
        hoursArray.push(hours[i]);
    }

    return (
        <div className="hours-group">
            {hoursArray.map((hour, index) => (
                <div key={index}>
                    <h3>{new Date(hour.dt_txt).getHours()}:00</h3>
                    <FontAwesomeIcon icon={getWeatherIcon(weatherCode)} className="weather-icon" />
                    <p>{Math.round(hour.main.temp)}°</p>
                </div>
            ))}
        </div>
    );
};

HoursComponent.propTypes = {
    weatherData: PropTypes.object,
};

export default HoursComponent;
