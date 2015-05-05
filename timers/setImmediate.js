/* setImmediate : To schedule the "immediate" execution of callback after I/O events callbacks and before setTimeout and setInterval .
                Returns an Object for further usage like clearTimeout
                Optionally pass arguments */


var immediateOne = setImmediate(function() {
  console.log("Message is printed immediately.");
  immediateThree = setImmediate(function() {
    console.log("Third Message is printed After second.");
  });
});

var immediateTwo = setImmediate(function() {
  console.log("Message is printed immediately too.");
});
