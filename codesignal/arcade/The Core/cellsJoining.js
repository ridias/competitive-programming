solution = (t, d) => {
    
    f = z(t, d[0], 2)
    s = z(t, d[1], 1)
    
    for(i = f[0] - 1; i > s[0]; i--){
        
        for(j = f[1]; j <= s[1]; j++){
            if(t[i][j] == "+" && j == 0){
                t[i] = t[i].substring(0, j) + "|" + t[i].substring(j+1, t[i].length)
            }else if((t[i][j] == "-" || t[i][j] == "+" || t[i][j] == "|") && j > 0 && j != f[1]){
                t[i] = t[i].substring(0, j) + " " + t[i].substring(j+1, t[i].length)
            }
        }
        
        if(t[i][s[1] + 1] == "-"){
            j = s[1] + 1
            while(t[i][j] == "-" && j < t[i].length){
                t[i] = t[i].substring(0, j) + " " + t[i].substring(j+1, t[i].length)
                j++
            }
            if(j == t[i].length - 1) t[i] = t[i].substring(0, j) + "|" + t[i].substring(j+1, t[i].length)
        }
    }
    
    for(i = f[1] + 1; i <= s[1]; i++){
        if(f[0] + 1 < t.length){
            if(t[f[0] + 1][i] == " " && t[f[0]][i] == "+"){
                t[f[0]] = t[f[0]].substring(0, i) + "-" + t[f[0]].substring(i+1, t[f[0]].length)
            }
        }else if(f[0] - 1 >= 0){
            if(t[f[0] - 1][i] == " " && t[f[0]][i] == "+"){
                t[f[0]] = t[f[0]].substring(0, i) + "-" + t[f[0]].substring(i+1, t[f[0]].length)
            }
        }
    }
    
    for(i = f[1] + 1; i <= s[1]; i++){
        if(s[0] - 1 >= 0){
            if(t[s[0] - 1][i] == " " && t[s[0]][i] == "+"){
                t[s[0]] = t[s[0]].substring(0, i) + "-" + t[s[0]].substring(i+1, t[s[0]].length)
            }
        }else 
        if(s[0] + 1 < t.length){
            if(t[s[0] + 1][i] == " " && t[s[0]][i] == "+"){
                t[s[0]] = t[s[0]].substring(0, i) + "-" + t[s[0]].substring(i+1, t[s[0]].length)
            }
        }
    }
    
    return t
    
    
}

z = (t, d, a) => {
    y = 0
    x = 0
    c = 0
    for(i in t){
        if(t[i][0] == "+") c++
        if(c - a == d[0]){
            y = i
            break
        }
    }
    c = 0
    for(i in t[y]){
        if(t[y][i] == "+") c++
        if(c - 1 == d[1]){
            x = i
            break
        }
    }
    return [y * 1, x * 1]
}
