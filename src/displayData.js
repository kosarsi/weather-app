export default function displayData(data) {

    const dayWeather = document.querySelector(".day-weather");
    dayWeather.textContent = ""; // Clears content of div displaying all weather data

    let days = [];

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    for (let i = 0; i < 7; i++) {
        days.push(data.days[i])
    }

    let currentDay = days[0];
    let currentDate = currentDay.datetime; 
    const [year, month, day] = currentDate.split("-").map(Number); 
    const dateObj = new Date(year, month - 1, day); 
    const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    console.log(dayOfWeek); 

    const dayTempSpan = document.createElement('span');
    const dayPrecipitationSpan = document.createElement('span');
    const dayHumiditySpan = document.createElement('span');
    const dayWindSpan = document.createElement('span');
    dayTempSpan.textContent = data.currentConditions.temp + "°";
    dayPrecipitationSpan.textContent = "Precipitation: " + data.currentConditions.precipprob + "%";
    dayHumiditySpan.textContent = "Humidity: " + data.currentConditions.humidity + "%"; 
    dayWindSpan.textContent = "Wind Speed: " + data.currentConditions.windspeed + " mph"; 
    dayWeather.appendChild(dayTempSpan);
    const sideDayData = document.createElement("div");
    sideDayData.appendChild(dayPrecipitationSpan);
    sideDayData.appendChild(dayHumiditySpan);
    sideDayData.append(dayWindSpan); 
    dayWeather.appendChild(sideDayData);

    // for (let day in days) {
    //     const dayCard = document.createElement("div");
    //     const minMaxTemp = document.createElement("span");
    //     minMaxTemp.textContent = day.tempmin + "° " + day.tempmax + "°";
    // }

}