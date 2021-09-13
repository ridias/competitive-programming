// Smallest multiple

/*
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple1To20(){
    let start = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10
    for(let i = start; ; i+=20){
        let stop = false
        for(let j = 1; j <= 20; j++){
            if(i % j !== 0){ 
                stop = true
                break
            }
        }
        if(!stop){
            return i
        }
    }
}

console.log(smallestMultiple1To20())