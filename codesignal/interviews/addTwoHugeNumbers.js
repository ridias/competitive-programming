// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, b) {
    let value1 = getHugeNumber(a)
    let value2 = getHugeNumber(b)
    value1.length > value2.length ? value2 = add0(value2, value1.length) : value1 = add0(value1, value2.length)
    let total = sumString(value1, value2)
    let result = []
    for(let i = total.length - 1; i >= 0; i -=4){
        result.unshift(parseInt(total.substring(i-3, i+1)))
    }
    
    return result
}

function getHugeNumber(a){
    let count = 0
    let value1 = ""
    while(a.next !== null){
        if(count == 0){ value1 += a.value.toString() } else { value1 += add0(a.value.toString(), 4) }
        count++
        a = a.next
    }
    if(a.next == null){
        if(count == 0){ value1 += a.value.toString() } else { value1 += add0(a.value.toString(), 4) }
    }
    return value1
}

function add0(numberString, number0){
    while(numberString.length < number0) numberString = "0" + numberString
    return numberString
}

function sumString(value1, value2){
    let carry = 0
    let result = ""
    let sum = 0
    for(let i = value1.length - 1; i >= 0; i--){
        sum = parseInt(value1.charAt(i)) + parseInt(value2.charAt(i)) + carry
        carry = Math.floor(sum / 10)
        result = (sum % 10).toString() + result
    }
    if(carry == 1) result = "1" + result
    return result
}
