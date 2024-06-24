import Default from "../assets/images/cloudy.jpg";
import Sunny from "../assets/images/sunny.jpg";
import Cloudy25 from "../assets/images/2148824924.jpg";
import Cloudy50 from "../assets/images/cloudy.jpg";
import Cloudy85 from "../assets/images/2148824918.jpg";
import Cloudy100 from "../assets/images/2380.jpg";
import Foggy from "../assets/images/foggy.jpg";
import Rainy from "../assets/images/4399.jpg";
import Snow from "../assets/images/snow.jpg";
import Thunderstorm from "../assets/images/thunderstorm.jpg";
import {
    faCloud,
    faCloudBolt,
    faCloudRain,
    faCloudSun,
    faCloudSunRain,
    faSmog,
    faSnowflake,
    faSun,
} from "@fortawesome/free-solid-svg-icons";

const weatherCodeDescription = {
    0: { description: "Unknown", image: Default, icon: "fa-regular fa-sun" },
    200: {
        name: "Thunderstorm",
        description: "thunderstorm with light rain",
        image: Thunderstorm,
        //icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    201: {
        name: "Thunderstorm",
        description: "thunderstorm with rain",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    202: {
        name: "Thunderstorm",
        description: "thunderstorm with heavy rain",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    210: {
        name: "Thunderstorm",
        description: "light thunderstorm",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    211: {
        name: "Thunderstorm",
        description: "thunderstorm",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    212: {
        name: "Thunderstorm",
        description: "heavy thunderstorm",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    221: {
        name: "Thunderstorm",
        description: "ragged thunderstorm",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    230: {
        name: "Thunderstorm",
        description: "thunderstorm with light drizzle",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    231: {
        name: "Thunderstorm",
        description: "thunderstorm with drizzle",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    232: {
        name: "Thunderstorm",
        description: "thunderstorm with heavy drizzle",
        image: Thunderstorm,
        // icon: "fa-solid fa-cloud-bolt",
        icon: faCloudBolt,
    },
    300: {
        name: "Drizzle",
        description: "light intensity drizzle",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    301: {
        name: "Drizzle",
        description: "drizzle",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    302: {
        name: "Drizzle",
        description: "heavy intensity drizzle",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    310: {
        name: "Drizzle",
        description: "light intensity drizzle rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    311: {
        name: "Drizzle",
        description: "drizzle rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    312: {
        name: "Drizzle",
        description: "heavy intensity drizzle rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    313: {
        name: "Drizzle",
        description: "shower rain and drizzle",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    314: {
        name: "Drizzle",
        description: "heavy shower rain and drizzle",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    321: {
        name: "Drizzle",
        description: "shower drizzle",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    500: {
        name: "Rain",
        description: "light rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-sun-rain",
        icon: faCloudSunRain,
    },
    501: {
        name: "Rain",
        description: "moderate rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-sun-rain",
        icon: faCloudSunRain,
    },
    502: {
        name: "Rain",
        description: "heavy intensity rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-sun-rain",
        icon: faCloudSunRain,
    },
    503: {
        name: "Rain",
        description: "very heavy rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-sun-rain",
        icon: faCloudSunRain,
    },
    504: {
        name: "Rain",
        description: "extreme rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-sun-rain",
        icon: faCloudSunRain,
    },
    511: {
        name: "Rain",
        description: "freezing rain",
        image: Rainy,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    520: {
        name: "Rain",
        description: "light intensity shower rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    521: {
        name: "Rain",
        description: "shower rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    531: {
        name: "Rain",
        description: "ragged shower rain",
        image: Rainy,
        // icon: "fa-solid fa-cloud-rain",
        icon: faCloudRain,
    },
    600: {
        name: "Snow",
        description: "light snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    601: {
        name: "Snow",
        description: "snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    602: {
        name: "Snow",
        description: "heavy snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    611: {
        name: "Snow",
        description: "sleet",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    612: {
        name: "Snow",
        description: "light shower sleet",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    613: {
        name: "Snow",
        description: "shower sleet",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    615: {
        name: "Snow",
        description: "light rain and snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    616: {
        name: "Snow",
        description: "rain and snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    620: {
        name: "Snow",
        description: "light shower snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    621: {
        name: "Snow",
        description: "shower snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    622: {
        name: "Snow",
        description: "heavy shower snow",
        image: Snow,
        // icon: "fa-solid fa-snowflake",
        icon: faSnowflake,
    },
    701: {
        name: "Mist",
        description: "mist",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    711: {
        name: "Smoke",
        description: "smoke",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    721: {
        name: "Haze",
        description: "haze",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    731: {
        name: "Dust",
        description: "sand/dust whirls",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    741: {
        name: "Fog",
        description: "fog",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    751: {
        name: "Sand",
        description: "sand",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    761: {
        name: "Dust",
        description: "dust",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    762: {
        name: "Ash",
        description: "volcanic ash",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    771: {
        name: "Squall",
        description: "squall",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    781: {
        name: "Tornado",
        description: "tornado",
        image: Foggy,
        // icon: "fa-solid fa-smog",
        icon: faSmog,
    },
    800: {
        name: "Clear",
        description: "clear sky",
        image: Sunny,
        // icon: "fa-solid fa-sun",
        icon: faSun,
    },
    801: {
        name: "Clouds",
        description: "few clouds: 10-25%",
        image: Cloudy25,
        // icon: "fa-solid fa-cloud-sun",
        icon: faCloudSun,
    },
    802: {
        name: "Clouds",
        description: "few clouds: 25-50%",
        image: Cloudy50,
        // icon: "fa-solid fa-cloud-sun",
        icon: faCloudSun,
    },
    803: {
        name: "Clouds",
        description: "few clouds: 50-85%",
        image: Cloudy85,
        // icon: "fa-solid fa-cloud",
        icon: faCloud,
    },
    804: {
        name: "Clouds",
        description: "few clouds: 85-100%",
        image: Cloudy100,
        // icon: "fa-solid fa-cloud",
        icon: faCloud,
    },
};

export const getWeatherName = (weatherCode) => {
    return weatherCodeDescription[weatherCode].name || "Unknown";
};

export const getWeatherDescription = (weatherCode) => {
    return weatherCodeDescription[weatherCode].description || "Unknown";
};

export const getWeatherImage = (weatherCode) => {
    return (
        weatherCodeDescription[weatherCode].image ||
        weatherCodeDescription[0].image
    );
};

export const getWeatherIcon = (weatherCode) => {
    return (
        weatherCodeDescription[weatherCode].icon ||
        weatherCodeDescription[0].icon
    );
};
