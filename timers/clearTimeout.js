/* clearTimeout : Prevents a timeout from triggering. */


var fiveSecondsDelay = setTimeout(function() {
  console.log("Message is never prited since clearTimeout is called almost immediately.");
}, 5000);

console.log("Clearing fiveSecondsDelay timer...");

clearTimeout(fiveSecondsDelay);
