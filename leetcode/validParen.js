//TODO not my work. try again

//this defines an OBJECT
const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
     
var isValid = function(s) {
    
    //GETTING RIDE OF BAD CASES SO THAT WE DON'T HAVE TO USE TIME COMPLEXITY TO FIGURE IT OUT WHEN WE CAN DO IT EARLY
    // check if length is an odd number. if it is, return false
    // if there is an odd number, it means that at least one bracket is missing a pair
    if (s.length % 2 === 1) return false
    
    //GETTING RIDE OF BAD CASES SO THAT WE DON'T HAVE TO USE TIME COMPLEXITY TO FIGURE IT OUT WHEN WE CAN DO IT EARLY
    // if the first element is a closing bracket, it doesn't matter what follows
    // it will never have a pair
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
    
    //GETTING RIDE OF BAD CASES SO THAT WE DON'T HAVE TO USE TIME COMPLEXITY TO FIGURE IT OUT WHEN WE CAN DO IT EARLY
    // same goes for last element, we are just dealing with opening bracket
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
    

    //used to keep track of the opening brackets that have not yet been matched with closing brackets
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        // if it's an opening bracket, push into stack
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])

        // else, assume it's closing bracket and check if it matches anything
        //stack.pop() retrieves the last character (an opening bracket) from the stck array
        //else if pairs[ "(" ] (which is ")" )does not equal the value of s[i] which is ")" at the moment 
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
        
    }
    return true
    
};

console.log(isValid("()"))