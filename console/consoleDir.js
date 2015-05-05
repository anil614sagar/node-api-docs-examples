/* Console Dir : Same as console.log but used to print information about objects.
                  Optional options provides great flexibility wile printing objects. */

var personObj = {};
personObj.name = "Anil";
personObj.siblings = {};
personObj.siblings.count = 2;
personObj.fullname = function(firstname, lastname) {};


console.dir(personObj);
console.dir(personObj, {colors: true});
console.dir(personObj, {depth: 0});
console.dir(personObj, {showHidden: true});
console.dir([1,2,3], {colors: true});
