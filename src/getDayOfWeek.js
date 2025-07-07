export default function getDayOfWeek(day) {
    console.log(day); 
    let date = day.datetime; 
    const [year, month, dayNum] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, dayNum); 
    const dayOfWeek = dateObj.toLocaleDateString('en-Us', { weekday: "short" });
    return dayOfWeek;
}