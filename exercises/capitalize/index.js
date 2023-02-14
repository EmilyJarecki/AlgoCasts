// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// TODO - I did not do this on my own 
function capitalize(str) {
    let str2 = str.split(" ")
    for(let i = 0; i < str2.length; i++){
        str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1)

    }
    const arr = str2.join(" ")
    console.log(arr)
}

capitalize("a lazy fox")


module.exports = capitalize;
