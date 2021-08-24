// https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * Initialize your data structure here.
 */

 var TrieNode = function(){
    this.keys = new Array(26).fill(null)
    this.endWord = false
}

TrieNode.prototype.put = function(letter){
    let charPos = letter.charCodeAt() - 97
    this.keys[charPos] = new TrieNode()
}

TrieNode.prototype.get = function(letter){
    return this.keys[letter.charCodeAt() - 97]
}

TrieNode.prototype.containsKey = function(letter){
    return this.keys[letter.charCodeAt() - 97] != null
}

TrieNode.prototype.setEndWord = function(){
    this.endWord = true;
}

TrieNode.prototype.isEndWord = function(){
    return this.endWord
}


var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    let headRoot = this.root
    for(let i = 0; i < word.length; i++){
        let letter = word[i]
        if(headRoot.containsKey(letter)){
            headRoot = headRoot.get(letter)
        }else{
            headRoot.put(letter)
            headRoot = headRoot.get(letter)
        }
    }
    
    headRoot.setEndWord()
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let headRoot = this.root
    for(let i = 0; i < word.length; i++){
        let letter = word[i]
        if(headRoot.containsKey(letter)){
            headRoot = headRoot.get(letter)
        }else{
            return false
        }
    }
    
    if(headRoot.isEndWord()) return true
    return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let headRoot = this.root
    for(let i = 0; i < prefix.length; i++){
        let letter = prefix[i]
        if(headRoot.containsKey(letter)){
            headRoot = headRoot.get(letter)
        }else{
            return false
        }
    }
    
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */