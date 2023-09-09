// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.


function maxSubarray(arr){
    console.log(arr)
    for(let i=0; i<arr.length-1; i++){
        const sum = arr[i]+arr[i+1]
        console.log(sum)
        if (sum<0){
            arr.shift(arr[i])
        }
    }console.log(arr)
    
}
maxSubarray([-2,1,-3,4,-1,2,1,-5,4])