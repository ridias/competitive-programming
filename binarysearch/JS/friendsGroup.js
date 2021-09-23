// https://binarysearch.com/problems/Friend-Groups

class Solution {
    solve(friends) {
        let count = 0
        let visited = {}
        let queue = []

        for(let i = 0; i < friends.length; i++){

            if(visited[i] == undefined){
                let queue = [i]
                visited[i] = 1
                count++
                while(queue.length > 0){
                    
                    let index = queue.shift()

                    for(let j = 0; j < friends[index].length; j++){
                        if(!visited[friends[index][j]]){
                            queue.push(friends[index][j])
                            visited[friends[index][j]] = 1
                        }
                    }

                }
            }
        }

        return count
    }
}