function solution(s, n) {
    var re = new RegExp(`(?:[0\\D]*(\\d+)\\D*){${n}}`);
    return re.exec(s)[1];
  }
  