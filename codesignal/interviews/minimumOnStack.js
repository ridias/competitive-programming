function solution(operations) {
    let stack = [parseInt(operations[0].split(" ")[1])]
    let min = [parseInt(operations[0].split(" ")[1])]
    let result = []
    for(let i = 1; i < operations.length; i++){
        if(operations[i] == "min"){
            result.push(min[min.length - 1])
        }else if(operations[i][1] == "o"){
            let value = stack.pop()
            if(min[min.length - 1] == value){
                min.pop()
            }
        }else{
            let value = parseInt(operations[i].split(" ")[1])
            stack.push(value)
            if(min[min.length - 1] >= value || min.length == 0){ min.push(value) }
        }
    }
    return result
}
