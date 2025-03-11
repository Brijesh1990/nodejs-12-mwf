var MyVar; //global variables
function MainFunction()
{
// method of promises
// MyVar=setTimeout(callback,3000);
MyVar=setTimeout("Display()",3000);  //callback function
}
// create a function 
function Display()
{
document.getElementById("loader-app").style='display:none';
document.getElementById("main-app").style='display:block';
}