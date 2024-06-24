const CityComponent = ({ weatherData, currentDate }) => {
    if (!weatherData || !weatherData.city) {
        return (
            <div className="city-container" style={{ justifyContent: "start" }}>
                No data available
            </div>
        );
    }

    const { name, country } = weatherData.city;

    return (
        <div className="city-container">
            <div>
                <h1>
                    {name}, {country}
                </h1>
                <p>{currentDate}</p>
            </div>
        </div>
    );
};

export default CityComponent;
