/* Timer Unref : TODO: More Examples Needed */

var fiveSecondsInterval = setInterval(function() {
  console.log("Message is printed with 5 seconds delay repeatedly till clearInterval.");
}, 5000);

var twoSecondsInterval = setInterval(function() {
  console.log("Message is printed with 2 seconds delay repeatedly till clearInterval.");
}, 2000);


// Doesnot remove the timer fiveSeconds Interval since its not the only timer running we also have twoSecondsInterval

// DOIT : If you comment twoSecondsInterval, fiveSecondsInterval will be cleared since it's the the only timer running.

fiveSecondsInterval.unref();
