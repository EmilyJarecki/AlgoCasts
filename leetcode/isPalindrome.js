
//TODO coudl not do this on my own

let x = 12344321;

let isPalindrome = function (x) {
  if(x.toString().split("").reverse().join("") == x){
    return true
  }
  if(x.toString().split("").reverse().join("") != x){
    return false
  }


};

isPalindrome(x);
