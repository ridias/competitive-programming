function betweenMarkers(line: string, left: string, right: string): string {
    let posI: number = 0;
    let posJ: number = line.length - 1
    while(posI < line.length && line[posI] != left) posI++
    while(posI < posJ && line[posJ] != right) posJ--
    
    return line.substring(posI + 1, posJ)
}