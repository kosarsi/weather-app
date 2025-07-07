import "./style.css"
import fetchData from "./fetchData";
import displayData from "./displayData";

const locationInput = document.querySelector("input");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", async () => {
    const location = locationInput.value;
    const data = await fetchData(location);
    displayData(data);
}); 