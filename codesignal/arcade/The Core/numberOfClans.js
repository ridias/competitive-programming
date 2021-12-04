function solution(divisors, k) {
    let map = {}
    
    for(let i = 1; i <= k; i++){
        let result = ""
        for(let j = 0; j < divisors.length; j++){
            if(i % divisors[j] == 0) result += divisors[j] 
        }
        
        map[result] == undefined ? map[result] = 1 : map[result] += 1
    }
    
    return Object.keys(map).length
    
    
}
