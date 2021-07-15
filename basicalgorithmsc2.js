//Challence 2
function reverseString(str) {
    for (let reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  reverseString("hello");
