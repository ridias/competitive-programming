// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l1, l2) {
    let result = []
    result = getValues(l1, result)
    result = getValues(l2, result)
    return result.sort((a, b) =>{ return a -b})
}

function getValues(l1, result){
    if(l1 === null){ return result }
    while(l1.next !== null){
        result.push(l1.value)
        l1 = l1.next
    }
    if(l1.next === null){
        result.push(l1.value)
    }
    return result
}
