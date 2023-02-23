// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// COMPLETED SUCCESSFULLY ON MY OWN

function vowels(str) {
    let vowels = 0
    const str1 = str.toLowerCase().split("")
    for (let i=0; i<str1.length; i++){
        if (
            str1[i] === "a" ||
            str1[i] === "e" ||
            str1[i] === "i" ||
            str1[i] === "o" ||
            str1[i] === "u"
        ){
           vowels++
        }
    }
    console.log(vowels)
}

vowels("Why hello there")


module.exports = vowels;
