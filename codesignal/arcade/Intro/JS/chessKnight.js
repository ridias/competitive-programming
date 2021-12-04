function chessKnight(cell) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
    let letter = cell.charAt(0)
    let number = parseInt(cell.charAt(1))
    let count = 0
    if(letters.indexOf(letter) + 1 < letters.length && number + 2 < 9){ count++ }
    if(letters.indexOf(letter) + 2 < letters.length && number + 1 < 9){ count++ }
    if(letters.indexOf(letter) - 2 >= 0 && number + 1 < 9){ count++ }
    if(letters.indexOf(letter) - 1 >= 0 && number + 2 < 9){ count++ }
    if(letters.indexOf(letter) + 1 < letters.length && number - 2 > 0){ count++ }
    if(letters.indexOf(letter) + 2 < letters.length && number - 1 > 0){ count++ }
    if(letters.indexOf(letter) - 1 >= 0 && number - 2 > 0){ count++ }
    if(letters.indexOf(letter) - 2 >= 0 && number - 1 > 0){ count++ }
    return count
}
