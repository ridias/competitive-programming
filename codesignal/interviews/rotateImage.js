function solution(a) {
    var res = [];
    for (var i =0 ;i<a.length;  i++){
        for (var j =0 ; j < a[i].length ; j ++){
            if(!res[j]) res[j] = [];
            res[j][a.length-1 - i] = a[i][j];
        }
    }
    return res;
}
