// DID BY MYSELF

function smallestEvenMultiple(n){
    for(let i=1; i<n; i++){
        if ((n*i)%2==0){
            console.log(n*i)
            return
        }
    }

}
smallestEvenMultiple(5)