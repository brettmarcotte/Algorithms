//3
//Log the number of males and females in each department


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

employees;
  empId: 0
  gender: 4

*/

//FUNCTIONS TO CREATE
// isCurrentlyEmployeed ( empId ) return boolean
// isMaleEmployee ( empId ) return boolean
// getDeptGenders ( deptId ) return int[] (integer array) [ male#, female# ] OR object {male: 0, female: 0}

// getDeptGender ( deptId, getMales ) return int (number)

function isMaleEmployee ( empId ) {

    //OPTION 1
    // for (let i = 0; i < employees.length; i++) {
        
    //     //v1
    //     if (employees[i][0] == empId) {

    //         //what gender
    //         if ( employees[i][4] == "M" ) {
    //             return true
    //         } else if ( employees[i][4] == "F" ) {
    //             return false
    //         }

    //     }

    //     //v2
    //     if (employees[i][0] == empId && employees[i][4] == "M") {
    //         return true
    //     } else if (employees[i][0] == empId && employees[i][4] == "F") {
    //         return false
    //     }
        
    // }

    // //1) the data is corrupted and the employee exist but their gender data is NOT 'M' or 'F'
    // //2) the employeeid did not match any of the employees data
    // console.log("!SOMETHING WENT WRONG!\nThere is no employee found with the id: " + empId);
    // console.log("OR - the employees data was corrupted and their gender was not equal to 'M' or 'F'");
    
    //OPTION 2.0
    const employeeIndex = empId - 10001;
    const employeeData = employees[employeeIndex];
    const gender = employeeData[4];

    if (gender == "M") return true;
    if (gender == "F") return false;

    // //at this point something has gone wrong
    // console.log("!SOMETHING WENT WRONG!\nThere is no employee found with the id: " + empId);
    // console.log("OR - the employees data was corrupted and their gender was not equal to 'M' or 'F'");
    
    // //OPTION 2.1
    // if (employees[empId - 10001][4] == "M") return true;
    // else if (employees[empId - 10001][4] == "F") return false;

}

function isCurrentlyEmployeed( empId ) {

    // const employeeHistory = []

    for (let i = 0; i < employeeDepartment.length; i++) {
        const empDept = employeeDepartment[i]
        
        if (
            empDept[0] == empId 
            && empDept[3] == '9999-01-01'
        ) {
            return true
            // employeeHistory.push(empDept[3])
        }
    }

    return false

    // console.log(employeeHistory);

    // return employeeHistory.includes('9999-01-01')

    // //employeeHistory is a 2D array with just the employee we are looking for
    // for (let i = 0; i < employeeHistory.length; i++) {
    //     if (employeeHistory[i][3] == '9999-01-01') {
    //         return true
    //     }
    // }

    // //at this point we have not cofirmed they still work there, therefore we return false
    // return false

    
    
}

function getDeptGenders( deptId ) {

    const genders = {
        male: 0,
        female: 0
    }

    for (let i = 0; i < employeeDepartment.length; i++) {
        const empData = employeeDepartment[i]; //[10027,"d005","1995-04-02","9999-01-01"],
        
        if (
            empData[1] == deptId //department ids match
            && isCurrentlyEmployeed( empData[0] ) //and they still work there
        ) {

            if ( isMaleEmployee(empData[0]) ) {
                genders.male++
            } else {
                genders.female++
            }

        }

    }

    return genders
    
}

function calaculateCompanyGenders() {

    for (let i = 0; i < departments.length; i++) {
        
        const deptName = departments[i][1]
        const deptId = departments[i][0]

        const genderTotal = getDeptGenders(deptId)

        // console.log(deptId, genderTotal, deptName);

        console.log(`There are ${genderTotal.male} males and ${genderTotal.female} females in the ${deptName} department.`);
        
    }
    
}

calaculateCompanyGenders()