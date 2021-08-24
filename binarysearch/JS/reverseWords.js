//https://binarysearch.com/problems/Reverse-Words

class Solution {
    solve(sentence) {
        return sentence.split(' ').reverse().join(" ")
    }
}