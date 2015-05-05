/* Url Format : Converts url parsed object into a string */

var url = require('url');

urlString = 'http://www.example.com/path?section=17';
urlObject = url.parse(urlString);


console.log(url.format(urlObject));
