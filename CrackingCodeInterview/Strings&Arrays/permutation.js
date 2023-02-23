// given two stings, write a method to decide if one is a permutation of the other

function permutation(str1, str2){
    let str1sort = str1.split("").sort()
    let str2sort = str2.split("").sort()
    if (str1sort == str2sort){
        return true
    }
    else {
        return false
    }
}
console.log(permutation("cat", "tac"))