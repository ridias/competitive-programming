function absoluteSorting(values: number[]): number[] {
    return values.sort((a, b) => Math.abs(a) - Math.abs(b))
}