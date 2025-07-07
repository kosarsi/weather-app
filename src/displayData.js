export default function displayData(data) {

    const dayWeather = document.querySelector(".day-weather");
    dayWeather.textContent = ""; // Clears content of div displaying all weather data

    let weekDays = [];
    
    for (let i = 0; i < 7; i++) {
        weekDays.push(data.days[i])
    }

    let currentDay = weekDays[0];
    let currentDate = currentDay.datetime; 
    const [year, month, day] = currentDate.split("-").map(Number); 
    const dateObj = new Date(year, month - 1, day); 
    const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

    const dayTempSpan = document.createElement('span');
    const dayPrecipitationSpan = document.createElement('span');
    const dayHumiditySpan = document.createElement('span');
    const dayWindSpan = document.createElement('span');
    dayTempSpan.textContent = currentDay.temp + "°";
    dayPrecipitationSpan.textContent = "Precipitation: " + currentDay.precipprob + "%";
    dayHumiditySpan.textContent = "Humidity: " + currentDay.humidity + "%"; 
    dayWindSpan.textContent = "Wind Speed: " + currentDay.windspeed + " mph"; 
    dayWeather.appendChild(dayTempSpan);
    const sideDayData = document.createElement("div");
    sideDayData.appendChild(dayPrecipitationSpan);
    sideDayData.appendChild(dayHumiditySpan);
    sideDayData.append(dayWindSpan); 
    dayWeather.appendChild(sideDayData);
    console.log(currentDay); 

    // for (let day in weekDays) {
    //     const dayCard = document.createElement("div");
    //     const minTemp = document.createElement("span");
    //     minTemp.textContent = "Min: °";
    // }

}