function compute()
{
    // calculate the interest
    checkData();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    // convert number of years to actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    // write the result
    document.getElementById("result").innerHTML="\<br\>If you deposit "
    +principal+",\<br\>at an interest rate of "+rate+
    "%\<br\>You will receive an amount of "+interest+
    ",\<br\>in the year "+year+"\<br\>"
    
}

function updateRate()
{
    // read value of range slider and display the span adjacent 
    // to the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function checkData()
{
    // check if principal input box is greater than 0
    var principal = document.getElementById("principal");
    if(principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}
        