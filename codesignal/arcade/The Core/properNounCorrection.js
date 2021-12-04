function solution(noun) {
    noun = noun.toLowerCase()
    return noun.charAt(0).toUpperCase() + noun.substr(1, noun.length)
}
