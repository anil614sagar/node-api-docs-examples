/* Url Resolve : Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag.  */

var url = require('url');

console.log(url.resolve('/one/two/three', 'four'));         // '/one/two/four'

console.log(url.resolve('http://example.com/', '/one'));    // 'http://example.com/one'

console.log(url.resolve('http://example.com/one', '/two')); // 'http://example.com/two'
