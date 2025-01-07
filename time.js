function clock() {
    const now = new Date(); 
    let hours = now.getHours(); 
    const ampm = hours >= 12 ? "PM" : "AM"; 
    hours = hours % 12 || 12; // Convert hours to 12-hour format (12 instead of 0 for midnight/noon 22%12 = 
    hours = hours.toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0'); 
    const sec = now.getSeconds().toString().padStart(2, '0'); 
    
    const timenow = `${hours}:${min}:${sec} ${ampm}`; 
    
    document.getElementById("time1").textContent = timenow; 
}

clock(); // Initialize clock immediately on page load
setInterval(clock, 1000); // Update the clock every second (1000ms)
