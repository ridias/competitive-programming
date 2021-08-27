// https://leetcode.com/problems/subdomain-visit-count/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    
    let map = {}
    
    for(let i = 0; i < cpdomains.length; i++){
        cpSplitted = cpdomains[i].split(" ")
        let domain = cpSplitted[1]
        let rep = cpSplitted[0]
        
        let sub = ""
        for(let j = domain.length - 1; j >= 0; j--){
            
            if(domain[j] == "."){
                map[sub] == undefined ? map[sub] = parseInt(rep) : map[sub] += parseInt(rep)
            }
            
            sub = domain[j] + sub
        }
        
        if(sub.length > 0){
            map[sub] == undefined ? map[sub] = parseInt(rep) : map[sub] += parseInt(rep)
        }
    }
    
    let keys = Object.keys(map)
    let result = []
    
    for(let i = 0; i < keys.length; i++){
        result.push(map[keys[i]] + " " + keys[i])
    }
    
    return result
    
};