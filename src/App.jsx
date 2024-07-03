import { fetchWeatherData } from "./functions/fetchWeatherData.func.js";
import { getCurrentDate } from "./functions/getCurrentDate.func.js";
import HeaderComponent from "./components/header/Header.comp.jsx";
import MainComponent from "./components/main/Main.comp.jsx";
import FooterComponent from "./components/footer/Footer.comp.jsx";
import "./App.scss";
import { useState, useEffect } from "react";
import { getWeatherImage } from "./functions/weatherCodeDescription.func.js";

function App() {
  const [location, setLocation] = useState('Düsseldorf');
  const [weatherData, setWeatherData] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [backImage, setBackImage] = useState('Default');

  useEffect(() => {
    const fetchData = async () => {
      try {
          const weather = await fetchWeatherData(location);
          setWeatherData(weather);
          const image = getWeatherImage(weather.list[0].weather[0].id);
          setBackImage(image);
      } catch (error) {
          console.error("Error fetching weather data:", error);
      }
  };

  const fetchDate = async () => {
      try {
          const date = await getCurrentDate();
          setCurrentDate(date);
      } catch (error) {
          console.error("Error fetching current date:", error);
      }
  };

  if (location) {
    fetchData();
  }

  fetchDate();
}, [location]);

    return (
        <div className="app-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${backImage})`}}>
            <HeaderComponent setLocation={setLocation} weatherData={weatherData} currentDate={currentDate} />
            <MainComponent weatherData={weatherData} />
            <FooterComponent />
        </div>
    );
}

export default App;
