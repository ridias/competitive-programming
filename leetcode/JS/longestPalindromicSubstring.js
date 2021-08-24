//https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length == 0) return ""
    let res = s[0]
    let map = {}
    let positions = []
    let max = 1
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] == undefined){
            map[s[i]] = [i]
        }else{
            map[s[i]].push(i)
        }
    }

    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++){
        
        let arr = map[keys[i]]
        
        if(arr.length > 1){
            if(arr[arr.length - 1] - arr[0] + 1 > max){
                for(let j = 0; j < arr.length; j++){
                    for(let k = arr.length - 1; k >= 0; k--){
                        let isPalindrome = true
                        let left = arr[j]
                        let right = arr[k]
                        while(left < right){
                            if(s[left] != s[right]){
                                isPalindrome = false
                                break;
                            }

                            left++
                            right--
                        }

                        if(isPalindrome){
                            if(max < arr[k] - arr[j] + 1){
                                max = arr[k] - arr[j] + 1
                                res = s.substring(arr[j], arr[k] + 1)
                            }
                            break;
                        }      
                    }
                }
            }
        }
    }

    return res
};