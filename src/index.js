import "./style.css"

const API_KEY = 'ZS5XC4DFF5UPJMLTGUB496CRP'; 
const submitButton = document.querySelector("button");
const locationInput = document.querySelector("input");

async function getData() {
    
    let location = locationInput.value;
    console.log("Request sent, waiting ...");
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=' + API_KEY, {
        mode: "cors"
    });
    const dataJson = await response.json(); 
    const days = dataJson.days;
    console.log(days);

}

submitButton.addEventListener("click", getData); 