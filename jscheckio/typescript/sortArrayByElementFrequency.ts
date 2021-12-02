function frequencySort(items: any[]): any[] {
    let map = {}
    let response = []
    let order = []
    for(let i = 0; i < items.length; i++){
        if(map[items[i]] == undefined){
            map[items[i]] = 1
            order.push(items[i])
        }else{
            map[items[i]] += 1
        }
        
    }
    
    order.sort((a, b) => map[a] == map[b] ? 0 : map[b] - map[a])
    for(let i = 0; i < order.length; i++){
        
        for(let times = map[order[i]]; times > 0; times--){
            response.push(order[i])
        }
    }
    
    return response;
}