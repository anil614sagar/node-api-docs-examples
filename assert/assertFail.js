var assert = require('assert');

/* Throws exception saying it failed.
   Assert fail - Paramenters Actual , Expected, Message to Display, Operator.
   Always throws exception - No Matter what */

 assert.fail(3, 5, "It's not equal", "=");  /* throws exception */
 assert.fail(3, 3, "Even thought It's equal still throws, As", "="); /* throws exception - doens't check for truth */

/* Operator is used in exception message only if message is not present */

 assert.fail(3, 2, undefined, "=="); /* Throws Exception & prints message as 3 == 2 */
