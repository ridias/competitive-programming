// https://binarysearch.com/problems/Detect-Voter-Fraud

class Solution {
    solve(votes) {
        let hashSet = new Set()

        for(let i = 0; i < votes.length; i++){
            if(hashSet.has(votes[i][1])){
                return true
            }else{
                hashSet.add(votes[i][1])
            }
        }

        return false
    }
}