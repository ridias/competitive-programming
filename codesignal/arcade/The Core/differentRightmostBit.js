function solution(n, m) {
    return -~((~(n^m))^((~(n^m))+1)) / 2 ;
  }
  