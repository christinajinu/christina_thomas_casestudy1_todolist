
var xhttp= new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
    if(this.readyState==4&&this.status==200)
    {
        var response = JSON.parse(this.responseText);
        var output="";  
        for(var i=0;i<response.length;i++)
        {
            
        output += '<input id="check" type="checkbox" onchange="tick()">'+ response[i].title ;
        }
        
        document.getElementById("demo").innerHTML = output;
    }
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

var x=0;
function tick(){
    x=x+1;
    console.log(x);
    var promise= new Promise(function(resolve,reject)
    {
        if(x==5)
        {
            resolve ("Congrats. 5 Tasks have been Successfully Completed");
            
        }
        else{
            reject(x);
        }
    });

    promise
    .then(function(value){
        alert(value);
    })
    .catch(function(){
        console.log("check atleast 5");

    }
    )
}














