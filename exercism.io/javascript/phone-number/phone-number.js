//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (num) => {
  num = num.replace(/[\(\)\+\.\- ]/g, "")
  
  if(/[A-Za-z]+/.test(num)){
    throw new Error("Letters not permitted");
  }else if(/[\W_]+/.test(num)){
    throw new Error("Punctuations not permitted");
  }else if(num.length > 11){
    throw new Error("More than 11 digits");
  }else if(num.length < 10){
    throw new Error("Incorrect number of digits");
  }else if(num.length == 11 && num[0] != 1){
    throw new Error("11 digits must start with 1")
  }

  if(num.length == 11 && num[0] == "1"){
    num = num.substring(1);
  }

  let firstDigit = num[0]
  let fourthDigit = num[3]
  if(firstDigit == "0"){
    throw new Error("Area code cannot start with zero");
  }else if(firstDigit == "1"){
    throw new Error("Area code cannot start with one");
  }else if(fourthDigit == "0"){
    throw new Error("Exchange code cannot start with zero");
  }else if(fourthDigit == "1"){
    throw new Error("Exchange code cannot start with one");
  }

  return num;
};
