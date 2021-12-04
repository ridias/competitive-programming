function solution(letter) {
    var pattern = /(\w+)[\d\W]+\1\b/g;
    var matches = letter.match(pattern);
    if (matches) {
      return matches.length;
    }
    else {
      return 0;
    }
  }
  