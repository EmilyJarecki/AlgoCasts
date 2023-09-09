function oneAway(str){
    const arr = []
    for (let i=0; i<str.length; i++){
        arr.push(str[i])
        
    }
    console.log(arr)
    console.log(arr.splice(arr.length-1, 1))
    console.log(arr)
}

oneAway("pale")