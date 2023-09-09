function palinperm(str){
    arrStr = str.toLowerCase().replace(" ", "").split("")
    characters = {}
    
    // THIS DETERMINES IF IT IS A PALINDROME
    for(let i = 0; i < arrStr.length; i++){
        if(str[i] != str[str.length - i - 1]){
            console.log("It's not a palindrome")
            break
        }
        else{
            console.log("It is!")
            break
        }
    }
    // how to determine it's potential? 
}

palinperm("abs")