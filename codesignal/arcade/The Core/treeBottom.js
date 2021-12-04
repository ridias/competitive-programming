function solution(tree) {
    let left = 0
    let level = 0
    let treeLevels = {}
    for(let i = 0; i < tree.length; ){
        if(tree.charAt(i) === "("){
            left++
            level++
        }else if(tree.charAt(i) === ")"){
            left--
            level--
        }else if("0" <= tree.charAt(i) && "9" >= tree.charAt(i)){
            let number = ""
            for(let j = i; j < tree.length; j++){
                if(tree.charAt(j) === " "){ break } else { number += tree.charAt(j); i++}
            }
            treeLevels[level] === undefined ? treeLevels[level] = [parseInt(number)] : treeLevels[level].push(parseInt(number))
        }
        i++
    }
    
    let keys = Object.keys(treeLevels)
    return treeLevels[keys[keys.length - 1]]
}
