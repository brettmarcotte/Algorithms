//first challenge
var ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69]

function grades(arr) {
    var results = []
    var highestGrade = arr[i]
    var lowestGrade = arr[i]
    for (var i = 0; i < grades.length; i++) {
        if (arr[i] > highestGrade)
            if (arr[j] < lowestGrade)
                highestGrade = arr[i]
        lowestGrade = arr[j]

        results[i][j] = grades
        console.log(highestGrade + " students passed the quiz, and " + lowestGrade + " students failed...")

    }
    return results
}


//Second Challenge
var ourQuizGradesNames = ['Bob', 'Jill', 'Billy', 'Grace', 'Jen', 'Tom', 'Jack', 'Alex', 'Michelle', 'Bill', 'Neil', 'Sam', 'Henry', 'Dave']
var ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69]

function grades(arr) {
    var results = []
    var highestGrade = arr[i]
    var lowestGrade = arr[j]
    for (var i = 0; i < grades.length; i++) {
        if (arr[i] > highestGrade) {
            for (var j = 1; j < grades.length; i++) {
                if (arr[j] < lowestGrade)
                    highestGrade = arr[i]
                lowestGrade = arr[j]
            }
        }
        return [i][j] = grades
        console.log(ourQuizGradesNames + " students passed the quiz " + ourQuizGrades + " students failed...")

    }
    return results
}

//Third Challenge 
var ourQuizGradesNames = ['Bob', 'Jill', 'Billy', 'Grace', 'Jen', 'Tom', 'Jack', 'Alex', 'Michelle', 'Bill', 'Neil', 'Sam', 'Henry', 'Dave']
var ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69]

function grades(arr)
for (var i = 0; i < grades.length; i++) {
    var highestGrade = arr[i]
    if (arr[i] > highestGrade) {
        for (var j = 1; j < grades.length; i++) {
            if (arr[i] > 70)
                highestGrades = arr[i]
            console.log(ourQuizGradesNames + " passed with a " + ourQuizGrades)
        }

    }
    return results
}
//fourth Challenge
var ourQuizGradesNames = ['Bob', 'Jill', 'Billy', 'Grace', 'Jen', 'Tom', 'Jack', 'Alex', 'Michelle', 'Bill', 'Neil', 'Sam', 'Henry', 'Dave']
var ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69]

function grades(arr) {
    letterGrades = arr[i]
    for (var i = 0; i < grades.length; i++) {
        if (arr[i] < letterGrades) {
            letterGrades = arr[i]
        }
    }
    results[i] = letterGrades
}
return results
console.log(ourQuizGradesNames + "got a " + letterGrade + "on their quiz.")