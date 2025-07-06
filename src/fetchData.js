export default async function fetchData(location) {
    const API_KEY = 'ZS5XC4DFF5UPJMLTGUB496CRP'; 
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=' + API_KEY, {
        mode: "cors"
    });
    const dataJson = await response.json();
    return dataJson;
}