function solution(a) {
    let r = []
    let positions = []
    for(let i = 0; i < a.length - 1; i++){
        
        if(positions.length > 0){
            if(positions[0] > a[i] && i < positions[0]){
                r.push(a[positions[0]])
                continue
            }
            if(positions[0] < i){ positions.shift() }
        }
        
        for(let j = i+1; j < a.length; j++){
            if(a[i] < a[j]){
                positions.splice(getPos(positions, j), 0, 1)
                r.push(a[j])
                break
            }else if(j + 1 == a.length){
                r.push(-1)
            }
        }
    }
    r.push(-1)
    return r
}

function getPos(a, n){
    let l = 0
    let r = a.length - 1
    while(l + 1 < r){
        let m = l + Math.floor((r - l) / 2)
        if(a[m] == n) return m
        else if(a[m] > n) r = m
        else l = m
    }
    
    if(a[r] < n) return r + 1
    else if(a[l] >= n) return l
    else return r
}