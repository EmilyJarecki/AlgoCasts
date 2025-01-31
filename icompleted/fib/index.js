// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    const seq = [0, 1]
    for(let i=0; i<n-1; i++){
        let nextNum = seq[i] + seq[i+1]
        seq.push(nextNum)
    }
    console.log(seq[n])
}

fib(4)

module.exports = fib;
