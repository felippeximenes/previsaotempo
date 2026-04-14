import './WeatherInformations.css'

function WeatherInformations({ weather }) {
    return (
        <div className='weather-card'>
            <h2 className='city-name'>{weather.name}</h2>

            <div className='weather-hero'>
                <img
                    className='weather-icon'
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                />
                <p className='temperature'>{Math.round(weather.main.temp)}<span className='temp-unit'>°C</span></p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <div className='detail-chip'>
                    <span className='detail-label'>Sensação</span>
                    <span className='detail-value'>{Math.round(weather.main.feels_like)}°C</span>
                </div>
                <div className='detail-chip'>
                    <span className='detail-label'>Umidade</span>
                    <span className='detail-value'>{weather.main.humidity}%</span>
                </div>
                <div className='detail-chip'>
                    <span className='detail-label'>Pressão</span>
                    <span className='detail-value'>{weather.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherInformations
