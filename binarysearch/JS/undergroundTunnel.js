// https://binarysearch.com/problems/Underground-Tunnel

class UndergroundTunnel {
    constructor() {
        this.users = {}
        this.pairs = {}
    }

    checkIn(userId, station, timestamp) {
        this.users[userId] = [station, timestamp]
    }

    checkOut(userId, station, timestamp) {
        let checkIn = this.users[userId];
        let stationCheckin = checkIn[0];
        let time = checkIn[1]

        let key = stationCheckin + ";" + station;
        if(this.pairs[key] == undefined){
            this.pairs[key] = [timestamp - time, 1]
        }else{
            this.pairs[key][0] += (timestamp - time)
            this.pairs[key][1] += 1
        }
    }

    averageTime(start, end) {
        if(this.pairs[start + ";" + end]){
            return this.pairs[start + ";" + end][0] / this.pairs[start + ";" + end][1]
        }

        return 0
    }
}
