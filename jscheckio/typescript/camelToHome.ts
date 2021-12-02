function totalCost(a: string[]): number {
    let map = {}
    let cost = 0;
    if(a.length == 0) return cost
    
    let line = a[0].split(" ")
    for(let i = 0; i < a.length; i++){
        let datetime = line[0]
        let seconds = parseInt(line[2])
        map[datetime] == undefined ? map[datetime] = Math.ceil(seconds / 60) : map[datetime] += Math.ceil(seconds / 60)
        if(i + 1 < a.length){
            let nextLine = a[i+1].split(" ")
            if(map[nextLine[0]] == undefined){
                 let minutes = map[datetime]
                 minutes <= 100 ? cost += minutes : cost += 100 + ((minutes - 100) * 2)
            }
            
            line = nextLine;
        }else{
            let minutes = map[datetime]
            minutes <= 100 ? cost += minutes : cost += 100 + ((minutes - 100) * 2)
        }
    }
    
    return cost;
}