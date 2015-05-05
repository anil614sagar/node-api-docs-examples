var assert = require('assert');

/* Tests value is truthy - Compares against true == !!value
   Parameters : value, message
   Same as just assert - Check assertTruthy.js */

  assert.ok(2, "Value is true"); /* Doesn't throw exception */

  assert.ok(false, "Value should be true"); /* throws exception */
