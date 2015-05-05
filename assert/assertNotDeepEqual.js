var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js


/* Tests for not Deep Equality - Not Equality on Object values */

a = [1,2,3];            /* here a and b have equivalent contents, but do not */

b = [2,2,3];

assert.notDeepEqual(a, b);  /* Doesn't throw exception */

b = [1,2,3];
assert.notDeepEqual(a, b);  /* throws exception */
