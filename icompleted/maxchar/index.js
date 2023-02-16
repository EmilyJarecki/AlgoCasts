// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// TODO this I did not do on my own

function maxChar(str) {
    str = str.split("")
    max = 0
    maxChar = ""
    characters = {}
    // console.log(str.length)
    for (let i=0; i<str.length; i++){
        if (characters[str[i]]){
            characters[str[i]]++
        }
        else {
            characters[str[i]] = 1
        }
        characters[str[i]] 
        // console.log([str[i]])
    }
// THIS IS THE PART I COULDN"T SOLVE!!!!!!!!!!!!
    for (let char in charMap) {
        if (charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
        }
      }    
}
maxChar("abcccccccddd")


module.exports = maxChar;



// adding properties to object

// obj.key3 = "value3";
// OR
// obj["key3"] = "value3";



// Notes:
// The JavaScript "for in" statement loops through the properties of an Object!
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
// => John Doe 25

// OR ARRAY
const numbers = [45, 4, 9, 16, 25];

let text = "";
for (let x in numbers) {
  text += numbers[x] + ", "; 
}
// => 45, 4, 9, 16, 25

