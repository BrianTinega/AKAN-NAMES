
function calculateDay() {
  var year=document.getElementById("yob")
var month=parseInt(document.getElementById("mob"))
var day=parseInt(doument.getElementById("dob"))
var daysofTheWeek=["Sunday","Monday","Tuesday","Wedneday","Thursday","Friday","Saturday"]
  var CC=parseInt((year.subString(0,2))+1)
  var YY=parseInt(year.subString(2,4))
  var MM=month
  var DD=day
  d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  console.log(d)
  Math.floor(d);
}
if (d===0) {
  alert("You were born on"+ daysofTheWeek[0] )
}
else if (d===1) {
  alert("You were born on"+ daysofTheWeek[1])
}
else if (d===2) {
  alert("You were born on"+ daysofTheWeek[2])
}
else if (d===3) {
  alert("You were born on"+ daysofTheWeek[3])
}
else if (d===4) {
  alert("You were born on"+ daysofTheWeek[4])
}
else if (d===5) {
  alert("You were born on"+ daysofTheWeek[5])
}
else if (d===6) {
  alert("You were born on"+ daysofTheWeek[6])
}
calculateDay()