function solution(coins, price) {
    let numberOfCoins = 0
    let index = coins.length - 1
    while(price > 0){
        if(price >= coins[index]){
            price = price - coins[index]
            numberOfCoins++
        }else{
            index--
        }
    }
    
    return numberOfCoins
}
