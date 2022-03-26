/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
let x = window.prompt("Enter a number: ");
let y = window.prompt("Enter a number: ");
if(x>y){
    document.write(x);
}else if (y>x){
    document.write(y);
}


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  let n = window.prompt("Enter num 1")
  let n1 = window.prompt("Enter num 2")
  let n2 = window.prompt("Enter num 3")

  if(n*n1*n2){
    document.write("-" );
  }else{
    document.write("+");
  }


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  let n3 = window.prompt("Enter num 3");
  let n4 = window.prompt("Enter num 4");
  let n5 = window.prompt("Enter num 5");

  if(n3>n4 && n4>n5){
      if(n3>n5){
          alert(n3+" "+n4+" "+n5)
      }else{
          if(n4>n3 && n3>n5){
             
            alert(n4+" "+n3+" "+n5) 
          }else if(n5>n4 && n3>n4){
              if(n3>n4){
                  alert(n5+" "+n3+" "+n5)
              }
       
                }
      }
  }


 /******* End Your Code ********* */


//  *4. Write a JavaScript conditional statement to find the largest of five numbers. 
//  Display an alert box to show the result. Go to the editor 
//  Sample numbers : -5, -2, -6, 0, -1 
//  Output : 0 */
 
 /******* Start Your Code *********/
  let num22 =  window.prompt("is the largest: ");
  let num23 =  window.prompt("is the largest: ");
  let num24 =  window.prompt("is the largest: ");
  let num25 =  window.prompt("is the largest: ");
  
  if(num22>num23 || num22>num24||num22>num25){
      alert(num22 ,"is the largest");
  }else if(num23>num22 || num23>num24 || num23>num25){
    alert(num23 ,"is the largest");
  }else if( num24>num22|| num24>num23||num24>num25){
    alert(num24 ,"is the largest");
  }else if(num25>num22|| num25>num23||num25>num24){
    alert(num25 ,"is the largest"); 
  }
  /******* End Your Code ********* */
 
  /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
 /******* Start Your Code *********/
 
 let num11 = window.prompt("Enter a number: ");
 let num12 = window.prompt("Enter a number: ");

   if(num11 > num12){
 alert("hello world");
 }else{
 alert("Goodbye")
 }
  /******* End Your Code ********* */
