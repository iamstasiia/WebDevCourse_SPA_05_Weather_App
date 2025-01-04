import TempComponent from "./Temp.comp.jsx";
import InfoComponent from "./Info.comp.jsx";
import ForecastComponent from "./Forecast.comp.jsx";
import PropTypes from "prop-types";
import "./Main.style.scss";

const MainComponent = ({ weatherData }) => {
    if (!weatherData || !weatherData.list) {
        return <div>No data available</div>;
    }

    return (
        <main>
            <div className="current-weather-container">
                <TempComponent weatherData={weatherData} />
                <div className="dividing-line"></div>
                <InfoComponent weatherData={weatherData} />
            </div>
            <ForecastComponent weatherData={weatherData} />
        </main>
    );
};

MainComponent.propTypes = {
    weatherData: PropTypes.object,
};

export default MainComponent;
