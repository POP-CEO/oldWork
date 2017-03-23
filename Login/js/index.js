function check(){ //This is the main function 
var fristname=document.getElementById('fname');//input frist name
var fname=fristname.value; // value input frist name
var lastname=document.getElementById('lname');//input last name
var lname=lastname.value;// value input last name
var Email=document.getElementById('Email'); //input  Email
var email=Email.value;//value input Email
var phone=document.getElementById('phone'); //input Phone
var phones=phone.value;//value input phone
var TextArea0=document.getElementById('field5');//input TextArea
var Textvalue=TextArea0.value; //value input TextArea
var error="true"; //Value Check the error
// Email
function ChecEmail() {
//On Focucs
Email.onfocus=function(){
Email.classList.remove("error");	
}	
if(email == "" || email== null ){
Email.classList.add("error","input-focus");
Email.value="";
Email.setAttribute("placeholder","Error Youe Email is noe ")	
error="false"; 
};
 
if (email.indexOf('@') < 0 ){ 
Email.classList.add("error","input-focus");
Email.value="";
Email.setAttribute("placeholder","Error Youe Email is not have @ ")	
error="false"; 
}
if (email.lastIndexOf('.com') < 0 ){
Email.classList.add("error","input-focus");
Email.value="";
Email.setAttribute("placeholder","Error Youe Email is not have .com ")	
error="false";	
}
return error;
};

//First Name
function CheckFullname(){
//On Focucs
fristname.onfocus=function(){
fristname.classList.remove("error");	
}
//Not Null	
if(fname == "" || fname== null ){
fristname.classList.add("error","input-focus");
fristname.value="";
fristname.setAttribute("placeholder","Error Your name pleas! ")	;
error="false"; 
};
//Not Have [A - Z]
if (fname.search(/[A-Z]/) > 0  ){
fristname.classList.add("error","input-focus");
fristname.value="";
fristname.setAttribute("placeholder","Error Your name masnt have char [A-Z] ");	
error="false";
}
//Not Have [@] 
if (fname.search(/[@]/gi) >0 ){
fristname.classList.add("error","input-focus");
fristname.value="";
fristname.setAttribute("placeholder","Error Your name masnt have char [@] ");	
error="false";	
}
//Not Have Number
if (fname.search(/[0-9]/gi) >0 ){
fristname.classList.add("error","input-focus");
fristname.value="";
fristname.setAttribute("placeholder","Error Your name masnt have char [0-9] ");	
error="false";	
}

//the length of char is >50
if (fname.length > 50 ){
fristname.classList.add("error","input-focus");
fristname.value="";
fristname.setAttribute("placeholder","Error Your name masnt be 50 char ");	
error="false";	
}
};

// Last name
function checkLastname(){
//On Focucs
lastname.onfocus=function(){
lastname.classList.remove("error");	
}	
//Not Null	
if(lname == "" || lname== null ){
lastname.classList.add("error","input-focus");
lastname.value="";
lastname.setAttribute("placeholder","Error Your name pleas! ")	;
error="false"; 
};

//Not Have [A - Z]
if (lname.search(/[A-Z]/) > 0  ){
lastname.classList.add("error","input-focus");
lastname.value="";
lastname.setAttribute("placeholder","Error Your name masnt have char [A-Z] ");	
error="false";
}

//Not Have [@] 
if (lname.search(/[@]/gi) >0 ){
lastname.classList.add("error","input-focus");
lastname.value="";
lastname.setAttribute("placeholder","Error Your name masnt have char [@] ");	
error="false";	
}

//Not Have Number
if (lname.search(/[0-9]/gi) >0 ){
lastname.classList.add("error","input-focus");
lastname.value="";
lastname.setAttribute("placeholder","Error Your name masnt have char [0-9] ");	
error="false";	
}

//the length of char is >50
if (lname.length > 50 ){
lastname.classList.add("error","input-focus");
lastname.value="";
lastname.setAttribute("placeholder","Error Your name masnt be 50 char ");	
error="false";	
}
};

 //Phone 
function phoneNumber(){
//On Focucs
phone.onfocus=function(){
phone.classList.remove("error");	
}
//Not Null	
if(phones == "" || phones== null ){
phone.classList.add("error","input-focus");
phone.value="";
phone.setAttribute("placeholder","Error Your phone pleas! ")	;
error="false"; 
};
//Not Have Any [a-z][A-Z]
if(phones.search(/[A-Z]/) > 0 || phones.search(/[a-z]/) > 0 ){
phone.classList.add("error","input-focus");
phone.value="";
phone.setAttribute("placeholder","Error Your name masnt have char [A-Z] OR [a-z] ");	
error="false";
}

//Not Have [@] 
if (phones.search(/[@]/gi) >0 ){
phone.classList.add("error","input-focus");
phone.value="";
phone.setAttribute("placeholder","Error Your name masnt have char [@] ");	
error="false";	
}

//the length of char is >12
if (phone.length > 12 ){
phones.classList.add("error","input-focus");
phones.value="";
phones.setAttribute("placeholder","Error Your name masnt be 12 char ");	
error="false";	
}
console.log("this is phone");
};

//Text Area 
function Textarea(){
//On Focucs
TextArea0.onfocus=function(){
TextArea0.classList.remove("error");	
}
//Not Null	
if(Textvalue == "" || Textvalue== null ){
TextArea0.classList.add("error","input-focus");
TextArea0.value="";
TextArea0.setAttribute("placeholder","Error Your Text Please ")	;
error="false"; 
};	

//the length of char is >350
if (Textvalue.length > 350 ){
TextArea0.classList.add("error","input-focus");
TextArea0.value="";
TextArea0.setAttribute("placeholder","Error Your name masnt be 50 char ");	
error="false";	
}	

};

//Call all function 

ChecEmail();
CheckFullname();
checkLastname();
phoneNumber();
Textarea();
//Stop Submit if see some Error 
if(error=="false"){
return false;

}	

};