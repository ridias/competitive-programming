//https://binarysearch.com/problems/No-New-Friends

class Solution {
    solve(n, friends) {
        let hashSet = new Set();

        for(let i = 0; i < friends.length; i++){
            hashSet.add(friends[i][0])
            hashSet.add(friends[i][1])
        }

        let arr = [...hashSet].sort((a, b) => a - b)

        for(let i = 0; i < n; i++){

            let left = 0
            let right = arr.length - 1
            let middle = -1;
            let found = false
            while(left <= right){
                middle = Math.floor((right + left) / 2)
                if(arr[middle] == i){
                    found = true
                    break;
                }else if(arr[middle] < i){
                    left = middle + 1
                }else{
                    right = middle - 1
                }
            }

            if(!found) return false;
        }

        return true
    }
}