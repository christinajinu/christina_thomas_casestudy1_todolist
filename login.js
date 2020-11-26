                       // call back function
                       
var btn=document.querySelector("#btn");
btn.addEventListener('click', function validate()
 {
    
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
     
if(name == "admin" && password == "12345")
{
    
error.innerHTML = "Validation Success"; 
error.style.color = "green"; 

}

else 

{
error.innerHTML = "Please enter valid Login Credentials";
error.style.color = "red";
}

 } );
//  call back function ends

 function formvalidate()
 {


 if(name == "admin" && password == "12345")
{
error.innerHTML = "Validation Success"; 
error.style.color = "green"; 
return true;
}

else 

{
error.innerHTML = "Please enter valid Login Credentials";
error.style.color = "red";
return false;
}
 }
 function formvalidate()
{

var name = document.getElementById("name").value;
 var password = document.getElementById("password").value

 


 if(name == "admin" && password == "12345")
{
    return true;
}

else 

{
    return false;
}
 }
