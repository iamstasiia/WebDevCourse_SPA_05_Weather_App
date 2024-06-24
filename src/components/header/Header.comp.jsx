import LogoComponent from "./Logo.comp.jsx";
import CityComponent from "./City.comp.jsx";
import Search from "./Search.comp.jsx";
import "./Header.style.scss";

const HeaderComponent = ({ setLocation, weatherData, currentDate }) => {
    return (
        <header>
            <LogoComponent />
            <CityComponent
                weatherData={weatherData}
                currentDate={currentDate}
            />
            <Search setLocation={setLocation} />
        </header>
    );
};

export default HeaderComponent;
