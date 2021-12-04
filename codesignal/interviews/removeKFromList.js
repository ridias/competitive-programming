// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, k) {
    let result = []
    let actual = l
    if(l === null){ return []}
    while(actual.next !== null){
        if(actual.value !== k){
            result.push(actual.value)
        }
        actual = actual.next
    }
    
    if(actual.value !== k){
        result.push(actual.value)
    }
    return result
}
