function solution(s) {
    for(let ans = 1; ans < s.length + 1; ans++){
        let founded = true
        for(let j = 0; j < s.length; j++){
            if(s.charAt(j) !== s.charAt(j % ans)){
                founded = false
                break
            }
        }
        if(founded) return ans
    }
}
