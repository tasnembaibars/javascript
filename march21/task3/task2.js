/*1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
let num = 3
let gloc= " jordan"
let pname ="Alice"
let jtiltle="soft ware enginner"
function tellFortune(num,pname,gloc,jtiltle){

    console.log(`you will be a${jtiltle} in ${gloc} and married to ${pname} with ${num} kids`);
    
}
tellFortune(num,pname,gloc,jtiltle);

/*2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(pupage){
    pupage = pupage*7;
    
   return pupage
  }
console.log( calculateDogAge(1))
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age,amount){
  
  amount = (amount *365 )*age
  console.log(`"You will need ${amount} to last you until the ripe old age of ${age}"`)
}
 calculateSupply(30,3)
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
let name ="Adam"
function greet(name){
  console.log(`"Hello ${name}"`)

}
greet(name)

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(x) {
  return 2 * x;
}

// function double(number) {
//   let number=7
//   return 2 * 7;
// }
function double(x) {
  return 2 * x;
}

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x ;
}
function double2 (x){
return 2 * x;
}
function  double3 (x)  {
  return 2 * x;}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube (x){
  
  x = Math.pow(x,3);

return x;
}
console.log(cube(4))


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1,num2){
  let result=0
  result= num1*num2
   return result
}
console.log(multiply(3,4))
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
 
  if(age>=20){
    console.log("yes you can");

  }else{ 
    
    console.log("please come back later")

  }
}
canIGetADrivingLicense(12)
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/ 
let string =["tree","car"];
function sameLength(string1,string2){
    let str=string[0]
    i=1
     if (string[0].length == string[i].length){
       str=string[i].length
       console.log("sameLength:",true);
     }else if(string[0].length != string[i].length){

       console.log("sameLength:",false);
     }
     return  str
}
sameLength("tree","car")
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1,num2){
  let x=num1;
 
  
    if(num2>num1){
      x=num2
    }else{
      x=num1
    }
    return x;
}
console.log( largerNubmer(5,6))
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1,num2,num3){
   let result=num1;
   if(num2<result){
     result=num2;
   }else if(num3<result){
     result=num3
   }else{
     result=num1
   }
   return result;
}
console.log(smallerNubmer(5,99,34))
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
string =["air","by","car","school","github"]
function shorterString(str1,str2,str3,str4,str5){
  let result = string[0].length;
  
  for(i=0;i<string.length;i++){
    if(result<string[i].length){
      result =string[i];
      
    }else if(result>string[i].length){
      result =string[i];
    }

  }
  return result
}
console.log( shorterString(string))
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
string =["air","school","car","github"];
function longerString(str1,str2,str3,str4){
  let result = string[0].length;
  for(i=0;i<string.length;i++){
    if(result>string[i].length){
      result =string[i];
      
    }else if(result<string[i].length){
      result =string[i];
    }

  }
  return result
}
console.log( longerString(string))
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num){
  let result=num;
  if(result %2==0){
    result= true
  }else{
    result =false
  }
  return result
}
console.log( isEven(9))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num){
  let result=num;
  if(result %2 != 0){
    result= true
  }else{
    result =false
  }
  return result
}
console.log( isOdd(12))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num){
  let result = num;
  result=Math.abs(result);
  return result
  }
 console.log( positive(-5))
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(first,last){
  
    let result = first +" "+ last
    return result
}
console.log( fullName("Adam","McCallen"))
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
let ave =[1,2,3,4,5]
function average(num1,num2,num3,num4,num5){
  
  let sum =0
  let count =0
  for(i=0;i<ave.length;i++){
    sum += ave[i]
    count++
  }
  return sum/count
}
 console.log(average(ave))
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(min,max){
  let result=Math.random(min,max)
  return result
}
console.log(randomNumber(0,1))
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min,max){
  let result=Math.random()*(max - min) + min
  return result
}
console.log(randomBetweenNumbers(3,100))
/*

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score){
  let grade = score;
  if(grade>=95 && grade<=100){
    grade ="A";
  }else if(grade>=85 && grade<=94){
    grade ="B";
  }else if(grade>=70 && grade<=84){
    grade ="C";
  }else if(grade>=50 && grade<=69){
    grade ="D";
  }else if(grade>=0 && grade<=49){
    grade ="F";
  }
  return grade
}
console.log(scoreInUniversty(66))
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

function counter (){
  let num =0
  num++;
  return num

}
console.log(counter(0))
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function count(){
  let num =2
  
  return num
}
console.log(count(2))

function resetCounter(){
  let num=2
  result = num +"and the counter reset now"
  return result
}
console.log(resetCounter(2))