function depositProfit(deposit, rate, threshold) {
    let count = 0
    while (deposit < threshold){
        deposit = deposit + ((deposit * rate) / 100)
        count++
    }
    return count
}
