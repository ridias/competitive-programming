function replaceFirst(values: number[]): number[] {
    if(values.length < 2) return values;
    let tmp: number = values.shift();
    values.push(tmp)
    return values;
}