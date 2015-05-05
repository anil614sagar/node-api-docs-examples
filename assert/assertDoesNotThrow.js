var assert = require('assert');

/* Assert - Library Used to write test cases in Node.js


/* Assert Doesn not Throw - Expects block not to throw an error */


assert.doesNotThrow(                        /* Doesn't throw exception - Since Expectation Met */
  function() {
    console.log("Nothing to see here");
  },
  Error
);

assert.doesNotThrow(                        /* throws exception - Since Expectation doesn't Met */
  function() {
    throw new Error("Wrong value");
  },
  Error
);
