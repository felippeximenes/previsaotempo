import './WeatherInformations5Days.css'

function WeatherInformations5Days({ weather5Days }) {
    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(forecast) {
        return new Date(forecast.dt * 1000).toLocaleDateString('pt-BR', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
        })
    }

    return (
        <div className='forecast-card'>
            <h3 className='forecast-title'>Próximos 5 Dias</h3>
            <div className='forecast-list'>
                {next5DaysForecast.map(forecast => (
                    <div key={forecast.dt} className='forecast-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img
                            className='forecast-icon'
                            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                            alt={forecast.weather[0].description}
                        />
                        <p className='forecast-desc'>{forecast.weather[0].description}</p>
                        <p className='forecast-temps'>
                            <span className='temp-max'>{Math.round(forecast.main.temp_max)}°</span>
                            <span className='temp-min'>{Math.round(forecast.main.temp_min)}°</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInformations5Days
