// create a function of clear all
function clrAll()
{
    document.getElementById("result").value="";
}
// create a function for slice one values for result 
function sliceValue()
{
    var slc=document.getElementById("result").value;
    var res=slc.slice(0,-1);
    document.getElementById("result").value=res;
}

// create a function getValues in result after click on btn
function  getValue(val)
{
    document.getElementById("result").value+=val;
}

// create a function for airthmatic expression 
function finalResult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;

}

// create a function for find square 
function sq()
{
  var number=document.getElementById("result").value;
  var res=Math.pow(number,2);
  document.getElementById("result").value=res;

}

// create a function for find square 
function squareRoot()
{
  var number=document.getElementById("result").value;
  var res=Math.sqrt(number);
  document.getElementById("result").value=res;

}