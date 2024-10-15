//partial application(function) using closure(function which can access from inner to outer)

function showStudents(collegeNam){
  return function(stdntNam,grade){
     return`Hi i am ${stdntNam} form ${collegeNam} read in ${grade}`
  }
}

const study = showStudents('lumbini')
const studyClg = study('suman',12)
console.log(studyClg)

//

let multiply = function (x){
  return function(y){
     return x*y
  }
}

const output = multiply(2)
const finalOutput = output(5);
console.log(finalOutput); 
