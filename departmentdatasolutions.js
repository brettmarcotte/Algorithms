//Challenge 1C
for(let i = 0; i < employees.length; i++) {
    employeeId = employees[i][0]
    employeeName = employees[i][2] + " " + employees[i][3]
  
    for(let j = 0; j < employeeDepartment.length; j++) {
      for(let k = 0; k < departments.length; k++)
  
      if(employeeId == employeeDepartment[j][0] && employeeDepartment[j][1] == departments[k][0]) {
  
       
      console.log(employeeName + " works in the " + departments[k][1] + " department.")
      }
  
      
    }
  }

  let employeeName = 0



// let employeeData = 0
// let depName = 0
// let employeeId = 0

// for(let i = 0; i < employeeDepartment.length; i++) {
//     employDepartment = employeeDepartment[i][1]
//     employId = employeeDepartment[i][1]
//     // console.log(employDepartment, employeeId)

//     if(employeeDepartment[i+1] != undefined && employId != employeeDepartment[i+1][0] || i === employeeDepartment.length - 1) {
//         for(let j = 0; j < employeeSalary.length; j++) {
//             if(employId === employees[j][0]){
                
//                 for(let k = 0; k < departments.length; k++) {
//                     if(employDepartment === departments[k][0]){
//                         console.log(employees[j][0], employees[j][2], employees[j][3])
//                     }
//                 }
//             }
//         }
//     }
// }


// //Jeff Solution 

// for(let i = 0; i < employeeDepartment.length; i++)

// employDepartment = employDepartment[i][1]
// employId = employDepartment[i][0]

// if(employeeDepartment[i+1] != undefined && employId != employeeDepartment[i][0] || i === employeeDepartment.length - 1)
// const empIndex = emploId - 10001
// const empDep = employeeDepartment[3] - 1

// console.log(employDepartment[i][0], employDepartment[i][1] + " is in the " + employDepartment[i][3] + " department. ")

//Challenge 
/* 
A. log the employee name, department name, dept number and salary for all employees earning over $60K

	Note: only the first 35 employees have sufficient data as the salaries array is incomplete.
	
	
	B. Only log an employee name once, their salary should be their most recent wage (highest pay)

*/

let employeeName = 0
let employeeData = 0
let depName = 0
let employeeId = 0
let salary = 0 

for(let i = 0; i < employeeSalaries.length; i++) {
    if (employeeSalaries[i][1] > 60000) {
        const empIdx = employeeSalaries[i][0] - 10001
        const depIdx = employeeDepartment[i][1] - 10001
        const empDepIdx = departments[i][0]
    console.log(employees[empIdx][2], employees[empIdx][3], employeeDepartment[depIdx][1], employeeSalaries[i][1]);
}

}

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
  let maleTotal = 0
  let femaleTotal = 0
  
  for(let i = 1; i < employees.length; i++) {
     gender = employees[i][4]
       if(gender == "M" ) {
        maleTotal = i + 1
       } else if(gender == "F") {
         femaleTotal = i + 1 
  for(let j = 0; j < employeeDepartment.length; j++) {
     employeeDep = employeeDepartment[j][1] + departments[j]
     emp = employees[i][0]
     
     console.log("There are" + maleTotal + "male employees and " + femaleTotal +  "female employees in the" + departments + "department.");
  }
   }
  }


//Challenge 4




    //3
  //Log the number of males and females in each departments

  //Arrays: departments, employeeDepartment, employees
  /*
departments; 
id: 0
name: 1

employeeDepartment;
  empId: 0
  deptId: 1
  startOfPayPeriod: 2
  endOfPayPeriod: 3

Employees;
  empId: 0
  gender: 4

  */

  //FUNCTIONS TO CREATE
  // isCurrentlyEmployed ( empId ) return boolean
  // isMaleEmployee ( empId ) return boolean
  // getDeptGenders ( deptId ) return int[] (integer array) [ male#, female# ] OR return and object {male: 0, female: 0
  // getDeptGender ( deptId, getMales ) return int (number) 

  function isMaleEmployee ( empId ) {
    //Option 1
    for (let i = 0; i < employees.length; i++) {
    
      if(employees[i][0] == empId) {

       //v1 
       if(employees[i][4] == "M") {
          return true
        } else if (employees[i][4] == "F") {
          return false
        }
        //v2
        if(employees[i][0] == empId && employees[i][4] == "M") {
          return true
        } else if (employees[i][0] == empId && employees[i][4] == "F") {
          return false
          //1) the data is corrupt and the employee exists but their gender data is NOT 'M' or 'F'
          //2) the employeeId did not match any of the employees data

      }
      
    }

  }
//option 2
const employeeIndex = empid - 10001;
const employeeData = employees[employeeIndex];
const gender = employeeData[4];

if (gender == "M") return true;
if (gender == "F") return false;

//option 2.1
 if(employees[empId - 10001][4] == "M")
 return true;
 else if (employees[empId - 10001][4] == "F")
 return false;
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

//Challenge 3 Pt 2

function empCount(depID) {
  let workerId = 0
 
  for (let i = 0; i < employeeDepartment.length; i++) {

    if(id[0] == employeeDepartment[i][1]){

      workerId.push(employeeDepartment[i][0])

      employee++
    }
    
  }
  let maleNum = 0
  let femaleNum = 0
  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < workerId.length; j++) {
      
    }

    if(workerId[j] == employees[i][0] && employees[i][4] == "M") {
      maleNum++
    } else if (workerId[j] == employees[i][0] && employees[i][4] == "F") {
      femaleNum++
    }

    }
    
   }
  return `${id[1]} Department has ${employee} employees, ${maleNum} male employees and ${femaleNum} female employees.`
  
  let data = []

  for (let i = 0; i < departments.length; i++) {
    
    data.push(empCount(departments[i][0]))
    
  }
console.log(report)

