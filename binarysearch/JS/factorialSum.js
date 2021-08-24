//https://binarysearch.com/problems/Factorial-Sum

class Solution {
    solve(n) {
        let start = 1
        let facts = [start]

        while(facts[facts.length - 1] < n){
            facts.push(facts[facts.length - 1] * (facts.length + 1))
        }

        let left = facts.length - 1
        
        while(left >= 0 && n > 0){
            if(n >= facts[left]){
                n -= facts[left]
            }

            left--
        }

        return n == 0
    }
}