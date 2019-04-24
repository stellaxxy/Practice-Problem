/*
getPathParts: Given a full URL string, break it up into parts in an object For

example: 'http://localhost:8000/happy/go/lucky/file.html'
return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }
 */

function getPathParts(urlString){
    const urlArray = urlString.split('/');

    const urlObj = {};

    urlObj.protocol = urlArray[0].slice(0, urlArray[0].length - 1);
    const colonIndex = urlArray[2].indexOf(':');

    urlObj.host = urlArray[2].slice(0, colonIndex);
    urlObj.port = parseInt(urlArray[2].slice(colonIndex + 1));

    const pathArray = urlArray.slice(3, urlArray.length - 1);
    const pathString = pathArray.join('/');
    urlObj.path = "/" + pathString;
    urlObj.file = urlArray[urlArray.length - 1];
}