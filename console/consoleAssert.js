/* Console Assert : Similar to assert.ok(), but the error message is formatted as util.format(message...). */

var assert = require('assert');

console.assert(false, "Value %s %d", 'hello' , 1);

//assert.ok(false, 'Value %s', 'hello'); /* This cannot replace %s with string. But above one does.
