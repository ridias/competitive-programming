function mostWanted(text: string): string {
    let map = {}
    let max = 0;
    let response = '';
    for(let i = 0; i < text.length; i++){
        let letter = text[i].toLowerCase()
        if(/[a-z]/.test(letter)){        
            map[letter] == undefined ? map[letter] = 1 : map[letter] += 1
            let numberOfAppearences = map[letter]
            
            if(numberOfAppearences > max){
                max = numberOfAppearences
                response = letter
            }else if(numberOfAppearences == max){
                response = letter.localeCompare(response) < 0 ? letter : response
            }
        }
    }
    return response;
}