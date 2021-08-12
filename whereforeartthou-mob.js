function whatIsInAName(collection, source) {
    var arr = [];
    
    collection.foreach( testObj => {

        console.log(testObj)
    } )
    for (let i = 0; i < collection.length; i++) {
        const testObj = collection[i];
        
        //console.log(testObj)

        let passedTest = true; 

        //check each of the sources key/value pairs
        //if the object does not have both the keys and value then fail them
        if (testObj != source) {
            passedTest = false;
        }
        //if passedTest is still true, push it to the arr variable
        if (passedTest == true) {
            arr.push(testObj)
        }

    }
 
    return arr;

  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})


  let obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
  }

  console.log( Object.keys( obj ) );

  //Objects.values()
  //Objects.entries()

function whatIsInAName(collection, source) {

    const sourceKeysLen = Object.keys(source).length
    for (let i = 0; i < collection.length; i++) {

        let matchingPairs = 0;

        //count the matching pairs

        //test if matching is equal to sourceKeyLen,
        if (matchingPairs == sourceKeyLen) {
            
        }
    }
    return passedObjects
}