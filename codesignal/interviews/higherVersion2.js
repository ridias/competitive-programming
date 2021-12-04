function solution(ver1, ver2) {
    ver1 = ver1.split(".")
    ver2 = ver2.split(".")
    for(let i = 0; i < ver1.length; i++){
        if(parseInt(ver1[i]) > parseInt(ver2[i])){
            return 1
        }else if(parseInt(ver1[i]) < parseInt(ver2[i])){
            return -1
        }else{
            continue
        }
    }
    return 0
}
