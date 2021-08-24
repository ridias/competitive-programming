// https://leetcode.com/problems/slowest-key/

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let letter = keysPressed[0]
    let maxDuration = releaseTimes[0]
    
    for(let i = 1; i < releaseTimes.length; i++){
        let diff = releaseTimes[i] - releaseTimes[i-1]
        if(maxDuration < diff){
            letter = keysPressed[i]
            maxDuration = diff
        }else if(maxDuration == diff && keysPressed[i] > letter){
            letter = keysPressed[i]
        }
    }
    
    return letter
};