// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]

function getConcatenation(nums){
    console.log([...nums, ...nums])
}

getConcatenation([1,2,1])