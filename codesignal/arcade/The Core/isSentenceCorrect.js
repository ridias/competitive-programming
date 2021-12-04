function solution(sentence) {
    var re = /^[A-Z]\W[!|.|?]{1}$/;
    return re.test(sentence);
  }
  