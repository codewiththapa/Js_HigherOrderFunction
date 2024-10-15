/* partial application(function) .... application means applying function or calling(invoaction) of function.....
there are 2 methods of partial application using 
1.bind() method   2. closure   */

//
function show(greetings,name){
  return `${greetings} ${name}`
}

const showPartial = show.bind(null,'hello')
console.log(showPartial('suman'))

//

function area(length,height,width){
  return length*height*width
}

const areaTotal = area.bind(null,10)
const weHave  = areaTotal(12,13)
console.log(weHave)

//

const arrow =(a,b)=>{
  return a+b
}

const arrow2= (x,y)=>{
  return arrow(x,y)
}

const val = arrow2.bind(null,3)
console.log(val(4))



