function permInStr(str1, str2){
    let char = 0
    for (let i=0; i<str2.length; i++){
        for(let j=0; j<str1.length; j++){
            if (str2[i].includes(str1[j])){
                continue
            }
            
        }
    }
    if (str1.length == char){
        console.log("It's a perm")
    }
    else{
        console.log("It's not a perm")
    }
}
permInStr("ab", "beidaooo")

