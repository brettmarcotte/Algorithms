  //employee Department array = [10001, "d005", "1986-06-26", "9999-01-01"]
  //index 0 is the employee id #
  //index 1 is the department id 
  //index 2 is the start date 
  //index 3 is the end date 
  //some of swapped departments (lines 26 + 27, 35 + 36, and 47 + 48)
  //data bridges = data that appears more than once (its ok if it does = patterns)
  
  //Salary Array = [10035, 61793, "1997-09-03", ""1998-09-03""]
  //index 0 is employee id #
  //index 1 is their Salaries
  //index 2 date their salary starts
  //index 3 date their salary ends 
  
  
  
  
  //Employee Array = [10122, "1965-01-19, "ohad, Esposito, "M", "1992-12-23"]
  //index 1 is their DOB 
  //index 2 is their first name 
  //index 3 is their last Name 
  //index 4 is their gender 
  //index 5 is their start date
  
  function companyInfo(a, num) {
    let b = []
    for(let i = 0; i < num; i++) {
      if(a.length < num) {
          b.push(a[i])
      } else {
          b.push(array[i])
      }
    }
    return console.log(b) 
}
//console.log(companyInfo(employeeDepartment, 10))
//companyInfo(employees, 10)
//companyInfo(employeeSalaries)
//for(let i = 0; i < 10; i++){


// function letter(array, num) {
//     for(let i = 0; i < num; i++) {
//         //for(let j = 0; j <= 9; j++) {

//         }
//         console.log(array[i]);
//     }
//  letter(employeeSalaries, 10)
//  letter(departments, 2)
//  letter()

let employeeId = []
let employeeSalary = []
for(let i = 0; i < employeeSalaries.length; i++) {
    if(employeeSalaries[i][0]) {
        employeeId.push(employeeSalaries[i][0])
        employeeSalary.push(employeeSalary[i][i])   
    }
    console.log(employeeId, employeeSalary)
}

// //Challenge 2
// function employeeNames()
// for(let i = 0; i < num; i++) {
//   for(let j = 0; j < 35; j++) {

//   }

function companyInfo(a, num) {
    let b = []
    for(let i = 0; i < num; i++) {
      if(a.length < num) {
          b.push(a[i])
      } else {
          b.push(array[i])
      }
    }
    return console.log(b) 
  }



  let randomNum = Math.floor( Math.random() * employeeDepartment.length-1) 

  let employeeId = 10010
  let departmentId = 'd006'

  let employeeIndex = idToEmpIndex(employeeId)

  let empData = employees[ employeeId - 10001 ]
  let depData = departments[ dpeartmentId[3]-1 ]


//Challenge 4
  function totalSalary ( empId ) {
    for (let i = 0; i < employeeSalaries.length; i++) {
      const empSal = employeeSalaries[i][1]
      if(empSal == empId)
      employeeHistory.push(empSal)
    }
  }
  
  
  function isCurrentlyEmployed( empId ) {
  
      const employeeHistory = []
      
      for (let i = 0; i < employeeDepartment.length; i++) {
        const empDept = employeeDepartment[i]
        if (empDept[0] == empId)
          employeeHistory.push(empDept)
      
        for (let i = 0; i < employeeHistory.length; i++) {
      
          if(employeeHistory[i][3] == "9999-01-01") {
          return true
          } else return false
         
        }
        return false
      }
  }
  
  function department () {
    for (let i = 0; i < employeeDepartments.length; i++) {
      const depId = employeeDepartments[i][1]
      if (depId == empId && isCurrentlyEmployed(empData[0])) {
      }
      
    }
  }
  
  function calaculateSalaries() {
    for (let i = 0; i < employeeSalaries.length; i++) {
      const empSal = employeeSalaries[i][1]
      const depId = employeeDepartment[i][1]
      const empDept = employeeDepartment[i] 
      
    }
  }
  console.log("The total salary for the " + depId + " department was " + empSal + " this year.")
  