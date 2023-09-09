// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
    }
    return arr;
};