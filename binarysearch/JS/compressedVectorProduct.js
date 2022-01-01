// https://binarysearch.com/problems/Compressed-Vector-Product

class Solution {
    solve(a, b) {
        
        let i = 0
        let j = 0
        let sum = 0

        while(i < a.length && j < b.length){

            if(a[i] == b[j]){
                sum += (a[i + 1] * b[j + 1] * a[i])
                i += 2
                j += 2
            }else if(a[i] < b[j]){
                sum += (a[i + 1] * b[j + 1] * a[i])
                b[j] -= a[i]
                i += 2
            }else{
                sum += (a[i + 1] * b[j + 1] * b[j])
                a[i] -= b[j]
                j += 2
            }
        }

        return sum
    }
}
