import axios from "axios";

const API_KEY="47464608d6202cafa4f18b11ef97eb35"
const URL="https://api.openweathermap.org/data/2.5/weather"

// http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png

const fetchWeather= async (query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY
        }
    })
    return data
}

export default fetchWeather;