
function solution(m) {
    let circles = [], pos = 0
    
    if(m.length == 1) return [change2(m[0], 0)]
    if(m[0].length == 1){ 
        let arr = []
        for(let i = 0; i < m.length; i++) arr.push(m[i][0])
        arr = change2(arr, 0)
        for(let i in arr) m[i][0] = arr[i]
        return m
    }
    
    while(pos < Math.floor(m.length / 2)){
        let arr = [], arr2 = [], arr3 = [], arr4 = []
        for(let i = pos; i < m[0].length - pos; i++){
            arr.push([m[pos][i], [pos, i]])
            arr2.push([m[m.length - 1 - pos][m[0].length - 1 - i], [m.length - 1 - pos, m[0].length - 1 - i]])
        }
        
        for(let i = pos+1; i < m.length - 1 - pos; i++){
            arr3.push([m[m.length - 1 - i][pos], [m.length - 1 - i, pos]])
            arr4.push([m[i][m[0].length - 1 - pos], [i, m[0].length - 1 - pos]])
        }
        
        circles.push(change(arr.concat(arr4.concat(arr2.concat(arr3))), pos))
        pos++   
        arr = []
        if(m.length - pos - pos == 1 && pos < m[0].length - pos){
            for(let i = pos; i < m[0].length - pos; i++) arr.push([m[pos][i], [pos, i]])
            circles.push(change(arr, pos))
            break
        }else if(m[0].length - pos - pos == 1 && pos < m.length - pos){
            for(let i = pos; i < m.length - pos; i++) arr.push([m[i][pos], [i, pos]])
            circles.push(change(arr, pos))
            break
        }
    }
    
    for(let i in circles){
        for(let j in circles[i]){
            m[circles[i][j][1][0]][circles[i][j][1][1]] = circles[i][j][0]
        }
    }
    return m
}

function change(arr, pos){
    if(arr.length == 0){ return [] }
    if(pos % 2 == 0){
        let tmp = arr[arr.length - 1][0]
        for(let i = arr.length - 2; i >= 0; i--) arr[i + 1][0] = arr[i][0]
        arr[0][0] = tmp
    }else{
        let tmp = arr[0][0]
        for(let i = 1; i < arr.length; i++){ arr[i-1][0] = arr[i][0]; console.log(arr[i-1][0]) } 
        arr[arr.length - 1][0] = tmp
    }
    return arr
}

function change2(arr, pos){
    pos % 2 == 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift())
    return arr
}

