 
//Get number from airtel.html to plan.html
$(document).ready(function(){
  $("form").submit(function(){
      //prevent form from submitting
		var mobileNumber = $('#number').val();
		localStorage.setItem("NUMBER", mobileNumber);
		
  });
});

//Get payment summary from plan.html to recharge.html
$(document).ready(function(){
  $("form").submit(function(){
      //prevent form from submitting
		var plan= $('#plans').val();
		localStorage.setItem("AMOUNT", plan);
		
  });
});
 
 //Function to show Payment Summary
function add()
{
	var id;
	//innitialize amount of plan and it's detailes before payment
	if(id=="1")
	{
	let plan1=document.getElementById("1").value;
	document.getElementById("plan").innerHTML=plan1;
	}
	else if(id=="2")
	{
	let plan2=document.getElementById("2").value;
	document.getElementById("plan").innerHTML=plan2;
	}
	else if(id=="3")
	{
	let plan3=document.getElementById("3").value;
	document.getElementById("plan").innerHTML=plan3;
	}
	else if(id=="4")
	{
	let plan4=document.getElementById("4").value;
	document.getElementById("plan").innerHTML=plan4;
	}
	else if(id=="5")
	{
	let plan5=document.getElementById("5").value;
	document.getElementById("plan").innerHTML=plan5;
	}
	else
	{
	let plan6=document.getElementById("6").value;
	document.getElementById("plan").innerHTML=plan6;
	}
}
//Payment summary end

//fetching contact number from airtel.html page to plan.html page
 /*
 function seePlan()
 {

		const number=document.getElementById("number").value;
		localStorage.setItem("NUMBER",number);
		
		return;

 }
 */
//Cookie end
 
 
 function seePlan()
 {

	let n=document.getElementById("number").value;
	document.getElementById("numberT").innerHTML=n;
 
 }
 
//Search plan
const pack = [666, 479, 499, 549,839,2999];

function checkPack(pack) 
{
return pack > document.getElementByClassName("plans").value;
}

function getPack() 
{
   document.getElementById("plans").innerHTML = pack.find(checkPack);
}
//Search plan end

 
 //Alert message for recharge successful
 function pay()
 {
	 alert("Recharge Successful");
	 
 }
 
 
//This is an animation with text using jQuery
$(document).ready(function(){
  $("div").hover(function(){
    var div = $("#animation");  
    div.animate({left: '250px'}, "slow");
    div.animate({fontSize: '100px'}, "slow");
  });
});

 
//Printing plan using JavaScript

const plans = ["666", "479", "499", "549","839","2999"];
let i, len, text;
for (i = 0, len = plans.length, text = ""; i < len; i++) {
  text += plans[i] + "<br>";
}
//document.getElementByClassName("rechargePlan").innerHTML = text;


//Copying number from airtel.html to plan.html
/*
window.addEventListener("load",()=>
{
	const number=document.getElementById("number");
	document.getElementById("numberT").innerHTML=number;
})
*/
//Logout 
function exit(){
	window.exit();
}