// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// TODO I did not complete this by myself

function anagrams(stringA, stringB) {
  let rep = stringA.toLowerCase().replaceAll("!", "").replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("?", "").replaceAll(";", "")
  let splitStr = rep.split("").sort()
  let rep2 = stringB.toLowerCase().replaceAll("!", "").replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("?", "").replaceAll(";", "")
  let splitStr2 = rep2.split("").sort()
  if (splitStr.join("") === splitStr2.join("")){
    console.log("it's an anagram")
  }
  else{
    console.log("it's not")
  }
}

anagrams("RAIL! SAFfETY.!", "fairy tales");

module.exports = anagrams;
