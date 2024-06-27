import './index.css'
import video from './assets/video.mp4'
import WeatherSearch from './component/WeatherSearch'
import Weather from './component/Weather'

import { useState } from 'react'

function App() {
  const [data, setData] = useState({});

  return (
    <>
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted></video>
                <div className="container">
                <WeatherSearch setData={setData} />
                  <Weather weatherData = {data}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
