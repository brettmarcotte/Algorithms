//departmentdata02 
//Challenge 1

let maleTotal = 0
 let femaleTotal = 0
 
 for(let i = 1; i < employees.length; i++) {
    gender = employees[i][4] 
      if(gender == "M" ) {
       maleTotal = i + 1
      } else if(gender == "F") {
        femaleTotal = i + 1
      }

 console.log("There are a total of " + maleTotal + " males, and " + femaleTotal + " females in this company")
}

//Challenge 2 
function empCount(depID) {
  let id, employee = 0 

  for (let i = 0; i < departments.length; i++) {
    if(depId == departments[i][1]){
     id = departments[i]
   }
    
  }
  for (let i = 0; i < employeeDepartment.length; i++) {
    
   if(id[0] == employeeDepartment[i][1]) {
     employees++ 
   }
  return `${id[1]} Department has ${employee} employees.`
 }
 
 let report = []
 
 for(let i = 0 ; i < departments.length; i++) {
   report.push(empCount(departments[i][0]) )
 }
 
}
console.log(report);

//Challenge 3

function isMaleEmployee ( empId ) {

  for (let i = 0; i < employees.length; i++) {
      if(employees[i][0] == empId && employees[i][4] == "M") {
        return true
      } else if (employees[i][0] == empId && employees[i][4] == "F") {
        return false
       
    }
    
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
function getDeptGenders() {
 
const genders = {
  male: 0,
  female: 0
}
for (let i = 0; i < employeeDepartment.length; i++) {
  const empData = employeeDepartment[i];

  if(
    empData[1] == deptId 
    && isCurrentlyEmployed(empData[0])
    ) {
    if( isMaleEmployee(empData[0]) ) {
        genders.male++
    } else {
        genders.female++
    }


  }
  
}
}

function calculateCompanyGenders() {
for (let i = 0; i < departments.length; i++) {

const deptName = departments[i][1]
const deptId = departments[i][0]

const genderTotals = getDeptGenders(deptId)

console.log(`there are ${genderTotal.male} males and ${genderTotal.female} females `)
}

}

  
//Challenge 4

function totalSalary ( empId) {
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
    const empSal = employeeSalaries[i][1]
   
    
  }
}
console.log("The total salary for the " + depId + " department was " + empSal + " this year.")

  
  
