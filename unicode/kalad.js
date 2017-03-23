function unicode(){
var x=document.getElementById('text1').value;
var i=0;
for(i=0; ;){
var d=new Array();

if(i <= x.length)
{	
var k=x.charCodeAt(i)
d.push(k);
}

else if(i >= x.length)
{
break;
};
d.toString();
var r=document.createTextNode(d);
var z=document.getElementById('text0');
z.appendChild(r);
i++;
};
};

function code(){
var x=document.getElementById('text1').value;
var i=0;
for(i=0; ;){
var d=new Array();

if(i <= x.length)
{	
var k=x.charCodeAt(i);
d.push(k);
d.toString();
console.log(d);
var m=String.fromCharCode(d);
console.log(m);
}

else if(i >= x.length)
{
break;
};

var r=document.createTextNode(m);
var z=document.getElementById('text0');
z.appendChild(r);
i++;
};
alert(d);
};