function solution(picture) {
    for(let i = 0; i < picture.length; i++){
        picture[i] = "*" + picture[i] + "*"
    }
    
    let startEndStars = ""
    for(let i = 0; i < picture[0].length; i++){
        startEndStars+= "*"
    }
    picture.unshift(startEndStars)
    picture.push(startEndStars)
    return picture
}
