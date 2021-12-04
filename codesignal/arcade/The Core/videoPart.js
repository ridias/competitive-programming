function solution(part, total) {
    let p1 = timestamp(part)
    let t1 = timestamp(total)
    var gcm = function(a, b){
        return b == 0 ? a : gcm(b, a % b);
    }
    
    var dnm = gcm(p1, t1)
    return [p1 / dnm, t1 / dnm]
}

function timestamp(time){
    let hours = parseInt(time.substring(0, 2))
    let minutes = parseInt(time.substring(3, 5))
    let seconds = parseInt(time.substring(6, time.length))
    return (60 * 60 * hours) + (minutes * 60) + seconds 
}
