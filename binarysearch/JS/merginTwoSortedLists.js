//https://binarysearch.com/problems/Merging-Two-Sorted-Lists

class Solution {
    solve(a, b) {
        
        for(let i = 0; i < a.length; i++){
            let pos = this.getPosInsertionSortedArray(b, a[i])
            b.splice(pos, 0, a[i])
        }

        return a
    }

    getPosInsertionSortedArray(arr, target){
        let left = 0;
        let right = arr.length - 1;
        let middle = -1

        while(left <= right){
            middle = Math.floor((left + right) / 2)
            if(arr[middle] == target){
                return middle
            }else if(arr[middle] < target){
                left = middle + 1
            }else{
                right = middle - 1
            }
        }

        if(arr[middle] == target) return middle
        return left
    }
}