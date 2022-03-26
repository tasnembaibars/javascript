console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

 let arr1 = [1,7,9,4,5];
 let arr2 = ["str","alex","moh"];
 let arr3 = ['the','fox','over','lazy','dog']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits =["tomato","banana","watermelon"]
//tomato 0, banana 1, watermelon 2

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let arr4 = ["food1","food2","food3","food4","food5"];
let arr5 = ["sport1","sport1","sport1"]
let arr6 = ["movie1","movie1","movie1","movie1"]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
var arr = [ 1, 2, 3, 4, 5 ];
var first = arr[0];
console.log(first);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
lastOfArray =[ "a","b","c","d"]
let lastElement =lastOfArray[lastOfArray.length - 1];

console.log(lastElement);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var arr =[0,5,7,9]

arr.shift(0);
arr.shift(5);
arr.shift(7);
arr.unshift(1,3,4,6,8);
arr.push(10);
console.log(arr);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
array2.push();//adding  elements to the end of array
array2.unshift();//adding elements to the beggining of array
array2.shift();//removing an element from the beggining of array
array2.pop();//removing an element to the end of array
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
let middleOfArray =[1,2,3,4,5]
let middleOfArray2 =[1,2,3,4,5,6]
var middle = middleOfArray[Math.floor(middleOfArray.length / 2)];
console.log(middle);
const midPoint = middleOfArray2.length / 2;
const middle2 = [middleOfArray2[midPoint - 1],middleOfArray2[midPoint]];
console.log(middle2)
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = [] ; 
length.animals = 5 ;
animals[0] = ['zebra']
animals[1] = ['elephant']
console.log(`{${animals[0] },${animals[1]} }`)


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var num= [1,2,3,8,9]
function indexof(num , index){
 var arr=[]
 for(i=0;i<num.length;i++){
     arr[i]=num[i]
 }
 return arr;
}
console.log(indexof(num))

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN

Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9];

function arrayExceptLast(array) {
    var arr = [];
    for ( i = 0; i < array.length - 1; i++) {
        arr[i] = array[i]
    }
    return arr;
}
console.log(arrayExceptLast(nums));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
let array1 =[1,2,3,8,9];

function addToEnd(array,value){
   array.pop();
   array.push(value);
}        
console.log(addToEnd(array1,55));
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for method
var num =[1,2,3,8,9]


function sumArray(num){
    var sum =0
  for(i=0;i<num.length;i++){
     sum += num[i] ;
     
  }
  console.log(sum)
}
 sumArray(num);
 

 
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var arr= [1,2,3,8,9]
function minInArray(array){
   let min = arr[0]
   for(i=0;i<arr.length;i++){
   if(min[0]<arr[i]){
       min=arr[i]
   }
}
   return min
}
console.log( minInArray(arr))
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(nums , value){
    index = nums.indexOf(value);
    nums.splice(index , 1);
    return nums;
}
var nums= [1,2,3,8,9]
console.log(removeFromArray(nums, 8));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(nums){
    index = 0;
   
    let odd = [];
    
    for(let i = 0; i < nums.length ; i++){
        
        if(nums[i] % 2 != 0){
            odd[index] = nums[i]
            index++;
        }
    }
    return odd;
}
var nums= [1,2,3,8,9]
console.log(oddArray(nums));


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]

function aveArray(array) {

    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];

    }
    return sum / array.length;
}
console.log(aveArray(nums));



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterInArray(arr){
 index =0;
     let  ar=arr[0];
for (i=0;i<arr.length;i++){
    if(ar.length<arr[i].length){
        ar=arr[i];
    }
}
 return ar;
}
console.log(shorterInArray(strings))

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string= "alex mercer madrasa rashed2 emad hala"
function repeatChar(string,char){
  let   count=0;
  let x= char
      for(i=0;i<string.length;i++){
      if(string[i]==x){
      count ++;
    }
}
return count;
}

console.log(repeatChar(string,"d"))

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function evenIndexOddLength(array){
     let arr=[]
     let index=0
     for(i=0;i<array.length;i++){

         if(i %2 == 0 && array[i].length %2 != 0 ){
              arr[index]=array[i];
              index++;
         }
     }
     return arr
}
console.log(evenIndexOddLength(strings))
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [44, 5, 4, 3, 2, 10]

function powerElementIndex(array){ 
    let arr =[]
    let index=0
      for(i=0;i<array.length;i++){
         arr[i]=Math.pow(nums[i] , i);
           
           
      }
      return arr
}
console.log(powerElementIndex(nums))
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(nums){
    var result = [];
    var index = 0;
    let i = 0;
    while(i < nums.length){
        if((nums[i] % 2 == 0) && ((i % 2) == 0)){
           
            result[index] = nums[i];
            index++;
        }
        i++;
    }
    return result;
}
function evenNumberEvenIndex(nums){
    var result = [];
    var index = 0;
    for(let i = 0; i < nums.length ; i++){   
        if((nums[i] % 2 == 0) && ((i % 2) == 0)){
           
            result[index] = nums[i];
            index++;
        }
    }
    return result;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums));