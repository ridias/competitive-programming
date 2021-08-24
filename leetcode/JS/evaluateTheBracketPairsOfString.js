// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
 var evaluate = function(s, knowledge) {
    let map = {}
    
    for(let i = 0; i < knowledge.length; i++){
        if(map[knowledge[i][0]] == undefined){
            map[knowledge[i][0]] = knowledge[i][1]
        }
    }
    
    let res = ""
    let word = ""
    let isWord = false
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            isWord = true
        }else if(s[i] == ")"){
            isWord = false
            if(map[word] != undefined){
                res += map[word]
            }else{
                res += "?"
            }
            word = ""
        }else if(isWord){
            word += s[i]
        }else if(!isWord){
            res += s[i]
        }
    }
    
    return res
};