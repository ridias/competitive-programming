function betweenMarkers2(text: string, begin: string, end: string): string {
    let beginPos = -1;
    let endPos = -1;
    let firstPosFind = false;
    let secondPosFind = false;
    
    for(let i = 0; i < text.length; i++){
        if(begin[0] == text[i] && !firstPosFind){
            if(begin == text.substring(i, i + begin.length)){
                beginPos = i;
                firstPosFind = true;
            }
        }
        
        if(end[0] == text[i] && !secondPosFind){
            if(end == text.substring(i, i + end.length)){
                endPos = i;
                secondPosFind = true;
            }
        }
    }

    if((beginPos == -1 && endPos == -1)) return text
    if((beginPos >= endPos && beginPos > -1 && endPos > -1)) return ""
    if(beginPos == -1) return text.substring(0, endPos)
    if(endPos == -1) return text.substring(beginPos + begin.length, text.length)
    return text.substring(beginPos + begin.length, endPos);
}