function solution(a) {
    let hashMap = {}
    let start = 0
    let end = a.length - 1
    while(start < end){
        if(a[start] === a[end]){ return true}
        if(hashMap[a[start]] === undefined){hashMap[a[start]] = 1} else { return true }
        if(hashMap[a[end]] === undefined){ hashMap[a[end]] = 1} else{ return true }
        start++
        end--
    }
    return false
}
