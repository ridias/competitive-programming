class RangeSum {
    constructor(nums) {
        this.arr = nums.length == 0 ? [] : [nums[0]]
        for(let i = 1; i < nums.length; i++){
            this.arr.push(this.arr[i - 1] + nums[i])
        }
    }

    total(i, j) {
        if(i == 0) return this.arr[j - 1]
        return this.arr[j - 1] - this.arr[i - 1]
    }
}