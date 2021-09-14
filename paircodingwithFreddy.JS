//challenge1A
console.log("\nChallenge 1A\n") //challenge 1
var mileage = 50000

function challenge1a(num) {
    console.log(`${num} miles`)
    if (num > 100000) {
        console.log(`The car has been driven over 100000 miles\n`)
    } else {
        console.log(`Your car has been driven less than  100,000 miles, you are available for the better insurance package\n`)
    }
}
challenge1a(mileage)
mileage = 150000
challenge1a(mileage)

//challenge1B
console.log("\nChallenge 1B\n")
var hotelRoomCost = 250

function challenge1b(num) {
    console.log(`$${num}`)
    if (num > 500) {
        console.log(`You have selected a luxury hotel suite\n`)
    } else {
        console.log(`You have selected a standard hotel suite\n`)
    }
}
challenge1b(hotelRoomCost)
hotelRoomCost = 600
challenge1b(hotelRoomCost)

//Challenge2A

let carNames = ["Honda Accord", "Toyota Corolla", "Tesla Model Y", "Chevy Camaro"]
for (let i = 0; i < carNames.length; i++) {
    console.log(carNames[i])
}

//Challenge 2B

let hotelName = "CareerDevs Resorts"
for (let i = 0; i < hotelName.length; i++) {
    console.log(hotelName[i])
}

//Challenge 3A
let carGas = [.15, .75, .27, .23, .80, .50, .10, .30]

function Challenge3a(num) {
    for (let i = 0; i < carGas.length; i++) {
        if (num > .25) {
            console.log(`The car’s gas tank is at 15%, the car needs a fill up soon.`)
        } else {
            console.log(`The car’s gas tank is at 75%, the car does not need a fill up very soon.`)
        }
    }
    Challenge3a(carGas[0])
    carGas = .8
    Challenge3a(carGas[1])
}

//Challenge3B

//Challenge4
var numbers = []

for (var i = 0; i < 10; i++) {
    console.log(i)
    numbers.push
}
console.log(numbers.length)
for (var i = 0; i < numbers.length; i++) {
    var product = numbers[i] * 3
    console.log(product);
    if (product % 2 == 0) {
        sumTotal += numbers[i]
    }
}

console.log(numbers[i])