import React, {useState} from 'react';
import '../styles/WeatherApp.css'; 

const api = {
    key: "dfb68e03983cbca6f09b52c554395f1f",
    base: "https://api.openweathermap.org/data/2.5/"
}

const WeatherApp = () => {

    const [query, setQuery] = useState(''); 
    const [weather, setWeather] = useState({});
    
    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery(''); 
                console.log(result);
            }); 
        }
    }

    const getDate = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate(); 
        let month = months[d.getMonth()]; 
        let year = d.getFullYear(); 

        return `${day} ${date} ${month} ${year}`
    }

    
    return (
        
        
        <div className={
            (typeof weather.main != "undefined") ? 
            ((weather.main.temp > 16) ? 
            "weather-app warm" : "app") 
            : "weather-app"}>
            <main>
                <div className='search-box'>
                    <input 
                        type='text' className="search-bar" placeholder="Type your location" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
                </div>
                {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div className='date'>
                            {getDate(new Date())}
                        </div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°C
                        </div>
                        <div className="weather-main">
                            {weather.weather[0].main}
                        </div>
                        <div className="weather-secondary">
                            Feels like: {Math.round(weather.main.feels_like)}°C
                        </div>
                        <div className="weather-secondary">
                            Temp max: {Math.round(weather.main.temp_max)}°C | Min: {Math.round(weather.main.temp_min)}°C
                        
                         </div>
{/*                         <div className="weather-secondary">
                            Sunrise at: {weather.sys.sunrise}
                        </div>
                        <div className="weather-secondary">
                            Sunset at: new {weather.sys.sunset}
                        </div> */}
                        <div className="weather-secondary">
                            Humidity: {weather.main.humidity}%
                        </div>
                        <div className="weather-bottom">
                            Have a nice day
                        </div>

                    </div>
                </div>
                ) : ('')
                }
            </main>
        </div>
    )
}

export default WeatherApp; 