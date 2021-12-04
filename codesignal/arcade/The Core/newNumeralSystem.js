function solution(number) {
    let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let pos = letters.indexOf(number)
    if(pos === 0){ return ["A + A"] }
    let index = 0;
    let array = []
    while(index <= pos){
        array.push(letters[index] + " + " + letters[pos])
        index++; 
        pos--;
    }
    return array
}
