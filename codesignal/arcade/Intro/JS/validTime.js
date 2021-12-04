function validTime(time) {
    time = time.split(":")
    if(parseInt(time[0]) < 0 || parseInt(time[0]) > 23){ return false }
    if(parseInt(time[1]) < 0 || parseInt(time[1]) > 59){ return false }
    return true
}
