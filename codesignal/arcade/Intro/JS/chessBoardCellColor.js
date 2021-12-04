function chessBoardCellColor(cell1, cell2) {
    return (isBlackCell(cell1) === isBlackCell(cell2))
}

function isBlackCell(cell){
    let letter = cell.charAt(0).charCodeAt(0)
    let number = cell.charAt(1)
    if(letter % 2 === 1 && number % 2 === 1){ return true }
    if(letter % 2 === 0 && number % 2 === 0){ return true }
    return false
}
