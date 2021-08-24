// https://leetcode.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let set = new Set()
    let map = {}
    let arrLastValues = []
    let result = []
    for(let i = 0; i < arr2.length; i++){
        set.add(arr2[i])
    }
    
    for(let i = 0; i < arr1.length; i++){
        if(set.has(arr1[i])){
            map[arr1[i]] == undefined ? map[arr1[i]] = 1 : map[arr1[i]] += 1
        }else{
            arrLastValues.push(arr1[i])
        }
    }
    
    arrLastValues.sort((a, b) => a - b)
    
    for(let i = 0; i < arr2.length; i++){
        if(map[arr2[i]] != undefined){
            let times = map[arr2[i]]
            while(times > 0){
                result.push(arr2[i])
                times--
            }
        }
    }
    
    for(let i = 0; i < arrLastValues.length; i++){
        result.push(arrLastValues[i])
    }
    
    return result
};