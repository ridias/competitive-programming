function solution(s) {
    for (var x = 0; x < s.length; x++) {
        if (s.indexOf(s.charAt(x)) === s.lastIndexOf(s.charAt(x))) {
            return s.charAt(x)
        }
    }
    return '_'
}
