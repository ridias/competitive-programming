// https://binarysearch.com/problems/Selling-Products

class Solution {
    solve(items, n) {
        
        let map = {}

        for(let i = 0; i < items.length; i++){
            map[items[i]] == undefined ? map[items[i]] = 1 : map[items[i]] += 1
        }

        let arr = []
        let keys = Object.keys(map)

        for(let i = 0; i < keys.length; i++){
            arr.push([keys[i], map[keys[i]]])
        }

        arr.sort((a, b) => a[1] - b[1])

        let count = 0

        for(let i = 0; i < arr.length; i++){
            if(n - arr[i][1] < 0){
                count++
            }else{
                n -= arr[i][1]
            }
        }

        return count
    }
}