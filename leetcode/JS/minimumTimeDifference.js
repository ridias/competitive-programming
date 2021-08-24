// https://leetcode.com/problems/minimum-time-difference/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference = function(timePoints) {
    let minimum = Infinity
    timePoints.sort((a, b) => a.localeCompare(b))
    let first = getMinutesFromTime(timePoints[0])
    let second = getMinutesFromTime(timePoints[timePoints.length - 1])
    let minutes = Math.min(Math.abs(second + 1440 - first), Math.abs(second - first))
    minutes = Math.min(Math.abs(first + 1440 - second), minutes)
    minutes = Math.min(Math.abs(first - second), minutes)
    if(minutes < minimum) minimum = minutes
    
    for(let i = 1; i < timePoints.length; i++){
        first = getMinutesFromTime(timePoints[i - 1])
        second = getMinutesFromTime(timePoints[i])
        minutes = Math.min(Math.abs(second + 1440 - first), Math.abs(second - first))
        minutes = Math.min(Math.abs(first + 1440 - second), minutes)
        minutes = Math.min(Math.abs(first - second), minutes)
        if(minutes < minimum) minimum = minutes
    }
    
    return minimum
};

function getMinutesFromTime(time){
    let timeSplitted = time.split(':')
    if(timeSplitted.length >= 2)
        return parseInt(timeSplitted[0]) * 60 + parseInt(timeSplitted[1])
    
    return -1
    
}