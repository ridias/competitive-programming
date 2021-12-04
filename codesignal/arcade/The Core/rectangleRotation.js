function solution(a, b) {
    a = Math.ceil(a / Math.sqrt(2))
    b = Math.ceil(b / Math.sqrt(2))
    return (b * a + (a - 1) * (b - 1)) - ((b + a) % 2 > 0)
}
