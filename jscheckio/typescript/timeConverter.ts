function timeConverter(dayTime) {
    
    let timeSplitted = dayTime.split(":")
    
    let hoursToInt = parseInt(timeSplitted[0])
    let response = ""
    if(hoursToInt == 0){
        hoursToInt = 12
        response += hoursToInt.toString() + ":" + timeSplitted[1] + " a.m."
    }else if(hoursToInt > 12){
        response += (hoursToInt - 12).toString() + ":" + timeSplitted[1] + " p.m."
    }else if(hoursToInt == 12){
        response += hoursToInt.toString() + ":" + timeSplitted[1] + " p.m."
    }else{
        response += hoursToInt.toString() + ":" + timeSplitted[1] + " a.m."
    }
    
    return response;
}