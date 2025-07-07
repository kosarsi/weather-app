import getDayOfWeek from "./getDayOfWeek";

export default function displayData(data) {

    const dayWeather = document.querySelector(".day-weather");
    dayWeather.textContent = ""; // Clears content of div displaying all weather data

    // Displaying the current day's weather 
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

    // Displaying the week's weather
    const weekWeather = document.querySelector(".week-weather");
    weekWeather.textContent = "";
    for (let i = 0; i < 7; i++) {
        let day = data.days[i];
        const dayCard = document.createElement("div");
        dayCard.classList.add('day-card');
        const minMaxTemp = document.createElement("span");
        minMaxTemp.textContent = day.tempmin + "° " + day.tempmax + "°";
        const dayOfWeek = document.createElement("span");
        dayOfWeek.textContent = getDayOfWeek(day); 
        const dayWeather = document.createElement("span");
        dayWeather.textContent = day.conditions; 
        dayCard.appendChild(dayOfWeek);
        dayCard.appendChild(dayWeather);
        dayCard.append(minMaxTemp); 
        weekWeather.appendChild(dayCard); 
    }

}