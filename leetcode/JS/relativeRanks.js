// https://leetcode.com/problems/relative-ranks/

/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
    
    
    let scoreSorted = []
    for(let i = 0; i < score.length; i++){
        scoreSorted.push([score[i], i])
    }
    
    scoreSorted.sort((a, b) => b[0] - a[0])
    
    for(let i = 0; i < scoreSorted.length; i++){
        let index = scoreSorted[i][1]
        if(i % 3 == 0 && i == 0){
            score[index] = "Gold Medal"
        }else if(i % 3 == 1 && i == 1){
            score[index] = "Silver Medal"
        }else if(i % 3 == 2 && i == 2){
            score[index] = "Bronze Medal"
        }else{
            score[index] = (i + 1).toString()
        }
    }
    
    return score
};