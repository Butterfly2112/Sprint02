function getFormattedDate(dateObject) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear(); 
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const dayOfWeek = dateObject.getDay();

    const formattedDay = (day < 10 ? '0' : '') + day;
    const formattedMonth = (month < 9 ? '0' : '') + (month + 1);
    const formattedHours = (hours < 10 ? '0' : '') + hours;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

    const formattedDayOfWeek = daysOfWeek[dayOfWeek];

    return `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes} ${formattedDayOfWeek}`;
}
