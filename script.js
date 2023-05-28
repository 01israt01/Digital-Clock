function updateClock() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Add leading zeros if the values are less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    
    clock.innerHTML = formattedTime;
  }
  
  // Call the function initially to avoid delay
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  