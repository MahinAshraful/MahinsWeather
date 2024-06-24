import './index.css'
import video from './assets/video.mp4'

function App() {

  return (
    <>
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted></video>
                <div className="container">
                </div>
            </div>
        </div>
    </>
  )
}

export default App
