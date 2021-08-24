//https://binarysearch.com/problems/123-Number-Flip

class Solution {
    solve(n) {
        n = n.toString()

        for(let i = 0; i < n.length; i++){
            if(n[i] == "1" || n[i] == "2"){
                n = n.substring(0, i) + "3" + n.substring(i + 1, n.length)
                break;
            }
        }

        return parseInt(n)
    }
}