var assert = require('assert');


/* Assert Equal - Checks for equality - "=="
   Parameters = Actual , Expected, Message
   Throws exception only if actual is not equal to expcted */

assert.equal(false, false, "They are equal"); /* Doesn't throw exception */

assert.equal(2, true, "2 != true : They are not equal"); /* throws exception */

assert.equal(2, 2, "They are equal"); /* Doesn't throw exception */

assert.equal(2, 4, "2 != 4 : They are not equal"); /* throws exception */
