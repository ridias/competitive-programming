// https://binarysearch.com/problems/Stack-Sequence

class Solution {
    solve(pushes, pops) {

        let stack = []
        while(pushes.length > 0 && pops.length > 0){

            stack.push(pushes.shift())

            if(pops[0] == stack[stack.length - 1]){
                while(stack.length > 0 && pops.length > 0){
                    if(stack[stack.length - 1] == pops[0]){
                        stack.pop()
                        pops.shift()
                    }else{
                        break;
                    }
                }
            }
        }

        return pops.length == 0
        
    }
}