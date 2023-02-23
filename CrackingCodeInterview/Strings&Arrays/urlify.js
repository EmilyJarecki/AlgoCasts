// replace all spaces with a %20
function URLify(str){
    console.log(str.trim().replaceAll(" ", "%20"))

}
URLify("Mr John Smith       ")