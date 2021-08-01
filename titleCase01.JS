function titleCase(str) {
    let newStr = str.toLowerCase()
    
    for (let i = 0; i < newStr.length; i++) {
     newStr[i] = newStr[i][0].slice(0, 1).toUpperCase() + newStr[i].slice(1)
    }
    return newStr;
  }
  
  console.log(titleCase("I'm a little tea pot"));
/* section1: Split 
Split takes a string data-type and splits it up into an array defined by the argument given. 
Split is a non-destructive method(This means it does not alter the str data where the method is called from).
*/

/* Section 2: Join
Join takes the array created by .split and brings it together. (Any sub-string created will be brought together into one string).

*/

 

// while (value.indexOf(arg) != -1) {
      
// }