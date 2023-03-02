// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// TODO COMPLETE IN LIKE 5 MINUTES HOO-RAHH

function reverse(str) {
    newStr = []
    for (let i=0; i<str.length; i++){
        newStr.unshift(str[i])
    }
    console.log(newStr.join(""))
}
reverse("hello")
module.exports = reverse;
