class Solution {
    solve(sentence) {
        return sentence.join("").split(" ").reverse().join(" ").split("")
    }
}