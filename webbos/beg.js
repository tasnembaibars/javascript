var people=[{name:'sss',age:18},{name:'www',age:20},{name:'ss',age:28},{name:'ww',age:23},{name:'wzw',age:15}]


function peoag (people){
    for(i=0;i<people.length;i++){
     if(people.age>=18){
         let result=people[i].age;
         return result
     }
    }
}
