//Challenge 1
function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  convertToF(30);
  
//Challence 2
function reverseString(str) {
    for (let reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  reverseString("hello");

//Challenge 3 
function factorialize(num) {
    for (let product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);

//Challenge 4
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Challenge 5 
function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Challenge 6
function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("He has to give me a new name", "name");

//Challenge 7
function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

//Challenge 8 
function truncateString(str, num) {
    if(str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
   
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Challenge 9 
function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);

//Challenge 10
function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  booWho(null);

//Challenge 11
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");

//Challenge 12
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Challenge 13
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
  bouncer([7, "ate", "", false, 9]);

//Challenge 14
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
  }
  getIndexToIns([40, 60], 50);

//Challenge 15
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  mutation(["hello", "hey"]);

//Challenge 16
function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);