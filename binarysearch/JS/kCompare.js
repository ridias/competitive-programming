//https://binarysearch.com/problems/K-Compare

class Solution {
    solve(a, b, k) {
        a.sort((c, d) => c - d)
        b.sort((c, d) => c - d)
        let count = 0

        for(let i = 0; i < a.length; i++){
            let val = a[i]
            let pos = this.getPosInsertionInSortedArray(b, val)
            
            while(b[pos] == val){
                pos++
            }

            if(b.length - pos >= k) count++
        }

        return count
    }

    getPosInsertionInSortedArray(arr, target){

        let left = 0
        let right = arr.length - 1
        let middle = -1

        while(left <= right){
            middle = Math.floor((right + left) / 2)
            if(arr[middle] == target){
                return middle
            }else if(arr[middle] < target){
                left = middle + 1
            }else{
                right = middle - 1
            }
        }

        return left
    }
}