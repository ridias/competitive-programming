function solution(s, arr) {
    let i = 0, j = 0
    let result = 0
    let positions = []
    while(i < arr.length){
        if(j < arr.length){ result += arr[j]}
        
        while(result > s){
            result -= arr[i]
            i++
        }
        if(result === s){
            let aux = result
            for(let k = j+1; k < arr.length; k++){
                aux += arr[k]
                if(aux > s){ positions.push([i+1, j+ Math.abs(k - j)]); break }
            }
            if(result === s && j+1 === arr.length){positions.push([i+1, j+1])}
        }
        
        if(j < arr.length){ j++ }
        if(j == arr.length){ result -= arr[i]; i++ }
    }
    
    if(positions.length === 0){ return [-1] }
    else{
        let max = -1
        for(let i = 0; i < positions.length; i++){
            if(max < positions[i][1] - positions[i][0]){
                max = positions[i][1] - positions[i][0]
                result = positions[i] 
            }
        }
        return result
    }
}
