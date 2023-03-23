import { useState } from "react";
import fetchWeather from "./fetchWeather"
import moment from "moment"
import './App.css'
const App = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const search = async (e) => {
    if (e.code === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data)
      setQuery("")
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>Weather App</h1>
          <input placeholder="Enter City Name" type="text" value={query} onChange={handleChange} onKeyPress={search} />
        </div>
        {weather.main &&
          <div className="card-body">
           
           <section >
           <div id="city">
             <h2> {weather.name}
              <span>&nbsp;{weather.sys.country}. Weather</span></h2>
            </div>
            <div id="time">
              <p>As of {moment().format('LL')},&nbsp;{moment().format('dddd')}</p>
            </div>
            <div id="temp" style={{textAlign:"center"}}>
             <h2>{Math.round(weather.main.temp)}  <span>&deg;C</span></h2>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>
            {/* <div id="info">
            <p>{weather.weather[0].description}</p>
            </div> */}
           </section>

           <main>
           <div id="a">
              Humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(weather.main.humidity)}%
            </div>
            <div id="b">
              Visibility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Math.round(weather.visibility)} mi
            </div>
            <div id="a">
              Wind Speed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(weather.wind.speed)} Km/h
            </div>
            <div id="b">
              Sunrise&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
            </div>
            <div id="a">
              Sunset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}
            </div>
             <div id="b">

              Hig/Low&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(weather.main.temp)} /{Math.round(weather.main.temp)} 
             </div>

           </main>
          </div>
        }
      </div>
    </div>
  )
}
export default App;