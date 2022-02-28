function compute()
{
    /*  p = document.getElementById("principal").value;
        r = document.getElementById("rate").value;
        y = document.getElementById("years").value;     */
    var principal = document.getElementById("principal").value;
    if (principal <= 0)
        {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return;
        }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
    result.innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}


/*this is a function to read & display the value of the range slider*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
    /*the above function is linked with an onchange event on the slider*/
    rateval.onchange = function()
    {
        document.getElementById("rate_val").innerHTML = this.value;
    }    
}