import WeatherSearch from "./WeatherSearch";

const Weather = ({weatherData}) => {

    return(

    <div>
            {weatherData.weather ? (
            <div className="card">
                <div>
                <h2 className="card-title">{weatherData.name}. {weatherData.sys.country}</h2>
                </div>

                <div id = "temp">
                    <p className="card-text">{weatherData.main.temp}</p>
                </div>

                <div id = "info">
                    <p className="card-text">{weatherData.weather[0].main}</p>
                </div>

                <div id = "hourly-forcast">
                    <p className="card-text">hourly forcast</p>
                </div>

            </div>): null}
    </div>

);

}

export default Weather

