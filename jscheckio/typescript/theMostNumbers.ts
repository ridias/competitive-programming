function mostNumbers(...restNumbers: number[]): number {
    return restNumbers.length == 0 ? 0 : parseFloat((Math.max(...restNumbers) - Math.min(...restNumbers)).toFixed(3));
}