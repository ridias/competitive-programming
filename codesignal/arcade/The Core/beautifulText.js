function solution(inputString, l, r) {

    if(inputString.length == 0) return true

    inputString = inputString.split(" ");

    let lengths = []
    let sum = 0
    for(let i = 0; i < inputString.length - 1; i++){
        sum += inputString[i].length
        if(l <= sum && sum <= r) lengths.push(sum)
        sum += 1
    }

    sum += inputString[inputString.length - 1].length
    if(l <= sum && sum <= r) lengths.push(sum)

    console.log(lengths)

    for(let i = 0; i < lengths.length; i++){
        sum = 0
        size = lengths[i]
        beautiful = true
        for(let j = 0; j < inputString.length; j++){
            sum += inputString[j].length; 
            if(sum > size){
                beautiful = false
                break
            }else if(sum == size){
                sum = 0
            }else{
                sum++
            }
        }

        if((sum < size || sum > size) && sum > 0) beautiful = false;

        if(beautiful) return true
    }

    return false

    console.log(lengths)
    
}
