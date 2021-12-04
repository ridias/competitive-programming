function solution(bishop, pawn) {
    let positions = []
    let positionBishop = bishop.split("")
    let letter = positionBishop[0].charCodeAt(0)
    let number = positionBishop[1]
    while(letter > 97 && number > 1){
        letter--
        number--
        positions.push("" + String.fromCharCode(letter) + number.toString())
    }

    letter = positionBishop[0].charCodeAt(0)
    number = positionBishop[1]
    while(letter > 97 && number < 8){
        letter--
        number++
        positions.push("" + String.fromCharCode(letter) + number.toString())
    }
    
    letter = positionBishop[0].charCodeAt(0)
    number = positionBishop[1]
    while(letter < 104 && number > 1){
        letter++
        number--
        positions.push("" + String.fromCharCode(letter) + number.toString())
    }
    
    letter = positionBishop[0].charCodeAt(0)
    number = positionBishop[1]
    while(letter < 104 && number < 8){
        letter++
        number++
        positions.push("" + String.fromCharCode(letter) + number.toString())
    }
    
    if(positions.includes(pawn)){ 
        return true
    }
    return false
}
