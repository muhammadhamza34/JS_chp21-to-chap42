// //chapter 26 -30
// //question 1
// var a =+prompt("Enter an number")
// document.write("number : "+a)
// document.write("<br>round off value : "+Math.round(a));
// document.write("<br>floor value : "+Math.floor(a));
// document.write("<br>ceil value : "+Math.ceil(a));




// //question 2
// var a =+prompt("Enter an number")
// document.write("number : "+a)
// document.write("<br>round off value : "+Math.round(a));
// document.write("<br>floor value : "+Math.floor(a));
// document.write("<br>ceil value : "+Math.ceil(a));



// //question 3
// var a = +prompt("Enter negative number")
// var b = Math.abs(a)
// document.write("The absolute value of "+a+" is " +b)



// //question 4
// var x = Math.floor((Math.random() * 7) + 1);
// document.write("random dice value : "+x)



// //question 5
// var a = Math.floor((Math.random() * 2) + 1);
// if (a==2){
// 	document.write(a+"<br>random coin value : Heads")
// }
// else{
// 	document.write(a+"<br>random coin value : Tails")
// }


// //question 6
// var a = Math.floor((Math.random() * 100) + 1);
// document.write("random number between 1 and 100 : "+a)



// //question 8
// var a = Math.floor((Math.random() * 10) + 1);
// var b =prompt("Input a number")
// if (a==b){
// 	document.write("Congragulation  you gess the same number")
// }




// //chapter 31-34
// //question 1
// var a = new Date();
// document.write(a)





// //question 2
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month : "+arr[b])



// //question 3
// var a = new Date();
// var b =a.getDay()
// var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("today is "+arr[b]);




// //question 4
// var a = new Date()
// var d = a.getDay()
// if (d==0 || d==6){
// 	alert("It’s Fun day")
// }





// //question 5
// var a = new Date();
// var b = a.getDate();
// if (b<16){
// 	alert("First fifteen days of the month")
// }
// else{
// 	alert("Last days of the month")
// }







// //question 6
// var a = new Date()
// document.write("Current Date : "+a)
// var b= a.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
// var min = b/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)





// //question 7
// var a = new Date()
// b=a.getHours()
// if (b < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }



// //question 8
// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)




// //question 9
// var a = new Date("Jun 18, 2015")
// b=a.getTime()
// var today = new Date()
// var tomili = today.getTime()
// var d = tomili-b
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")




// //question 10
//  var start = new Date("Jan 01, 2015")
//  var startsec = start.getTime()
//  var end = new Date("Dec 05, 2015")
//  var endsec = end.getTime()
//  document.write("On reference date "+end+"<br>")
//  var dif = endsec-startsec;
//  document.write(dif/(1000*60)+" seconds had passed since begining of 2015")




// //question 11
// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getHours()
// var d = new Date();
// a=ab-1
// d.setHours(a)
// document.write("1 hour ago, it was "+d)



// //question 12
// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getFullYear()
// var d = new Date();
// a=ab-100
// d.setFullYear(a)
// document.write("100 year back, it was "+d)






// //question 13
// var age = prompt("enter your age")
// var a = new Date()
// var year = a.getFullYear()
// document.write("Your age is "+age)
// dif=year-age
// document.write("<br>Your birth year is "+dif)



// //question 14
// var name ="ABC Customer"
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = arr[b]
// var unit = 410
// var chrg = 16
// var net = unit*chrg
// var late =350
// var gross =net +late

// document.write("<h1>K-Electric Bill </h1>")
// document.write("<br>Customer Name  "+name)
// document.write("<br> Current Month "+month)
// document.write("<br>  Number of units "+unit)
// document.write("<br> Charges per unit "+chrg+"<br>")

// document.write("<br>Net Amount Payable (within Due Date) "+net)
// document.write("<br>Late Payment Surcharge  "+late)
// document.write("<br>Gross Amount Payable (after Due Date)  "+gross)









