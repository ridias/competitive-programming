function solution(bishop1, bishop2) {
    
    let l1 = bishop1[0].charCodeAt(0) - 97
    let l2 = bishop2[0].charCodeAt(0) - 97
    
    let n1 = parseInt(bishop1[1]) - 1
    let n2 = parseInt(bishop2[1]) - 1
    
    if(Math.abs(l1 - l2) != Math.abs(n1 - n2)) {
        return [bishop1, bishop2].sort((a, b) => a.localeCompare(b))
    }
    
    if(l1 > l2 || n1 < n2){
        tmp = l1
        l1 = l2
        l2 = tmp
        tmp = n1
        n1 = n2
        n2 = tmp
    }
    
    if(l1 < l2 && n1 > n2){
        while(l1 > 0 && n1 < 7){
            l1--
            n1++
        }
        
        while(l2 < 7 && n2 > 0){
            l2++
            n2--
        }
    }else{
        while(l2 < 7 && n2 < 7){
            l2++
            n2++
        }
        
        while(l1 > 0 && n1 > 0){
            l1--
            n1--
        }
    }
    
    return [String.fromCharCode(l1 + 97) + (n1+1), String.fromCharCode(l2 + 97) + (n2+1)].sort((a, b) => a.localeCompare(b))
    
    
    
}
