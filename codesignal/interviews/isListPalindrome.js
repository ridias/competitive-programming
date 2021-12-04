// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l) {
    let result = ""
    let actual = l
    if(l === null){ return true }
    while(actual.next !== null){
        let valueString = actual.value.toString().substring(0, 2)
        let first = valueString.charAt(0)
        '0' <= first && '9'>= first ? result += first : result += first
        actual = actual.next
    }
    valueString = actual.value.toString().substring(0, 2)
    first = valueString.charAt(0)
    '0' <= first && '9'>= first ? result += first : result += first
    let start = 0
    let end = result.length - 1
    while(start < end){
        if(result.charAt(start) !== result.charAt(end)){
            return false
        }
        start++
        end--
    }
    return true
}
