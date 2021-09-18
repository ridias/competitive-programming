// https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    let allPaths = []
    let path = [0]
    dfs(graph, 0, path, allPaths)
    return allPaths
};

var dfs = function(graph, currentIndex, path, result){
    if(currentIndex == graph.length - 1){
        result.push([...path])
    }else{
        for(let i = 0; i < graph[currentIndex].length; i++){
            path.push(graph[currentIndex][i])
            dfs(graph, graph[currentIndex][i], path, result)
            path.pop()
        }   
    }
    
}