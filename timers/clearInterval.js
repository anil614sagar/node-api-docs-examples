/* clearInterval : Stops an interval from triggering. */



var fiveSecondsInterval = setInterval(function() {
  console.log("Message is printed with 5 seconds delay repeatedly till clearInterval.");
}, 5000);

var elevenSecondsDelay = setTimeout(function() {
  console.log("Clearing 5 seconds interval..");
  clearInterval(fiveSecondsInterval);
}, 11000);
