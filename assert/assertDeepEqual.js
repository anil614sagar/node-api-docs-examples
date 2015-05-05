var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js


/* Tests for Deep Equality - Equality on Object values */

a = [1,2,3];            /* here a and b have equivalent contents, but do not */
b = [1,2,3];            /* refer to the same Array object.*/


assert.deepEqual(a, b)  /* This passes, as while a and b are not the */
                        /* same object, they are still arrays containing 1, 2, 3 */

assert.equal(a, b);     /* Fails & throws exception since a, b are different object*/
