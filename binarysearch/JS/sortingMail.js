// https://binarysearch.com/problems/Sorting-Mail

class Solution {
    solve(mailboxes) {
        let roundRobbin = []

        for(let col = 0; mailboxes.length > 0; col++){
            for(let row = 0; row < mailboxes.length; row++){
                if(mailboxes[row].length > col){
                    if(mailboxes[row][col] != "junk") roundRobbin.push(mailboxes[row][col])
                }

                if(mailboxes[row].length <= col){
                    mailboxes.splice(row, 1)
                    row--
                }
            }
        }

        return roundRobbin
    }
}