function solution(a, b) {
    let count = 0
    let stop = true
    let numberLetters = 0
    b = b.split("")
    while(stop){
        for(let i = 0; i < a.length; i++){
            let pos = b.indexOf(a[i])
            if(pos !== -1){ 
                numberLetters++
                b.splice(pos, 1)
                break; 
            } else { 
                stop = false; 
                break; 
            }
        }
        if(numberLetters == a.length){ count++ }
        if(b.length > 0){ stop = false}
    }
    console.log(count)
    
}
