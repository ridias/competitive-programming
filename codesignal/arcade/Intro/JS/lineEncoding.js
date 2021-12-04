function lineEncoding(s) {
    let result = ""
    let i = 0
    while(i < s.length){
        let stillSameLetter = true
        let count = 1
        let letter = s.charAt(i)
        while(stillSameLetter && i < s.length){
            if(s.charAt(i + 1) === letter){ count++ } else { stillSameLetter = false }
            if(i === s.length - 1){ i++; }
            i++
        }
        if(count === 1){ result+= letter} else {result+= count.toString()+letter}
    }
    return result
}
