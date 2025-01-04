export const fetchWeatherData = async (location) => {
    const apiKey = import.meta.env.VITE_SECRET_API_KEY;
    const encodedLocation = encodeURIComponent(location);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodedLocation}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetching weather data failed:", error);
        throw error;
    }
};
