function solution(grid) {
    return checkForDuplicates(grid)
  }
  
  const checkForDuplicates = function(grid) {
    let subGridLeft = {};
    let subGridMid = {};
    let subGridRight = {};
    for (let i = 0; i < grid.length; i++) {
      let rowElements = {};
      let columnElements = {};
      if (i%3 === 0) {
        subGridLeft = {};
        subGridMid = {};
        subGridRight = {};
      }
      for (let j = 0; j < grid.length; j++) {
        let isRowDuplicate = rowElements.hasOwnProperty(grid[i][j]) && grid[i][j] != '.';
        let isColumnDuplicate = columnElements.hasOwnProperty(grid[j][i]) && grid[j][i] != '.';
        
        if (j < 3) {
          let isLeftGridDuplicate = subGridLeft.hasOwnProperty(grid[i][j]) && grid[i][j] != '.';
          let isMidGridDuplicate = subGridMid.hasOwnProperty(grid[i][j+3]) && grid[i][j+3] != '.';
          let isRightGridDuplicate = subGridRight.hasOwnProperty(grid[i][j+6]) && grid[i][j+6] != '.';
  
          if (isLeftGridDuplicate || isMidGridDuplicate || isRightGridDuplicate) {
            return false;
          }
  
          subGridLeft[grid[i][j]] = grid[i][j];
          subGridMid[grid[i][j+3]] = grid[i][j+3];
          subGridRight[grid[i][j+6]] = grid[i][j+6];
        }
        
        
        if (isRowDuplicate || isColumnDuplicate) {
          return false;
        }
        rowElements[grid[i][j]] = grid[i][j];
        columnElements[grid[j][i]] = grid[j][i];
      }
    }
    
    return true;
  }
  