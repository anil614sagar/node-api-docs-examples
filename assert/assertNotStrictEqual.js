var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js


/* Asserts Strict Not Equal - Tests on !== */

assert.notStrictEqual('2', 2, "They are not Strict equal"); /* doesn't throw exception */
assert.notStrictEqual(2, 2, "They are Strict equal : Hence raise exception since we are checking for not strict equal"); /* throws exception */
