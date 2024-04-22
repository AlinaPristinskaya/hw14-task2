function updateTime() {
    const now = new Date(); // Getting the current time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time in the element with id 'time'
    document.getElementById('time').textContent = timeString;
}

// Set the interval to update the time every second
setInterval(updateTime, 1000);

// Call the function once when the page is loaded to immediately show the time
updateTime();