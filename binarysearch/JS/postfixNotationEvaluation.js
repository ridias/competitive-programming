class Solution {
    solve(exp) {
        let result = -1
        let stackNums = []

        for(let i = 0; i < exp.length; i++){
            if(/[0-9]+/.test(exp[i])){
                stackNums.push(exp[i])
            }else{
                let num2 = parseInt(stackNums.pop())
                let num1 = parseInt(stackNums.pop())
                if(exp[i] == "+"){
                    result = num1 + num2
                }else if(exp[i] == "-"){
                    result = num1 - num2
                }else if(exp[i] == "*"){
                    result = num1 * num2
                }else{
                    result = num1 / num2 < 0 ? Math.ceil(num1 / num2) : Math.floor(num1 / num2)
                }

                stackNums.push(result)
            }
        }

        return parseInt(stackNums[stackNums.length - 1])
    }
}