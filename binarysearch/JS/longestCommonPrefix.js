// https://binarysearch.com/problems/Longest-Common-Prefix

class Solution {
    solve(words) {
        
        let map = {}
        let max = 0
        let result = ""

        if(words.length == 0) return result

        let firstLetter = words[0][0]
        let firstWord = words[0]
        let word = ""

        for(let i = 0; i < firstWord.length; i++){
            word += firstWord[i]
            map[word] == undefined ? map[word] = 1 : map[word] += 1
        }

        for(let i = 1; i < words.length; i++){
            let word = ""
            if(words[i][0] != firstLetter) return ""
            for(let j = 0; j < words[i].length; j++){
                word += words[i][j]
                if(map[word] == undefined) break;

                map[word] += 1
                if(map[word] >= max){
                    max = map[word]
                    result = word
                }
            }
        }

        return result
    }
}