// https://binarysearch.com/problems/Break-String-Into-Words

class Solution {

    solve(words, s) {
        let map = {}
        let result = this.recursion(words, s, map)
        if(map[""] != undefined) return true
        return false
    }


    recursion(words, word, map){
        if(word == ""){
            return true
        }

        if(map[word] != undefined){
            return map[word]
        }

        for(let i = 0; i < words.length; i++){
            if(word.indexOf(words[i]) == 0){
                let remain = word.substring(words[i].length, word.length)
                const res = this.recursion(words, remain, map);
                map[remain] = res                
            }
        }

        return false
    }
}