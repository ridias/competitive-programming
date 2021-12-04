function solution(votes, k) {
    let max = Math.max(...votes)
    votes.splice(votes.indexOf(max), 1)
    if(k === 0 && votes.indexOf(max) !== -1){ return 0 }
    let count = 1
    for(let i in votes) if(votes[i] + k > max) count++
    return count
}
