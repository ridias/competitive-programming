function solution(statues) {
    return Math.max(...statues) - Math.min(...statues) - (statues.length - 2 + 1)
}
