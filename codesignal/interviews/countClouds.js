function solution(skyMap) {
    let count = 0
    
    const paint = (i, j) => {
        if(i < skyMap.length && i >= 0 && j < skyMap[i].length && j >= 0){
            if(skyMap[i][j] == "0"){
                return ;
            }else{
                skyMap[i][j] = "0"
                paint(i,j+1)
                paint(i,j-1)
                paint(i+1,j)
                paint(i-1,j)
            }
        }
    }
    
    for(let i = 0; i < skyMap.length; i++){
        for(let j = 0; j < skyMap[i].length; j++){
            if(skyMap[i][j] == "1"){
                paint(i, j)
                count++
            }
        }
    }
    
    return count
}
