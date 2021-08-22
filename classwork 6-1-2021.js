//class challenges 6-1-2021
//first challenge
var array = [1, 2, 3]

function getFirstValue(arr) {
    return arr[0]
}
//second challenge
var array = [1, 2, 3]

function getLastValue(arr) {
    return arr[2]
}
//third challenge
var array[1, 2, 3]

function reverse(arr) {
    return arr.reverse()
}
//fourth challenge
function largestOfFour(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        var largestNumber = arr[i][0];
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);