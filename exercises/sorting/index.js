// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// BUBBLE SORT
function bubbleSort(arr) {
    for (let i=0; i<arr.length-1; i++){
        for (let j=0; j<arr.length-i-1; j++){
            if (arr[j]>arr[j+1]){
                let int = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = int
            }
        }
    }console.log(arr)
}
// TODO not done
function selectionSort(arr) {
    for (let i=0; arr.length-1; i++){
        for (let j=1; arr.length; j++){
            let int = arr[j]
        }
    }
}

function mergeSort(arr) {

}

function merge(left, right) {

}

selectionSort([1, 9, 3, 8, 2])
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
