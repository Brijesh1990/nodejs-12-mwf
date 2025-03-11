function result()
{
    var n1=document.getElementById("number1").value;
    var n2=document.getElementById("number2").value;
    var n3=document.getElementById("number3").value;

    if(n1>n2 && n1>n3)
    {
        document.getElementById("demo1").innerHTML="N1 is max Numbers";
    }
    else if(n2>n3 && n2>n1)
    {
        document.getElementById("demo1").innerHTML="N2 is max Numbers";
    }
    else if(n3>n2 && n3>n1)
    {
        document.getElementById("demo1").innerHTML="N3 is max Numbers";
    }
    else 
    {
        document.getElementById("demo1").innerHTML="Something went wrong check conditions";  
    }
        

}