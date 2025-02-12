import './WeatherInformations.css'

function WeatherInformations({ weather }) {
    if (!weather) {
        return <p>Carregando informações...</p>;
    }

    return (
        <div className='weather-container'>

        </div>
    );
}

export default WeatherInformations;
