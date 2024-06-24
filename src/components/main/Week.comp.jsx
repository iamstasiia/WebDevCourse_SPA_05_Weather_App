import { useState, useEffect } from "react";
import { getWeatherIcon } from "../../functions/weatherCodeDescription.func.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const WeekComponent = ({ weatherData }) => {
    
    const hours = weatherData.list;
    const weatherCode = weatherData.list[0].weather[0].id;

    const [filteredData, setFilteredData] = useState([]);
    const [hiddenList, setHiddenList] = useState(true);

    useEffect(() => {
        const today = new Date();
        const filtered = hours.filter((item) => {
            const itemDate = new Date(item.dt_txt);
            return itemDate > today;
        });

        const groupedData = filtered.reduce((accumulator, item) => {
            const date = item.dt_txt.split(" ")[0];
            if (!accumulator[date]) {
                accumulator[date] = [];
            }
            accumulator[date].push(item);
            return accumulator;
        }, {});

        const dailyData = Object.keys(groupedData).map((date) => {
            const dayData = groupedData[date];
            const minTemp = dayData.reduce((min, temp) => {
                return temp.main.temp_min < min ? temp.main.temp_min : min;
            }, dayData[0].main.temp_min);
            const maxTemp = dayData.reduce((max, temp) => {
                return temp.main.temp_max > max ? temp.main.temp_max : max;
            }, dayData[0].main.temp_max);
            return {
                date,
                minTemp,
                maxTemp,
                ...dayData[0],
            };
        });
        setFilteredData(dailyData);
    }, [hours]);

    const dayOfWeek = (dateString) => {
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    };

    return (
        <div className="week-container">
            <button onClick={() => setHiddenList(!hiddenList)}>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className={hiddenList ? "hidden-list" : "show-list"}>
                {filteredData.map((day, index) => (
                    <div key={index}>
                        <h3>{index === 0 ? "Today" : dayOfWeek(day.date)}</h3>
                        <FontAwesomeIcon icon={getWeatherIcon(weatherCode)} className="weather-icon" />
                        <p>
                            {Math.floor(day.minTemp)}°...
                            {Math.floor(day.maxTemp)}°
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeekComponent;
