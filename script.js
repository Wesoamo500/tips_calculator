"use strictly";

document.getElementById("reset").addEventListener('click',cleare);
function cleare(){
      document.getElementById("input-1").value = 0;
      document.getElementById("input-2").value = 0;
      document.getElementById("output-1").innerHTML = "0.00";
      document.getElementById("output-2").innerHTML = "0.00";
      var x = document.getElementsByClassName("sub-1");
		x[0].type="button";
		x[0].value = "custom";

    }
let tip;
let total_amt;
function calculation(rate){
	"use strictly"
	let amount = document.getElementById("input-1").value;
	let no_of_people = document.getElementById("input-2").value;
	if (amount==0){
		alert ("write something");
	} else if (no_of_people==0){
		document.getElementById("prompt").innerHTML = "can't be zero";
		document.getElementById("prompt").style.color="red";
		document.getElementById("input-2").style.border ="2px solid red";
	}else{
		tip = (rate / 100) * (amount/no_of_people);
		total_amt = tip + (amount/no_of_people);
		document.getElementById("output-1").innerHTML = tip.toFixed(2);
		document.getElementById("output-2").innerHTML = total_amt.toFixed(2); 
	};
}

function custom(){
	var x = document.getElementsByClassName("sub-1");
		x[0].type="text";
		x[0].value = "";
}
function cont(me){
	if (event.key === "Enter"){
		calculation(me.value);
	}
}


	
