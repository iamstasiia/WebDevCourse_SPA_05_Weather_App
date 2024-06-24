import { fetchWeatherData } from "./functions/fetchWeatherData.func.js";
import { getCurrentDate } from "./functions/getCurrentDate.func.js";
import HeaderComponent from "./components/header/Header.comp.jsx";
import FooterComponent from "./components/footer/Footer.comp.jsx";
import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState('Kyiv');
  const [weatherData, setWeatherData] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const weather = await fetchWeatherData(location);
          setWeatherData(weather);
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
        <>
            <HeaderComponent setLocation={setLocation} weatherData={weatherData} currentDate={currentDate} />
            <FooterComponent />
        </>
    );
}

export default App;
