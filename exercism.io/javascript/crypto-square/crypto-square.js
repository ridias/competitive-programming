//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  
    constructor(text) {
        this.textToCipher = text;
    }
  
    get ciphertext() {
      return this.encrypt()
    }
  
    encrypt(){
      let text = this.textToCipher;
      text = text.replace(/[\W _]+/g, "").toLowerCase();
      let row = Math.floor(Math.sqrt(text.length))
      let col = Math.floor(Math.sqrt(text.length))
  
      while(row * col < text.length){
        if(row * (col + 1) >= text.length){
          col++;
        }else{
          col++;
          row++;
        }
      }
  
      let arr = new Array(row).fill("")
  
      for(let i = 0; i < text.length; i++){
        let pos = i % row
        arr[pos] += text[i]
      }
  
      for(let i = 0; i < arr.length; i++){
        while(arr[i].length < col){
          arr[i] += " "
        }
      }
      
      return arr.join(" ")
    }
  }
  
  