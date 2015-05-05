var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js



/* Assert If Error -- Tests if value is not a false value, throws exception if it is a true value.
   Useful when testing the first argument, error in callbacks.*/


assert.ifError(false);  /* Doesn't throw exception */
assert.ifError(true);   /* throws exception */
assert.ifError(2);      /* throws exception */
