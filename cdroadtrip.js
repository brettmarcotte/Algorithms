//first Challenge
var riders = [
    ["Arnell"],
    ["Carlos", "Keith", "Sergio"],
    ["Junior", "Loubna", "Margie"],
    ["Travis", "Matt", "Gabriel"],
    ["Elvis", "Jackie", "Saimer"]
]

console.log(riders[3][2])
console.log(riders[0][0])
console.log(riders[2][2])

//Second Challenge
var riders = [
    ["Arnell"],
    ["Carlos", "Keith", "Sergio"],
    ["Junior", "Loubna", "Margie"],
    ["Travis", "Matt", "Gabriel"],
    ["Elvis", "Jackie", "Saimer"]
]

function names(arr) {
    for (var i = 0; i < riders.length; i++) {
        for (var j = 0; j < riders[i].length; j++) {
            console.log(riders[i][j])
        }

    }

}
names(riders)

//Bonus Challenge
var riders = [
    ["Arnell"],
    ["Carlos", "Keith", "Sergio"],
    ["Junior", "Loubna", "Margie"],
    ["Travis", "Matt", "Gabriel"],
    ["Elvis", "Jackie", "Saimer"]
]

function names(arr) {
    for (var i = 0; i < riders.length; i++) {
        for (var j = 0; j < riders[i].length; j++) {
            for (var k = 0; k < riders[i][j].length; k++) {
                console.log(riders[i][j][k])
            }

        }

    }

}
names(riders)