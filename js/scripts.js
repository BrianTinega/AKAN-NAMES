
function calculateDay() {
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var gender=document.getElementById("gender").value;
var year=document.getElementById("yob").value;
var month=parseInt(document.getElementById("mob").value);
var day=parseInt(document.getElementById("dob").value);
  var CC=parseInt(year.slice(0,2));
  var YY=parseInt(year.slice(2,4));
  d =Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + day ) % 7);

if (day<1 || day>31) {
  document.getElementById("output").innerHTML=("Enter valid date");
  return;
}
if (month<1 || month>12) {
  document.getElementById("output").innerHTML=("Enter valid month");
  return;
}

if (year<1 || year>2020) {
  document.getElementById("output").innerHTML=("Enter valid year");
  return;
}
if (d==0 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Sunday and your Akan name is "+maleNames[0]);
}
if (d==1 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Monday and your Akan name is "+maleNames[1]);
}
if (d==2 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Tuesday and your Akan name is "+maleNames[2]);
}
if (d==3 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Wednesday and your Akan name is "+maleNames[3]);
}
if (d==4 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Thursday and your Akan name is "+maleNames[4]);
}
if (d==5 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Friday and your Akan name is "+maleNames[5]);
}
if (d==6 && gender=="male") {

  document.getElementById("output").innerHTML=("You were born on Saturday and your Akan name is "+maleNames[6]);
}




if (d==0 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Sunday and your Akan name is "+femaleNames[0]);
}
if (d==1 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Monday and your Akan name is "+femaleNames[1]);
}
if (d==2 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Tuesday and your Akan name is "+femaleNames[2]);
}
if (d==3 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Wednesday and your Akan name is "+femaleNames[3]);
}
if (d==4 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Thursday and your Akan name is "+femaleNames[4]);
}
if (d==5 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Friday and your Akan name is "+femaleNames[5]);
}
if (d==6 && gender=="female") {

  document.getElementById("output").innerHTML=("You were born on Saturday and your Akan name is "+femaleNames[6]);
}


}

