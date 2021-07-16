//Challenge 3 
function factorialize(num) {
    for (let product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);
