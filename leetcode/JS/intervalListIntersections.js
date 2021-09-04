// https://leetcode.com/problems/interval-list-intersections/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    if(firstList.length == 0 || secondList.length == 0) return []
    
    let i = 0
    let j = 0
    let result = []
    
    while(i < firstList.length && j < secondList.length){
        let leftRange = firstList[i][0]
        let rightRange = firstList[i][1]
        let leftRange2 = secondList[j][0]
        let rightRange2 = secondList[j][1]
        let range = []
        
        if(leftRange <= leftRange2 && leftRange2 <= rightRange){
            range[0] = leftRange2
        }else if(leftRange2 <= leftRange && leftRange <= rightRange2){
            range[0] = leftRange
        }
        
        if(leftRange <= rightRange2 && rightRange2 <= rightRange){
            range[1] = rightRange2
        }else if(leftRange2 <= rightRange && rightRange <= rightRange2){
            range[1] = rightRange
        }
        
        if(range.length == 2){
            result.push(range)
        }
        
        let isSet = false;
        
        if(i + 1 < firstList.length){
            if((leftRange2 <= firstList[i + 1][0] && firstList[i + 1][0] <= rightRange2) ||
                (leftRange2 <= firstList[i + 1][1] && firstList[i + 1][1] <= rightRange2) || 
                (firstList[i + 1][0] <= leftRange2 || firstList[i + 1][1] <= leftRange2)){
                i++;
                isSet = true
            }
        }
        
        if(j + 1 < secondList.length){
            if((leftRange <= secondList[j + 1][0] && secondList[j + 1][0] <= rightRange) ||
                (leftRange <= secondList[j + 1][1] && secondList[j + 1][1] <= rightRange) || 
                (secondList[j + 1][1] <= leftRange || secondList[j + 1][0] <= leftRange)){
                j++
                isSet = true
            }
        }
        
        if(!isSet){
            i++
            j++
        }
        
    }
    
    return result
};