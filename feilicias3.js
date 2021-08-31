var fruitNames = ["Apples", "Oranges", "Grapes", "mango"]
var fruitType = [
    ["Granny Smith", "Golden", "Macintosh"],
    ["Navel", "clementine", "Mandarin"],
    ["red", "concord", "moon drops"]
]
var fruitPrices = [
    [2, 3, 3],
    [3, 2, 3],
    [1, 2, 1]
]
var salesQuantity = [
        [30, 35, 28],
        [41, 39, 40],
        [28, 29, 27]
    ]
    /* 

    fruitNames is a one dimentional array of strings
    fruitTypes is a two dimentional array of strings
    fruitPrices is a two dimentional array of numbers
    salesQuantity is a two dimentional array of numbers

    */

// Apples, Granny Smith, 60 
// Apples, Golden, 105
// Apples, Macintosh, 84
console.log(fruitNames.length)

function fruitTotal() {
    for (var i = 0; i < fruitNames.length; i = i + 1) {

    }

}


{
    for (var i = 0; i < fruitNames.length; i++) {
        for (var j = 0; j < fruitNames.length; j++)
            var profit = (fruitPrices[i][j] * salesQuantity[i][j])
        console.log(`${fruitNames[i][j]}, ${fruitType} : ${profit}`)
    }

}
total(apples, types, profit)


//output total number of fruits sold
function fruitSold() {
    for (var i = o; i < salesQuantity.length; i++) {
        for (var j = 0; j < salesQuantity.length; j++) {
            var total = salesQuantity[i][j] * fruitPrice[i][j]
        }
    }
    console.log(`we sold $(salesQuantity[i][j]) $(fruitNames[i]) $(fruitTypes[i][j]) for $(total)`)
}

//output the total profit of all fruit
function fruitProfits() {
    for (var i = 0; i < fruitPrice.length; i++) {
        for (var j = 0; j < fruitPrice.length; j++)
            totalProfit = fruitcost[i][j] * salesQuantity[i][j]
    }
    console.log(`$(fruitNames) $(fruitType)`)
}


//output fruit names
function fruitName() {
    for (var i = 0; i = fruitNames.length; i++) {
        for (var j = 0; j = fruitType.length; j++)
            fruitName = fruitType[j] + fruitNames[i]
    }
    console.log(`$(fruitName)`)
}