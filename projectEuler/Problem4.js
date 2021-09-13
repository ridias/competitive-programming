// Largest palindrome product

/*
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindromeProduct3digits(){
    let max = 0
    for(let i = 900; i <= 999; i++){
        for(let j = 900; j <= 999; j++){
            if(isPalindrome(i * j) && max < i * j){
                max = i * j
            }
        }
    }
    return max
}

function isPalindrome(number){
    number = "" + number
    let i = 0;
    let j = number.length - 1
    while(i < j){
        if(number[i] !== number[j]){ return false }
        i++
        j--
    }
    return true
}

console.log(largestPalindromeProduct3digits())