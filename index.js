function func(){
    var x = document.getElementById("num").value 
    document.getElementById("para").style.fontSize = "90px"
    document.getElementById("para").style.color = "green"
    document.getElementById("para").innerHTML = "Hello "+ x;
    document.getElementById("num").value = ""
}

function func2(){
    document.getElementById("para").style.fontSize = "90px"
    document.getElementById("para").style.color = "red"
    document.getElementById("para").innerHTML = "Good Bye!"
    alert("Nice to meet you!")
}

function table()
{
    var arr = []
    var n = document.getElementById("num").value
    for(var i=1; i<=10; i++)
    {
        arr.push(n + " X " + i + " = " + n*i + " ");
    }
    document.getElementById("para").innerHTML = arr;
}

function odd_even()
{
    var n = document.getElementById("num").value
    if (n === 0)
    {
        document.getElementById("para").innerHTML = "Its a Zero"
    }
    else{ 
        if (n%2 === 0)
        {
            document.getElementById("para").style.color = "Red" 
            document.getElementById("para").innerHTML = n+ " is Even"
        }
        else
        {
            
            document.getElementById("para").style.color = "blue"
            document.getElementById("para").innerHTML = n + " is Odd"
        }
    }
}