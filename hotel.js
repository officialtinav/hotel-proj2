//make variables for name and guest arrays
//delete check in button after time is up
var arrName = [];
var arrGuest = [];
//name  is name inserted
var arrName2 = [];
//guest is list of names
var arrGuest2 = [];
var arrName3 = [];
var arrGuest3 = [];
var arrName4 = [];
var arrGuest4 = [];
var arrName5 = [];
var arrGuest5 = [];
var arrName6 = [];
var arrGuest6 = [];

 //timer to kick out guests for cleaning
  
  function timeOut() {
    setTimeout (function() {
      //make a variable for button
      var button = document.getElementsByTagName('button')[0];
      var parent = button.parentNode;
      //remove check-in button 1
      parent.removeChild(button);
      document.getElementById('cleanUp').innerHTML = "Come back another time, room is being cleaned!";
      //1000 milliseconds in one second = 15000 is 15 seconds
    },15000);
  }
  
  
    function timeOut2() {
    setTimeout (function() {
      var button = document.getElementsByTagName('button')[1];
      var parent = button.parentNode;
        //remove check-in button 3
      parent.removeChild(button);
      document.getElementById('cleanUp2').innerHTML = "Come back another time, room is being cleaned!";
       //1000 milliseconds in one second = 15000 is 15 seconds
    },15000);
  }
  
    function timeOut3() {
    setTimeout (function() {
      var button = document.getElementsByTagName('button')[2];
      var parent = button.parentNode;
        //remove check-in button 3
      parent.removeChild(button);
      document.getElementById('cleanUp3').innerHTML = "Come back another time, room is being cleaned!";
       //1000 milliseconds in one second = 15000 is 15 seconds
    },15000);
  }
  
    function timeOut4() {
    setTimeout (function() {
      var button = document.getElementsByTagName('button')[3];
      var parent = button.parentNode;
        //remove check-in button 4
      parent.removeChild(button);
      document.getElementById('cleanUp4').innerHTML = "Come back another time, room is being cleaned!";
       //1000 milliseconds in one second = 15000 is 15 seconds
    },15000);
  }
  
    function timeOut5() {
    setTimeout (function() {
      var button = document.getElementsByTagName('button')[4];
      var parent = button.parentNode;
        //remove check-in button 5
      parent.removeChild(button);
      document.getElementById('cleanUp5').innerHTML = "Come back another time, room is being cleaned!";
       //1000 milliseconds in one second = 15000 is 15 seconds
    },15000);
  }
  
    function timeOut6() {
    setTimeout (function() {
      var button = document.getElementsByTagName('button')[5];
      var parent = button.parentNode;
        //remove check-in button 6
      parent.removeChild(button);
      document.getElementById('cleanUp6').innerHTML = "Come back another time, room is being cleaned!";
       //1000 milliseconds in one second = 15000 is 15 seconds
    },15000);
  }

function addName() {
  //get name from guest
  var name = document.getElementById('name').value;
 //clear the input box by putting quotation
  document.getElementById('name').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[0].innerHTML = "Room 101";
  
if (arrName.length < 4) { //names less than 6 then waitlist
   arrName.unshift(name);
   arrGuest.unshift(name);
  //create element for li list
  var li = document.createElement('li');
  //take entered name and stores it as liText (list)
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest').innerHTML = "All Guests:" + arrGuest; }

else {
      document.getElementsByTagName('h3')[0].innerHTML = "Room is full!";
      
 
}}
  
function addName2(){
  //get name from guest
  var name = document.getElementById('name2').value;
 //clear the input box by putting quotation
  document.getElementById('name2').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[1].innerHTML = "Room 102";
  
if (arrName3.length < 4) {
   arrName3.unshift(name);
   arrGuest3.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
   //toUTCString is to convert the date to world time standard
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list2');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest2').innerHTML = "All Guests:" + arrGuest3; }

else {//if name is inserted more than four times, do this
      document.getElementsByTagName('h3')[0].innerHTML = "Room is full!";
      
 
}
  
 
}

function addName3(){
  //get name from guest
  var name = document.getElementById('name3').value;
 //clear the input box by putting quotation
  document.getElementById('name3').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[2].innerHTML = "Room 103";
  
if (arrName3.length < 4) {
   arrName3.unshift(name);
   arrGuest3.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
   //toUTCString is to convert the date to world time standard
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list3');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest3').innerHTML = "All Guests:" + arrGuest3; }

else {//if name is inserted more than four times, do this
      document.getElementsByTagName('h3')[0].innerHTML = "Room is full!";
      
 
}
  
 
}
function addName4(){
  //get name from guest
  var name = document.getElementById('name4').value;
 //clear the input box by putting quotation
  document.getElementById('name4').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[3].innerHTML = "Room 104";
  
if (arrName4.length < 4) {
   arrName4.unshift(name);
   arrGuest4.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
   //toUTCString is to convert the date to world time standard
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list4');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest4').innerHTML = "All Guests:" + arrGuest4; }

else {//if name is inserted more than four times, do this
      document.getElementsByTagName('h3')[0].innerHTML = "Room is full!";
     
 
}
  
 
}
function addName5(){
  //get name from guest
  var name = document.getElementById('name5').value;
 //clear the input box by putting quotation
  document.getElementById('name5').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[4].innerHTML = "Room 105";
  
if (arrName5.length < 4) {
   arrName5.unshift(name);
   arrGuest5.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
   //toUTCString is to convert the date to world time standard
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list5');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest5').innerHTML = "All Guests:" + arrGuest5; }

else{//if name is inserted more than four times, do this
      document.getElementsByTagName('h3')[0].innerHTML = "Room is full!";
     
 
}
  
 
}
function addName6(){
  //get name from guest
  var name = document.getElementById('name6').value;
//clear the input box by putting quotation
  document.getElementById('name6').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[5].innerHTML = "Room 106";
  
if (arrGuest6.length < 4) {
   arrName6.unshift(name);
   arrGuest6.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
   //toUTCString is to convert the date to world time standard
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list6');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest6').innerHTML = "All Guests:" + arrGuest6; }

else{//if name is inserted more than four times, do this
      document.getElementsByTagName('h3')[0].innerHTML = "Room is full!";
      return;
 
}
  
 
}

function deleteAll(){ //remove all listed items by putting 0
  arrName.length = 0;
 document.getElementsByTagName('h3')[0].innerHTML = "All Guests Removed";
  var ol = document.getElementById('list');
  while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
    ol.removeChild(ol.firstChild);
 
   
  }
     
    
}

function deleteAll2(){ //remove all listed items by putting 0
  arrName2.length = 0;
  document.getElementsByTagName('h3')[1].innerHTML = "All Guests Removed";
   var ol = document.getElementById('list2');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
   
     }
  
}
function deleteAll3(){ //remove all listed items by putting 0
    arrName3.length = 0;
    document.getElementsByTagName('h3')[2].innerHTML = "All Guests Removed";
     var ol = document.getElementById('list3');
     while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
       ol.removeChild(ol.firstChild);
       }
  
}
function deleteAll4(){ //remove all listed items by putting 0
 arrName4.length = 0;
  document.getElementsByTagName('h3')[3].innerHTML = "All Guests Removed";
   var ol = document.getElementById('list4');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
     
    
}
}
function deleteAll5(){ //remove all listed items by putting 0
  arrName5.length = 0;
  document.getElementsByTagName('h3')[4].innerHTML = "All Guests Removed";
   var ol = document.getElementById('list5');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
     }
}
function deleteAll6(){ //remove all listed items by putting 0
  arrName6.length = 0;
  document.getElementsByTagName('h3')[5].innerHTML = "All Guests Removed";
   var ol = document.getElementById('list6');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
  }
}
function removeName() { //remove the listed name
  arrName.length--;
  document.getElementsByTagName('h3')[0].innerHTML = "Room 101";
  var ol = document.getElementsByTagName('ol')[0];
  var li = ol.childNodes[0];
  ol.removeChild(li)[0];
 


}
function removeName2() { //remove the listed name
  arrName2.length--;
  document.getElementsByTagName('h3')[1].innerHTML = "Room 102";
  var ol = document.getElementsByTagName('ol')[1]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0];
  
}
function removeName3() { //remove the listed name
  arrName3.length--;
  document.getElementsByTagName('h3')[2].innerHTML = "Room 103";
  var ol = document.getElementsByTagName('ol')[2]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0];
  }
function removeName4() { //remove the listed name
  arrName4.length--;
  document.getElementsByTagName('h3')[3].innerHTML = "Room 104";
  var ol = document.getElementsByTagName('ol')[3]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0];
 }
function removeName5() { //remove the listed name
 arrName5.length--;
  document.getElementsByTagName('h3')[4].innerHTML = "Room 105";
  var ol = document.getElementsByTagName('ol')[4]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0];
  }
function removeName6() { //remove the listed name
  arrName6.length--;
  document.getElementsByTagName('h3')[5].innerHTML = "Room 106";
  var ol = document.getElementsByTagName('ol')[5]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0];
 }
 
