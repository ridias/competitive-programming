function solution(ver1, ver2) {
    if(ver1 === ver2){ return false }
    let ver1Split = ver1.split(".")
    let ver2Split = ver2.split(".")
    for(let i in ver1Split){
        if(parseInt(ver1Split[i]) < parseInt(ver2Split[i])){ return false; break; }
        if(parseInt(ver1Split[i]) > parseInt(ver2Split[i])){ return true; break; }
    }   
    return true
}
