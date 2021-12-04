function solution(canvas, rectangle) {
    canvas[rectangle[1]][rectangle[0]] = "*"
    canvas[rectangle[3]][rectangle[0]] = "*"
    canvas[rectangle[1]][rectangle[2]] = "*"
    canvas[rectangle[3]][rectangle[2]] = "*"
    
    for(let col = rectangle[0] + 1; col < rectangle[2]; col++){
        canvas[rectangle[1]][col] = "-"
        canvas[rectangle[3]][col] = "-"
    }
    
    for(let row = rectangle[1] + 1; row < rectangle[3]; row++){
        canvas[row][rectangle[0]] = "|"
        canvas[row][rectangle[2]] = "|"
    }
    return canvas
}
