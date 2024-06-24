import TempComponent from "./Temp.comp.jsx";
import InfoComponent from "./Info.comp.jsx";
import HoursComponent from "./Hours.comp.jsx";
import WeekComponent from "./Week.comp.jsx";
import './Main.style.scss'

const MainComponent = ({ weatherData }) => {
    if (!weatherData || !weatherData.list) {
        return <div>No data available</div>;
    }

    return (
        <main>
            <TempComponent weatherData={weatherData} />
            <InfoComponent weatherData={weatherData} />
            <HoursComponent weatherData={weatherData} />
            <WeekComponent weatherData={weatherData} />
        </main>
    );
};

export default MainComponent;
