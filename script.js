function calculate(){
    let billAmount = document.getElementById("bill-amount").value;
    let tipPercentage = document.getElementById("tip-percentage").value;
    let totalParty = document.getElementById("party").value;

    if(billAmount === "" || tipPercentage == 0){
        return window.alert("Please enter your bill amount");
    }

    let totalBill = (billAmount * tipPercentage)/totalParty;
    totalBill = Math.round(totalBill * 100)/100
    totalBill = totalBill.toFixed(2)
}