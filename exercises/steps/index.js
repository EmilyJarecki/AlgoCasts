// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// TODO i don't understand this at all
function steps(n) {
  for (let step = 0; step < n; step++) {
    // console.log("#");
    let stair = "";

    for (let level = 0; level < n; level++) {
      if (level <= step) {
        stair += "#";
      } else {
        stair += " ";    
        

      }
    }console.log(stair);

  }
}
steps(4);

module.exports = steps;
