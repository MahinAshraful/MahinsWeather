import './index.css'
import video from './assets/video.mp4'
import Weathercard from './component/Weathercard'

function App() {

  return (
    <>
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted></video>
                <div className="container">
                  <Weathercard></Weathercard>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
