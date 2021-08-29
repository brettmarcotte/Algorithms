[9, 5, 7, 13, 19, 23, 4, 12, 15, 0]

function factorialize(num) {
    var array = [];
    var product;
    for (i = 0; i <= num; i++) {
        array.push(i);
        for (j = 0; j < array.length; j++) {
            product *= array[j];
        }
        return product;
    }
}
factorialize(i);

console.log("initial number: " + i + "factorial of initial number: " + i + "Remainder of factorial: " + )