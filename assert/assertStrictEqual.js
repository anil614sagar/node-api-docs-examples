var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js


/* Assert Strict Equal - Tests on === */

assert.equal('2', 2, "They are equal but not strict Equal"); /* Doesn't throw exception */
assert.strictEqual('2', 2, "They are not Strict equal"); /* throws exception */
