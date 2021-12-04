function solution(cell) {
    let movements = [[2,-1], [1, -2], [2, 1], [1, 2], [-2, -1], [-1, -2], [-2, 1], [-1, 2]]
    let letter = Math.abs('a'.charCodeAt(0) - cell.charAt(0).charCodeAt(0)) + 1
    let num = parseInt(cell.charAt(1))
    let count = 0
    
    for(let i = 0; i < movements.length; i++){
        if(letter + movements[i][1] > 0 && letter + movements[i][1] < 9 && num + movements[i][0] > 0 && num + movements[i][0] < 9){
            count++
        }
    }
    return count
}
