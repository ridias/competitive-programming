function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height = 0
    let days = 0
    while(height < desiredHeight){
        height += upSpeed
        if(height >= desiredHeight){ days++; break; }
        height -= downSpeed
        days++
    }
    
    return days
}
