var assert = require('assert');


/* Assert Not Equal - Checks for not equality - "!="
   Parameters = Actual , Expected, Message
   Throws exception only if actual is equal to expcted */

assert.notEqual(false, false, "They are equal - Hence throwing exception"); /* throws exception */

assert.notEqual(2, true, "2 != true : They are not equal"); /* doesn't exception */

assert.notEqual(2, 2, "They are equal- Hence throwing exception"); /* throws exception */

assert.notEqual(2, 4, "2 != 4 : They are not equal"); /* doesn't throw exception */
