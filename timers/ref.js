/* Timer ref : Explicitly request program open if you called unref */

var fiveSecondsInterval = setInterval(function() {
  console.log("Message is printed with 5 seconds delay repeatedly till clearInterval.");
}, 5000);


// If you had previously unref()d a timer you can call ref() to explicitly request the timer hold the program open.


fiveSecondsInterval.unref();
fiveSecondsInterval.ref();
