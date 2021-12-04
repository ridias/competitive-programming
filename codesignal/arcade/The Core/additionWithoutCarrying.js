function solution(param1, param2) {
    let finalIndex = null;
    let result = "";
    (param1 >= param2) ? finalIndex = param1.toString().length : finalIndex = param2.toString().length
    for(let i = 0; i < finalIndex; i++){
        result = (((param1 % 10) + (param2 % 10)) % 10).toString() + result
        param1 = Math.floor(param1 / 10)
        param2 = Math.floor(param2 / 10)
    }
    return parseInt(result)
}
