function calculate(){
    let billAmount = document.getElementById("bill-amount").value;
    let tipPercentage = document.getElementById("tip-percentage").value;
    let totalParty = document.getElementById("party").value;

    if(billAmount === "" || tipPercentage == 0){
        return window.alert("Please enter your bill amount");
    }

    if(totalParty === "" || totalParty <= 1 ){
        totalParty = 1
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "block"
    }

    let totalBill = (billAmount * tipPercentage)/totalParty;
    totalBill = Math.round(totalBill * 100)/100
    totalBill = totalBill.toFixed(2)

    document.getElementById("total").style.display = "block"
    document.getElementById("tip").innerHTML = totalBill;
}

document.getElementById("total").style.display = "none";
document.getElementById("each").style.display ="none"

document.getElementById("calculate").addEventListener('click', function(){
    calculate()
})