var a = ["Arenll", "Mike", "John", "Jeff", "Taylor", "Rich", "Joel", "Freddy", "Elvis", "Brett", "Lujein", "Gabriel", "Simon", "Manny", "Pierre"]
var b = ["Milhouse", "Ferrara", "Gillard", "Mitsou", "Blais", "Loung", "Fernandez", "Canido", "Aibangbee", "Marcotte", "Suliman", "Sherman", "Morris", "Lee", "Edouard Fils"]
var total = 0

function myFunction() {
    for (var i = 0; i < a.length; i++) {
        total++
        console.log(`${total}. ${a[i]} ${b[i]}`)
    }
    console.log('${Total class members;"}${total.length}')
}
myFunction()