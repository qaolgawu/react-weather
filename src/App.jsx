import './App.css';
import { useState } from 'react';
import background from './media/0_Blue_Sky_Clouds.mp4'



const API_KEY = '9626038af778b2ed3da46501bf00ae4a';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const onClickSearchWeather = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,)
    const data = await response.json();
    setWeather(data);
  };

    return (
     
    <div className='app'>
       <video src={background} autoPlay muted loop className='background'></video>
      <div className='weather'>
        <h1>Weather App</h1>
        <form className='weather_form'>
          <input className='weather_input' type='text' placeholder='Your city' onChange={(event) => setCity(event.target.value)}></input>
          <button className='weather_button' type="submit" onClick={onClickSearchWeather}>
            <svg className='weather_icon'
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
            </svg>
          </button>
        </form>
        {weather.name !== undefined ? (
        <>
        <h2 className='weather_city'>{weather.name}</h2>
        <p className='weather_temp'>{Math.round(weather.main.temp-273)}°C</p>
        <p className='weather_info'>{weather.weather[0].main}</p>
        </>
      ) : null}
    </div>  
    </div>
  )
}

export default App
