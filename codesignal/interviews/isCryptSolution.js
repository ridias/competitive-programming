function solution(crypt, solution) {
 
    let obj = solution.reduce((res, item, i) => {
        res[item[0]]= item[1];
        return res;
    }, {})

    let checkFl = false;
    
    function checkForLeading (s) {
        return s.length > 1 && parseFloat(s) < Math.pow(10, s.length - 1);
    }
    let wordsToNumbers = crypt.map((item) => {
        let word = item.split('').map(l => obj[l]);
        let n = word.join('');
        if (checkFl != true) checkFl = checkForLeading(n);
        return parseFloat(n);
    })

    if (!checkFl) {
        return wordsToNumbers[0] + wordsToNumbers[1] == wordsToNumbers[2]
    } else {
        return false;
    }
    
}
