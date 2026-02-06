/* 
CALLBACK AFTER A SCRIPT LOAD
========================================================================
The outer function here is `loadScript` and it does the following:
    1.Create a function `loadScript` that takes a `src` and a `callback`. 
    2. Create a script element
    3. Set its `src` attribute to the provided `src`.
    4. Set the `onload` event of the script to call the `callback` with the script element.
    5. Append the script to the document head. 
The callback function is called once the script is loaded. It receives the script element as an argument, and does the following:
    1. Alerts that the script is loaded.
    2. Alerts the `_` function declared in the loaded script.
*/
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script); //The onload event basically executes a function after the script is loaded and executed.
    document.head.append(script);
}
/*
Heres the function in action. The order of execution is as follows:
    1. The `loadScript` function is called with the URL of the script and a callback function.
    2. The script element is created and its `src` attribute is set.
    3. The script element is appended to the document head.
    4. Once the script is loaded, the callback function is called with the script element.
    5. The callback function alerts that the script is loaded and alerts the `_` function declared in the loaded script.
*/
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_); // _ is a function declared in the loaded script
});
// NOTES: This is called a “callback-based” style of asynchronous programming. A function that does something asynchronously should provide a callback argument where we put the function to run after it’s complete.



/*
CALLBACK IN A CALLBACK
============================================
Here we use the same function from above. This is called “callback hell” or “pyramid of doom” because of the nested structure.
The nested structure of callbacks can become hard to read and maintain, especially when you have multiple asynchronous operations that depend on each other.
Heres the order of execution:
    1. The `loadScript` function is called with the URL of the script and a callback function.
    2. The script element is created and its `src` attribute is set.
    3. The script element is appended to the document head.
    4. Once the script is loaded, the callback function is called with the script element.
    5. The callback function calls `loadScript` again for the next script, creating a nested structure.
*/
loadScript('/my/script.js', function (script) {
    loadScript('/my/script2.js', function (script) {
        loadScript('/my/script3.js', function (script) {
            // ...continue after all scripts are loaded
        });
    });
});