import React, {useState} from "react";

import "./Weather.css"

const api = {
	key: "819d18735f180fb304cba0598d846a91",
	base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () =>
{

    // const [mood, setMood] = useState("");
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const searchHandler = (value) =>
    {
        if(value.key==="Enter")
        {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setQuery('');
                setWeather(result);
                console.log(result);
                console.log(result.main.temp)
                
                
                
        });
        
    }
    }
    
    const dateHandler = (currentDate) =>
    {
    let weekday = ["SUN", "MON", "Tue", "THURS", "FRI", "SAT"];
    let months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ];
    var day = weekday[currentDate.getDay()];
    var date = currentDate.getDate();
    var thisMonth = months[currentDate.getMonth()];
    var thisYear = currentDate.getFullYear();
    var h = addZero(currentDate.getHours());
	var m = addZero(currentDate.getMinutes());
    

    var timeLine = "AM";
    if(h>=12)
    {
        timeLine = "PM";
    }
    

    return `${h} : ${m} ${timeLine}, ${day} ${date} ${thisMonth} ${thisYear}`;
    }
    function addZero(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
    // const backgroundHandler = (temp) =>
    // {
    //     if(temp>15)
    //     {
    //         setMood("app warm")
    //     }
    //     else{
    //         setMood("app cold")
    //     }
    //     return mood;
    // }
    



    return (
			<div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm ' : 'app night') : 'app'}>
				<main>
					<div className="search-box ">
						<input
							type="text"
							placeholder="search..."
							className=" search-bar"
							onChange={(event) => setQuery(event.target.value)}
							value={query}
							onKeyPress={searchHandler}
						/>
					</div>
					{typeof weather.main != "undefined" ? (
						<div>
							<div className="location-box">
								<div className="location">
									{weather.name}, {weather.sys.country}
								</div>
								<div className="date">{dateHandler(new Date())}</div>
							</div>

							<div className="weather-box">
								<div className="temp">{weather.main.temp}°C</div>
								<div className="weather">{weather.weather[0].main}</div>
							</div>
                            {/* {backgroundHandler(weather.main.temp)} */}
						</div>
					) : (
						"No results found"
					)}
				</main>
			</div>
		);

                }


export default Weather;