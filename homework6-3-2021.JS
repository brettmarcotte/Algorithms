//Challenge 1A
var value = "Hello World!"

for (var i = 0; i < value.length; i++) {
    console.log(value[i])

}
//Challenge 1B
var value = "Hello CareerDevs! "
for (let i = 0; i < value.length; i++) {
    console.log(i + 1)
    console.log(value[i])
}
//Challenge 2A
var numbers = [838, 505, 490, 16, 221, 985, 933, 856, 142, 694, 997, 137, 295, 95, 121, 249, 350, 763, 616, 55, 8, 54, 875, 968, 805, 274, 98, 38, 779, 130, 472, 169, 920, 530, 694, 380, 988, 426, 382, 505, 514, 72, 545, 327, 329, 953, 539, 727, 896, 318, 201, 518, 284, 196, 342, 145, 595, 547, 938, 2, 77, 593, 976, 961, 927, 661, 595, 983, 97, 34, 245, 271, 767, 541, 169, 620, 338, 974, 650, 218, 180, 153, 664, 31, 104, 706, 78, 646, 712, 523, 748, 817, 89, 128, 850, 738, 607, 18, 665, 859]

function largestOfArray(arr) {
    var results = []
    var largestNum = arr[0]
    var smallestNum = arr[1]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            for (var j = 1; j < arr.length; i++) {
                if (arr[j] < smallestNum)
                    largestNum = arr[i]
                smallestNum = arr[j]
            }

        }

    }
    console.log("The largest number in the array is " + largestNum)
}
largestOfArray(numbers)
    //Challenge 2B
var numbers = [838, 505, 490, 16, 221, 985, 933, 856, 142, 694, 997, 137, 295, 95, 121, 249, 350, 763, 616, 55, 8, 54, 875, 968, 805, 274, 98, 38, 779, 130, 472, 169, 920, 530, 694, 380, 988, 426, 382, 505, 514, 72, 545, 327, 329, 953, 539, 727, 896, 318, 201, 518, 284, 196, 342, 145, 595, 547, 938, 2, 77, 593, 976, 961, 927, 661, 595, 983, 97, 34, 245, 271, 767, 541, 169, 620, 338, 974, 650, 218, 180, 153, 664, 31, 104, 706, 78, 646, 712, 523, 748, 817, 89, 128, 850, 738, 607, 18, 665, 859]

function largestOfArray(arr) {
    var results = []
    var largestNum = arr[0]
    var smallestNum = arr[1]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            for (var j = 1; j < arr.length; i++) {
                if (arr[j] < smallestNum)
                    largestNum = arr[i]
                smallestNum = arr[j]
            }

        }

    }
    console.log("The largest number in the array is " + largestNum + " and the smallest number is " + smallestNum)
}
largestOfArray(numbers)


//Challenge 3A
function factorial(num) {
    for (var product = 1; num > 0; num--) {
        product *= num
    }
    return product
}

factorial(7)
console.log()
    //Challenge 3B
    [9, 5, 7, 13, 19, 23, 4, 12, 15]

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
factorialize(5);

console.log("The factorial of " + num + "is " + i)
    //Challenge 3C