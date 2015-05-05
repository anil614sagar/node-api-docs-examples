/* clearImmediate : clearImmediate.*/


var immediateOne = setImmediate(function() {
  console.log("Message is printed immediately.");
  immediateThree = setImmediate(function() {
    console.log("Third Message is never called .");
  });
});

var immediateTwo = setImmediate(function() {
  clearImmediate(immediateThree);
  console.log("Message is printed immediately too.");
});
