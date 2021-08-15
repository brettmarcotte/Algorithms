//Challenge 1
var ourQuizGrades = [
    [ 'Bob', 72 ],  	[ 'Jill', 89 ],
    [ 'Billy', 95 ],	[ 'Grace', 90 ],
    [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
    [ 'Jack', 49 ], 	[ 'Alex', 56 ],
    [ 'Michelle', 71 ], [ 'Bill', 12 ],
    [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
    [ 'Henry', 43 ], [ 'Dave', 69 ]  
  ]
  let passGrades = 0
  let failedGrades = 0
  for (let i = 0; i < ourQuizGrades.length; i++) {
      if (ourQuizGrades[i][1] < 70) {
          failedGrades = failedGrades + 1
      } else {
          passGrades = passGrades + 1

      }
  } 
  console.log(passGrades + " students passed the quiz, and " + failedGrades + " students failed.")
//Challenge 2
var ourQuizGrades = [
    [ 'Bob', 72 ],  	[ 'Jill', 89 ],
    [ 'Billy', 95 ],	[ 'Grace', 90 ],
    [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
    [ 'Jack', 49 ], 	[ 'Alex', 56 ],
    [ 'Michelle', 71 ], [ 'Bill', 12 ],
    [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
    [ 'Henry', 43 ], [ 'Dave', 69 ]  
  ]
  let pass = 0
  let failed = 0
  for (let i = 0; i < ourQuizGrades.length; i++) {
      if (ourQuizGrades[i][1] < 70) {
          failed = failed++
      } else {
          if(ourQuizGrades[i][1] > 70) {
            pass = pass++
          }
       
      }
  } 
  console.log(ourQuizGrades + pass/failed + " with a " + ourQuizGrades)

//Challenge 3
var ourQuizGrades = [
    [ 'Bob', 72 ],  	[ 'Jill', 89 ],
    [ 'Billy', 95 ],	[ 'Grace', 90 ],
    [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
    [ 'Jack', 49 ], 	[ 'Alex', 56 ],
    [ 'Michelle', 71 ], [ 'Bill', 12 ],
    [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
    [ 'Henry', 43 ], [ 'Dave', 69 ]  
  ]
  let pass = 0
  let failed = 0
  for (let i = 0; i < ourQuizGrades.length; i++) {
          if(ourQuizGrades[i][1] > 70) {
            pass = pass++
          }
     
      }
  } 
  console.log(ourQuizGrades + pass + " with a " + ourQuizGrades) 