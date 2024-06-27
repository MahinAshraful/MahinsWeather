import { useState } from "react";
import axios from "axios";

const Weathercard = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("")
    
    const API_KEY = "49bcf598a86d64d2a0250689bb6efc52"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    let lat = 1
    let lon = 1


    const searchLocation = (event) =>{
        if(event.key === "Enter"){
            axios.get(url)
            .then((Response)=>{
                setData(Response.data)
                console.log(Response.data);
            })
            setLocation("")
        }
    }


    return(
        <>
        <h1>Mahins Weather</h1>
        <input type="text" 
        value = {location} 
        onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
        placeholder="Enter City"
        
        />

        <div className="card">

            <div>
            <h2 className="card-title">City Name</h2>
            </div>

            <div id = "temp">
                <p className="card-text">temp</p>
            </div>

            <div id = "info">
                <p className="card-text">info</p>
            </div>

            <div id = "hourly-forcast">
                <p className="card-text">hourly forcast</p>
            </div>
            
       </div>  
        </>
    )
}

export default Weathercard