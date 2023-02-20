function integerToRoman(num){
    const valuesObj = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    console.log(valuesObj["D"])
    if (num<4) {
        console.log("III")
    }
}

integerToRoman(3)