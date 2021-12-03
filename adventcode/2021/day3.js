const fs = require('fs')

try {
    const data = fs.readFileSync(__dirname + "/input1.txt", 'utf8').split("\r\n")
    
    let numMostCommon = 0
    let numLeastCommon = 0
    let acc = 0
    let col = data[0].length - 1

    while(col >= 0){
        let countDigitOne = 0
        let countDigitZero = 0
        for(let row = 0; row < data.length; row++){
            data[row][col] == "0" ? countDigitZero += 1 : countDigitOne += 1
        }

        if(countDigitOne > countDigitZero){
            numMostCommon = numMostCommon + (2 ** acc)
        }else{
            numLeastCommon = numLeastCommon + (2 ** acc)
        }

        acc++
        col--
    }

    console.log("First part: " + (numMostCommon * numLeastCommon))

    col = 0
    let arrWithOnes = []
    let arrWithZeros = []

    for(let i = 0; i < data.length; i++){
        data[i][0] == "0" ? arrWithZeros.push(data[i]) : arrWithOnes.push(data[i])
    }

    let num1 = reduceBy(arrWithOnes.length > arrWithZeros.length ? arrWithOnes : arrWithZeros, "most")
    let num2 = reduceBy(arrWithOnes.length < arrWithZeros.length ? arrWithOnes : arrWithZeros, "least")
    
    console.log("Second part: " + (num1 * num2))
} catch (err) {
    console.error(err)
}

function reduceBy(arr, type){

    let col = 1
    let maxLength = arr.length > 0 ? arr[0].length : 0

    while(col < maxLength && arr.length > 1){
        let countOnes = 0
        let countZeros = 0
        let cacheZeros = []
        let cacheOnes = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i][col] == "0"){
                countZeros += 1
                cacheZeros.push(arr[i])
            }else{
                countOnes += 1
                cacheOnes.push(arr[i])
            } 
        }

        if(countZeros == countOnes && type == "least"){
            arr = [...cacheZeros]
        }else if(countZeros == countOnes && type == "most"){
            arr = [...cacheOnes]
        }

        if(countZeros > countOnes && type == "most"){
            arr = [...cacheZeros]
        }else if(countZeros < countOnes && type == "most"){
            arr = [...cacheOnes]
        }else if(countZeros > countOnes && type == "least"){
            arr = [...cacheOnes]
        }else if(countZeros < countOnes && type == "least"){
            arr = [...cacheZeros]
        }

        col++
    }

    return parseInt(arr[0], 2)
}