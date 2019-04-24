/*
getPath: given a path string, return an array with the different parts of the path for

example: 'folder1/folder2/folder3'
returns ['folder1','folder2','folder3']
 */

function getPath(pathString) {
    return pathString.split('/');
}