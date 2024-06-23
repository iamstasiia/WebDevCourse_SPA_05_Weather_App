import { fetchWeatherData } from "./functions/fetchWeatherData.func.js";
import FooterComponent from "./components/footer/Footer.comp.jsx";
import "./App.scss";

function App() {
    const getWeather = async (location) => {
        try {
            const weatherData = await fetchWeatherData(location);
            console.log(weatherData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    console.log(getWeather("Kyiv"));

    return (
        <>
            <FooterComponent />
        </>
    );
}

export default App;
