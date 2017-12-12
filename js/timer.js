var bigTime = 300; // time in seconds
var mode = "normal";
var animation = "fadeToBlack";

var color = "0D5B85";
var percent;
var timeOutCallback;
var mins;
var secs;

var countdownID;

// get all the elements
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");

// COUNTER ========================================================
function counter() {
  
  // calculate the minutes and seconds from bigTime
  mins = Math.floor(bigTime / 60);
  secs = bigTime - mins * 60;

  // change the HTML to show new minutes and seconds
  minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
  seconds.innerHTML = (secs < 10 ? '0' : '') + secs;
  
  // handle the animations
    var divisor = 300;
  
    percent = secs / divisor;
    // color = shadeColor(color, -percent);
    // document.body.style.background = "#" + color;
    divisor - 100;
  
  // switch modes if timer ends
  if (bigTime == 0) {
      // stop timer
      clearInterval(countdownID);
      timeOutCallback();
      
  } else {
    // decrement
    bigTime = bigTime - 1; 
  }
        
}

// ACTIONS =======================================================

// start timer
function startTimer() {
  // start timer
  countdownID = setInterval("counter()", 1000);
} 

// stop timer
function stopTimer() {
  // stop timer
  clearInterval(countdownID);
}

// reset timer
function resetTimer() {
  // reset big time
  bigTime = 300;
}

// ANIMATIONS ================================================ 
function fadeToBlack() {
  
}

function colorChange() {
  
}

// HELPER FUNCTIONS ============================================ 
function shadeColor(color, percent) {   
    var num = parseInt(color,16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
    return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
}