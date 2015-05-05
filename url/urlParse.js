/* Url Parse : Converts url string into an object */

var url = require('url');

urlString = 'http://www.example.com/path?section=17';
console.dir(url.parse(urlString), {colors: true});
