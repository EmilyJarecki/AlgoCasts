// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// TODO completed very easily
function reverseInt(n) {
    console.log(n)
    console.log(n.toString())
    const strNum = n.toString()
    arr = []
    for (let i=0; i<strNum.length; i++){
        arr.unshift(strNum[i])
    }
    if (arr[arr.length-1] == "-"){
        arr.pop()
        arr.unshift("-")
    }    
    revertToNum = parseInt(arr.join(""))
    console.log(revertToNum)
}
reverseInt(-15)

module.exports = reverseInt;
