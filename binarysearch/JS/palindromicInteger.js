//https://binarysearch.com/problems/Palindromic-Integer

class Solution {
    solve(num) {
        if(num < 10) return true
        let arr = []

        while(num > 0){
            arr.push(num % 10)
            num = Math.floor(num / 10)
        }

        let left = 0
        let right = arr.length - 1
        while(left < right){
            if(arr[left] != arr[right]) return false
            left++
            right--
        }

        return true
    }
}