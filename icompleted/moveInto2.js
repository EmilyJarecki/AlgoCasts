function moveArr(arr1, arr2, val){
    const removedArr = arr1.filter(num => num !== val)
    console.log(removedArr)
    const removedNum = arr1.filter(num => num == val)
    console.log(removedNum)
    const newArr = [...arr2,...removedNum]
    console.log(removedArr)
    console.log(newArr)
}


moveArr([1, 2, 3, 4, 4], [0, 3], 4);
