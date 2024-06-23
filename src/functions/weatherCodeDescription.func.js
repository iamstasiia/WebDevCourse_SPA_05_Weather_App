import Default from "../assets/images/3837.jpg";
import Sunny from "../assets/images/3837.jpg";
import Cloudy from "../assets/images/3837.jpg";
import Foggy from "../assets/images/3837.jpg";
import Rainy from "../assets/images/3837.jpg";
import Snow from "../assets/images/3837.jpg";
import Thunderstorm from "../assets/images/3837.jpg";

const weatherCodeDescription = {
    0: { description: "Unknown", image: Default, icon: "fa-regular fa-sun" },
    200: {
        name: "Thunderstorm",
        description: "thunderstorm with light rain",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    201: {
        name: "Thunderstorm",
        description: "thunderstorm with rain",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    202: {
        name: "Thunderstorm",
        description: "thunderstorm with heavy rain",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    210: {
        name: "Thunderstorm",
        description: "light thunderstorm",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    211: {
        name: "Thunderstorm",
        description: "thunderstorm",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    212: {
        name: "Thunderstorm",
        description: "heavy thunderstorm",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    221: {
        name: "Thunderstorm",
        description: "ragged thunderstorm",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    230: {
        name: "Thunderstorm",
        description: "thunderstorm with light drizzle",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    231: {
        name: "Thunderstorm",
        description: "thunderstorm with drizzle",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    232: {
        name: "Thunderstorm",
        description: "thunderstorm with heavy drizzle",
        image: Thunderstorm,
        icon: "fa-solid fa-cloud-bolt",
    },
    300: {
        name: "Drizzle",
        description: "light intensity drizzle",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    301: {
        name: "Drizzle",
        description: "drizzle",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    302: {
        name: "Drizzle",
        description: "heavy intensity drizzle",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    310: {
        name: "Drizzle",
        description: "light intensity drizzle rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    311: {
        name: "Drizzle",
        description: "drizzle rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    312: {
        name: "Drizzle",
        description: "heavy intensity drizzle rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    313: {
        name: "Drizzle",
        description: "shower rain and drizzle",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    314: {
        name: "Drizzle",
        description: "heavy shower rain and drizzle",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    321: {
        name: "Drizzle",
        description: "shower drizzle",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    500: {
        name: "Rain",
        description: "light rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-sun-rain",
    },
    501: {
        name: "Rain",
        description: "moderate rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-sun-rain",
    },
    502: {
        name: "Rain",
        description: "heavy intensity rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-sun-rain",
    },
    503: {
        name: "Rain",
        description: "very heavy rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-sun-rain",
    },
    504: {
        name: "Rain",
        description: "extreme rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-sun-rain",
    },
    511: {
        name: "Rain",
        description: "freezing rain",
        image: Rainy,
        icon: "fa-solid fa-snowflake",
    },
    520: {
        name: "Rain",
        description: "light intensity shower rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    521: {
        name: "Rain",
        description: "shower rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    531: {
        name: "Rain",
        description: "ragged shower rain",
        image: Rainy,
        icon: "fa-solid fa-cloud-rain",
    },
    600: {
        name: "Snow",
        description: "light snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    601: {
        name: "Snow",
        description: "snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    602: {
        name: "Snow",
        description: "heavy snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    611: {
        name: "Snow",
        description: "sleet",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    612: {
        name: "Snow",
        description: "light shower sleet",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    613: {
        name: "Snow",
        description: "shower sleet",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    615: {
        name: "Snow",
        description: "light rain and snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    616: {
        name: "Snow",
        description: "rain and snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    620: {
        name: "Snow",
        description: "light shower snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    621: {
        name: "Snow",
        description: "shower snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    622: {
        name: "Snow",
        description: "heavy shower snow",
        image: Snow,
        icon: "fa-solid fa-snowflake",
    },
    701: {
        name: "Mist",
        description: "mist",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    711: {
        name: "Smoke",
        description: "smoke",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    721: {
        name: "Haze",
        description: "haze",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    731: {
        name: "Dust",
        description: "sand/dust whirls",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    741: {
        name: "Fog",
        description: "fog",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    751: {
        name: "Sand",
        description: "sand",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    761: {
        name: "Dust",
        description: "dust",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    762: {
        name: "Ash",
        description: "volcanic ash",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    771: {
        name: "Squall",
        description: "squall",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    781: {
        name: "Tornado",
        description: "tornado",
        image: Foggy,
        icon: "fa-solid fa-smog",
    },
    800: {
        name: "Clear",
        description: "clear sky",
        image: Sunny,
        icon: "fa-solid fa-sun",
    },
    801: {
        name: "Clouds",
        description: "few clouds: 11-25%",
        image: Cloudy,
        icon: "fa-solid fa-cloud-sun",
    },
    802: {
        name: "Clouds",
        description: "few clouds: 25-50%",
        image: Cloudy,
        icon: "fa-solid fa-cloud-sun",
    },
    803: {
        name: "Clouds",
        description: "few clouds: 50-85%",
        image: Cloudy,
        icon: "fa-solid fa-cloud",
    },
    804: {
        name: "Clouds",
        description: "few clouds: 85-100%",
        image: Cloudy,
        icon: "fa-solid fa-cloud",
    },
};

export const getWeatherName = (weatherCode) => {
    return weatherCodeDescription[weatherCode].name || "Unknown";
};

export const getWeatherDescription = (weatherCode) => {
    return weatherCodeDescription[weatherCode].description || "Unknown";
};

export const getWeatherImage = (weatherCode) => {
    return weatherCodeDescription[weatherCode].image || Default;
};

export const getWeatherIcon = (weatherCode) => {
    return (
        weatherCodeDescription[weatherCode].icon ||
        weatherCodeDescription[0].icon
    );
};
