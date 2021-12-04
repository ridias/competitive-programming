function solution(letter) {
    var pattern = /(\w+)[\d\W]+\1\b/gi ;
    var matches = letter.match(pattern);
    if (matches) {
      return matches.length;
    }
    else {
      return 0;
    }
  }
  