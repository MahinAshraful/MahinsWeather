import { useState } from "react";
import axios from "axios";

const WeatherSearch = ({ setData }) => {
    const [location, setLocation] = useState("")
    
    
    const API_KEY = "49bcf598a86d64d2a0250689bb6efc52"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`
  


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
 
        </>
    )
}

export default WeatherSearch