function compute()
{
		let year = new Date().getFullYear();
    let years = parseInt(document.getElementById("years").value); 
    let amount = document.getElementById("principal").value;
    let interest = document.getElementById("rate").value;
    let interestCalc = document.getElementById("rate").value/100.;
    let initialAmount = amount;
		if ((isNaN(amount)) || (amount == "")) {
    	alert("Please enter a valid number");    
    } else {
      amount = years * interestCalc * amount;
      document.getElementById("s1").innerHTML = initialAmount;
      document.getElementById("s2").innerHTML = Math.round(interest*100) / 100 + "%";
      document.getElementById("s3").innerHTML = Math.round(amount*100) / 100;
      document.getElementById("s4").innerHTML = (year+years);
      document.getElementById("resultsTr").style.display = "";
	}
}
        
function changeInterestRate(){
	document.getElementById("interestratetext").innerHTML = document.getElementById("rate").value + "%";
}