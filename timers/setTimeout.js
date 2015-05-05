/* setTimeout : One Time Execute a function after delay of given milliseconds
                Returns an Object for further usage like clearTimeout
                Optionally pass arguments */


var fiveSecondsDelay = setTimeout(function() {
  console.log("Message is printed with 5 seconds delay.");
}, 5000);

var fiveSecondsDelay = setTimeout(function(arg1) {
  console.log("%s Message is printed with 5 seconds delay.", arg1);
}, 5000, 'Dear User : ');
