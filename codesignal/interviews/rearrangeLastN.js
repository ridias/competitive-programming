// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, n) {
    let result = []
    let i = n
    
    var rearrange = function(node, n){
        if(node){
            result[n] = node.value
            console.log(result)
            rearrange(node.next, n+1)
        }else{
            while(i > 0){
                console.log(result)
                result[i- 1] = result.pop()
                i--
            }
        }
    }
    
    rearrange(l, n)
    return result
}
