// fint first and last index of character 

function position(arr, num){
    numArr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num) {
            numArr.push(i)
        }
    }
    console.log(numArr[0])
    console.log(numArr[numArr.length-1])
}

position([1, 2, 3, 4, 4, 5, 4, 1], 4)

// answer should be 3 and 6