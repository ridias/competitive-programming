// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, k) {
    if(k === 1){ return l}
    let count = 0
    let result = ""
    let finalResult = ""
    while(l.next !== null){
        if(count < k){
            result += l.value.toString() + ','
            count++
        }
        
        if(count == k){
            result = result.split(",")
            result.pop()
            finalResult += result.reverse().join(",") + ','
            result = ""
            count = 0
        }
        l = l.next
    }
    count++
    if(count < k){
        finalResult += result + ',' + l.value
    }else if(count == k){
        result = result.split(",")
        result.pop()
        result = l.value.toString() + ',' +result.reverse().join(",") 
        finalResult += result
    }
    finalResult = finalResult.split(",")
    
    let i = 0
    while(i < finalResult.length){
        if(finalResult[i].length !== 0){
            finalResult[i] = parseInt(finalResult[i])
            i++
        }else{
            finalResult.splice(i, 1)
        }
    }
    return finalResult
}
