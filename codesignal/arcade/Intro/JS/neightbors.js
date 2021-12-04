function neightbors(matrix, x, y) {
    var n = 0;
    for(var _x = Math.max(0, x - 1); _x <= Math.min(x + 1, matrix.length - 1); _x ++) {
        for(var _y = Math.max(0, y - 1); _y <= Math.min(y + 1, matrix[_x].length - 1); _y ++) {
            if(matrix[_x][_y] && !(x == _x && y == _y)) {
                n ++;
            }
        }
    }
    return n;
}
function minesweeper(matrix) {
    var result = [];
    for(var x = 0; x < matrix.length; x ++) {
        result[x] = [];
        for(var y = 0; y < matrix[x].length; y ++) {
            result[x][y] = neightbors(matrix, x, y);
        }
    }
    return result;
}  
