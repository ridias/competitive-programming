function evenDigitsOnly(n) {
    while(n !== 0){
        if((n % 10) % 2 != 0){ return false}
        n = Math.floor(n / 10)
    }
    return true
}
