var coins = [100, 20, 10, 5, 1]
var money = readline()
var totalCoins = 0;
var pos = 0
while(money > 0){
    if(money >= coins[pos]){
        numCoins = Math.floor(money / coins[pos])
        money -= (numCoins * coins[pos])
        totalCoins += numCoins
    }else{
        pos++
    }
}

print(totalCoins)