/* setInterval : Repeated Execution of a function after delay of given milliseconds
                Returns an Object for further usage like clearInterval
                Optionally pass arguments */


var fiveSecondsInterval = setInterval(function() {
  console.log("Message is printed with 5 seconds delay repeatedly till clearInterval.");
}, 5000);

/* Example with Arguments */

var fiveSecondsIntervalArgs = setInterval(function(arg1) {
  console.log("%s Message is printed with 5 seconds delay repeatedly till clearInterval.", arg1);
}, 5000, 'Dear User : ');
