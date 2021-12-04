function solution(number, width) {
    number = number.toString()
    if(number.length > width){
        return number.substring(number.length - width, number.length)
    }else{
        for(let i = number.length; i < width; i++){
            number = "0" + number.substring(0, number.length)
        }
        return number
    }
}
