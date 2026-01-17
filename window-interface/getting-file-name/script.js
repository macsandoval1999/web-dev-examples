// get the current file name from the URL
const fileName = window.location.pathname.split("/").pop(); // split the ppathname by "/". split() returns an array of substrings. pop() gets the last element of the array, which is the file name.

console.log(fileName); // log the current path of the URL to the console