function splitStr(value, arg) {
    let str = []
  
    for (let i = 0; i < value.length; i++) {
      if (value.slice(i, i + arg.length) == arg) {
        str.push(value.slice(0, i)) // pushing into empty array sty and trying to find the value to find a space in the value.
        value = value.slice(i + arg.length) //could also put in value.length
        console.log(i, value)
        i = 0
      } 
  
    }
    str.push(value) //push in whatever is left over 
    console.log(str, value)
  }
  
  splitStr("I'm a little tea pot", "a" )