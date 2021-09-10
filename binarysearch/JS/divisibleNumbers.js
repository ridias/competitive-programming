// https://binarysearch.com/problems/Divisible-Numbers

class Solution {
    solve(n, a, b, c) {
        let set = new Set()
        let vals = [a,b,c].sort((d, e) => d - e)
        a = vals[0]
        b = vals[1]
        c = vals[2]

        let currentValueA = a
        let currentValueB = b
        let currentValueC = c


        let arr = [1]
        while(arr.length - 1 < n){

            if(currentValueA <= currentValueB && currentValueA <= currentValueC){
                if(!set.has(currentValueA)){
                    arr.push(currentValueA)
                    set.add(currentValueA)
                }

                currentValueA += a
            }else if(currentValueB <= currentValueA && currentValueB <= currentValueC){
                if(!set.has(currentValueB)){
                    arr.push(currentValueB)
                    set.add(currentValueB)
                }

                currentValueB += b
            }else if(currentValueC <= currentValueA && currentValueC <= currentValueB){
                if(!set.has(currentValueC)){
                    arr.push(currentValueC)
                    set.add(currentValueC)
                }
                currentValueC += c
            }
        }

        return arr[n]
    }
}