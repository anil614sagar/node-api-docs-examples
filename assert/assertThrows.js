var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js



/* Assert Throws - Expects block to throw an error */

assert.throws(                              /* Doesn't throw exception - Since Expectation Met */
  function() {
    throw new Error("Wrong value");
  },
  Error
);

assert.throws(                              /* throws exception - Since Expectation doesn't Met */
  function() {
    console.log("I am arrogant, I don't throw exception");
  },
  Error
);
