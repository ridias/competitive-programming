function solution(array) {
    let i = 0
    let j = array.length - 1
    while(i < j){
        if(Math.abs(array[i]) > Math.abs(array[j])){
            array.splice(j + 1, 0, array[i] * array[i])
            array.splice(i, 1)
            j--
        }else{
            array[j] *= array[j]
            j--
        }
    }
    
    array[0] *= array[0]
    return array
}
