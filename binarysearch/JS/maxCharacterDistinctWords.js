// https://binarysearch.com/problems/Max-Character-Distinct-Words

class Solution {
    solve(words) {
        
        let max = 0
        words.sort((a, b) => b.length - a.length)
        
        for(let i = 0; i < words.length; i++){
            if(max > words[i].length + words[i + 1].length) break;
            let map = new Set()
            for(let j = 0; j < words[i].length; j++){
                map.add(words[i][j])
            }

            
            for(let j = i + 1; j < words.length; j++){
                let found = true
                for(let k = 0; k < words[j].length; k++){
                    if(map.has(words[j][k])){
                        found = false
                        break
                    }
                }


                if(found){
                    if(max < words[i].length + words[j].length){
                        max = words[i].length + words[j].length
                    }
                    break;
                }
            }
            
        }

        return max
    }
}