/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
let person = {firstName:"Julia",lastName:"Al adham",Age:20,DateOfBirth:2/3/1988,favoriteFood:["food1","food1","food1"],favoriteMovie:["movie1","movie1","movie1","movie1","movie1"]}
console.log(person.firstName+person.lastName)

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  
  ];
  /*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(persons){
    this.fn=persons;
    for(i=0;i<5;i++){
        console.log(this.persons[i].name.first)
    }
   }
   firstName(persons)
   
   
  /*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/


let total = 0
let count= 0
let avg = total/ count;

function averageAge(persons){
    this.ag=persons;
for(i=0;i<5;i++)
{
    total += this.persons[i].age;
   count++;
}
 console.log(total/count);
}
averageAge(persons) 
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(persons){
    var a=persons[0].age;
    var index=1;
    for(i=0;i<5;i++){
      if (persons[i].age>a){
          index=i;
          a=persons[i].age;
      }
      console.log(persons[index].name.first + "  " + persons[index].name.last);
    }
}
olderPerson(persons);

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons){
    var fullName;
    var a = persons[0].name.first+" "+persons[0].name.last;
    for(i=0;i<5;i++){
        fullName=persons[i].name.first+" "+persons[i].name.last;
        if (fullName.length>a.length){
            a =fullName;
        }

    }
    console.log( "the full name of the person have longest full name:",a)
}
longestName(persons)
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons){
    var  fullName;
    var a = persons[0].name.first+" "+persons[0].name.last;
    for(i=0;i<5;i++){
        fullName=persons[i].name.first+" "+persons[i].name.last;
        if (fullName.length>a.length){
            a =fullName;
        }

    }
    console.log( "the full name of the person have longest full name:",a)
}
longestName(persons)
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(string){
    var spwords = string.split(' ');
    object = {};
    for(i = 0 ; i < spwords.length; i++){
        spwords[i] = spwords[i].toLowerCase();
     if(!object.hasOwnProperty(spwords[i])){
         object[`${spwords[i]}`] = 1;
      
    }else{
     object[`${spwords[i]}`]++;
    }
 
    
 }
 
 return object;
 }
 
 console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));
 
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar (string){                                  
    let x= string.toLowerCase();
    object={}
    
    for(i=0;i<x.length;i++){
       if(!object.hasOwnProperty(x[i])){
        object[`${string[i]}`] = 1;
      
    }else{
     object[`${string[i]}`]++;
    } 
       }
      return object; 
    }
    console.log(repeatChar("maMababatetacedo"));




/*9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3} */
var object = {a: 1, cat: 3}
var array = ['a', 'cat', 'd']
function selectFromObject(object,array){
   console.log("{"+ array[0]+ ":"+object.a+","+`${array[1]}:${object.cat}}`)
}
selectFromObject(object,array)
