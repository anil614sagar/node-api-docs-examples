var assert = require('assert');

/* Tests value is truthy - Compares against true == !!value
   Parameters : value, message */

 assert(2, "Value is true"); /* Doesn't throw exception */

 assert(false, "Value should be true"); /* throws exception */
