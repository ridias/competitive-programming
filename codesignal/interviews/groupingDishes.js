function solution(dishes) {
    let ingredients = {}
    for(let i = 0; i < dishes.length; i++){
        for(let j = 1; j < dishes[i].length; j++){
            if(ingredients[dishes[i][j]] == undefined){
                ingredients[dishes[i][j]] = [dishes[i][0]]
            }else{
                ingredients[dishes[i][j]].push(dishes[i][0])
            }
        }
    }
    
    let result = []
    let keys = Object.keys(ingredients)
    keys = keys.sort((a, b)=>{
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })
    for(let i = 0; i < keys.length; i++){
        if(ingredients[keys[i]].length > 1){
            let miniResult = []
            for(let j = 0; j < ingredients[keys[i]].length; j++){
                miniResult.push(ingredients[keys[i]][j])
            }
            miniResult = miniResult.sort((a, b) =>{   
                if(a < b) return -1;
                if(a > b) return 1;
                return 0;
            })
            miniResult.unshift(keys[i])
            result.push(miniResult)
        }
    }
    return result
}
