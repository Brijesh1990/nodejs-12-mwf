/*  

what is function in javascript  ? 
function : A function is group of code that can be completed any task i.e called function.
or 
A function is a group of or collection of any code that can be completed any task i.e called function.
or
A function is a block of code i.e used to complete any task that is called function
examples :  How to define any function 

function functionname()
{

statements;

}

function call here


*/


// function display()
// {
//     var name="My name is brijesh";
//     console.log(name);
// }

// display();


// function display()
// {
//     var a=20;
//     var b=30;
//     console.log(a+b);
// }

// display();

// function display()
// {
// var a=20;
// var b=30;
// var c=a+b;
// console.log("The additions of numbers is :",c);
// }

// display();


// types of function ....
//    a) user defined function 
//    b) pre defined function 

// user define function ...
//    function test()
//    {
//     var name="Hi my name is Shvansh";
//     console.log(name);
//    }

//    test();


// pre defined function
//  var name="17.56";
//  console.log(typeof(name));
// var today=new Date();
// console.log(today);


// how to call function ....
// two way to call any function ...
//    a) function call by value 
//    b) function call by reference 


//a) function call by value
 
// function display(a,b) // and b is arguments or parameter of function 
// {
//   var c=a+b;
//   console.log("The additions of numbers is :",c);
// }
// display(10,30);


//b) function call by reference 

// function display(fname)
// {
//     var firstname="The firstname of Users is :"+fname;
//     console.log(firstname);
// }
// display("Vishwa Patel");


function calc(a,b)
{
    var subs=a-b;
    var mult=a*b;
    var add=a+b;
    var dv=a/b;
    console.log(subs);
    console.log(add);
    console.log(mult);
    console.log(dv);

}
calc(20,10);