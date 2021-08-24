// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    let result = []
    if(nums1.length > nums2.length){
        result = getValuesIntersection(nums2, nums1)
    }else{
        result = getValuesIntersection(nums1, nums2)
    }
    
    return result
};

function getValuesIntersection(arr1, arr2){
    
    let result = []
    let map = {}
    for(let pos = 0; pos < arr1.length; pos++){
        
        let value = arr1[pos]
        
        if(map[value] == undefined){
            let i = 0;
            let j = arr2.length - 1; 
            let middle = Math.floor((i + j) / 2)
            let find = false
            while(i <= j){
                middle = Math.floor((i + j) / 2)
                if(arr2[middle] == value){
                    result.push(value)
                    find = true
                    break;
                }else if(arr2[middle] < value){
                    i = middle + 1
                }else{
                    j = middle - 1
                }
            }
            
            if(arr2[middle] == value && !find) result.push(value)
            
            map[value] = 1
        }
    }
    
    return result
}