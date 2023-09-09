
let lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");

    //when you split it, it immeditely turns into an array
    console.log(arr) //=> [ 'hello', 'World' ]
    console.log(arr[arr.length-1].length)
};

lengthOfLastWord("hello World")