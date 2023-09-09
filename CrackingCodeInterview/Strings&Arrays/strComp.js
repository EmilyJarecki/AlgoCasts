function compression(str){
    compStr = ""
    for(let i =0; i<str.length; i++){
        if (str[i+1] == str[i]){
            console.log(str[i])
        }
    }

}

compression("aabcccccaaa")