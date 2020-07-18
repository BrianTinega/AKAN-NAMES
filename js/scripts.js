var CC=parseInt(document.getElementById("yob").innerHTML.slice(0,2))
  var YY=parseInt(document.getElementById("yob").innerHTML.slice(2,4))
  var MM=parseInt(document.getElementById("mob").innerHTML)
  var DD=parseInt(document.getElementById("dob").innerHTML)
  var daysOfTheWeek=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var calculate=function(){
  dayOfTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  if (dayOfTheWeek===0){
    alert("You were born on sunday")
  }
  else if (dayOfTheWeek===1){
      alert("You were born on Monday")
    }
    else if (dayOfTheWeek===2){
      alert("You were born on Tuesday")
    }
    else if (dayOfTheWeek===3){
      alert("You were born on Wednesday")
    }
    else if (dayOfTheWeek===4){
      alert("You were born on Thursday")
    }
    else if (dayOfTheWeek===5){
      alert("You were born on Friday")
    }
    else if (dayOfTheWeek===6){
      alert("You were born on Saturday")
    }
}