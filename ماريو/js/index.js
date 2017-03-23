
// Marue
let time;
var d;
let g=document.getElementById('maro');
let left=g.style.left='0px';
let right=g.style.right='0px';
let down=g.style.bottom='47px';

//block
let b=document.getElementsByClassName('block1');
let leftblock=b[0].style.left='372px';
let topblock=b[0].style.top='404px';

// mareo
function code(event){
// left
window.onscroll = function() {
    window.scrollTo(0,0);
};
 if (event.keyCode ==39){
 d= parseInt(g.style.left);
g.style.left=d+50+'px';
window.scrollTo(d, 0);
}
 // right
 if (event.keyCode ==37){
 d= parseInt(g.style.left);
g.style.left=d-100+'px';

}
// left stop
if (d < 0) {
  g.style.left=0+'px';}
// Up
function up(){
 if (event.keyCode ==38){
 d= parseInt(g.style.bottom);
g.style.bottom=d+100+'px';
}
// Down
 time=setTimeout(function(){if(d <= 147 ){g.style.bottom=47+'px';}},1000);
return;
}
up();



// Hidden Blocks
/* Hidden block1*/
function move(x,y){
var f=document.getElementById('maro');
var left=parseInt(f.style.left);
var top=parseInt(f.style.bottom);
if(top == x && left == y){
setTimeout(function(){  
var s= document.getElementById('blocks1');
s.style.visibility= 'hidden';
},1500);
}
}
// this is the constructor
var t=new move(147,350);
var t0=new move(147,400);

/* Hidden block2*/

function move0(x,y){
var f=document.getElementById('maro');
var left=parseInt(f.style.left);
var top=parseInt(f.style.bottom);
if(top == x && left == y){
setTimeout(function(){  
var s= document.getElementById('blocks2');
s.style.visibility= 'hidden';

},1500);
// move Cookies
var s=document.getElementById('blocks5');
var r=document.getElementById('blocks');
r.style.overflow="visible";
setTimeout(function(){var s=document.getElementById('blocks5');
  s.style.left='-200px';
  s.style.left='-150px';
  s.style.left='-100px';
  s.style.left='-50px';
  s.style.left='0px';
  s.style.bottom=47+'px';
},4000)

}

}
// this is the constructor
var t=new move0(147,450);
var t0=new move0(147,500);

/* Hidden block3 */
function move1(x,y){
var f=document.getElementById('maro');
var left=parseInt(f.style.left);
var top=parseInt(f.style.bottom);
if(top == x && left == y){
setTimeout(function(){  
var s= document.getElementById('blocks3');
s.style.visibility= 'hidden';
},1500);
}

}
// this is the constructor
var t=new move1(147,500);
var t0=new move1(147,550);
/* Hidden block 4 */
function move2(x,y){
var f=document.getElementById('maro');
var left=parseInt(f.style.left);
var top=parseInt(f.style.bottom);
if(top == x && left == y){
setTimeout(function(){  
var s= document.getElementById('blocks4');
s.style.visibility= 'hidden';
},1500);
}

}
// this is the constructor
var t=new move2(147,600);
var t0=new move2(147,650);

/*
function block1(){
 var g=document.getElementById('maro');
 var left=parseInt(g.style.left);
 if(left >= 800){
 g.style.left=800+"px"; 
console.log("Dddd");
 }

};
block1();
*/

function onblock(x,y,z,v){
   var g=document.getElementById('maro');
 var left=parseInt(g.style.left);
 var bottom=parseInt(g.style.bottom);
 if(left >= x && bottom >= y){
  clearTimeout(time);
 g.style.bottom=250+"px"; 
console.log("Dddd");
 } 
 if(left >= z && bottom >= v ){
   g.style.bottom=47+"px";
  setTimeout(function(){if(d <= 147 ){g.style.bottom=47+'px';}},1000);
 }

}
var w=new onblock(250,147,700,250);


function onblock0(x,y,z,v){
   var g=document.getElementById('maro');
 var left=parseInt(g.style.left);
 var bottom=parseInt(g.style.bottom);
 if(left >= x && bottom >= y){
  clearTimeout(time);
 g.style.bottom=244+"px";
console.log("Dddd");
 } 
 /*
 if(left >= z && bottom >= v ){
   g.style.bottom=47+"px";
  setTimeout(function(){if(d <= 147 ){g.style.bottom=47+'px';}},1000);
 }
 */
}
var wt=new onblock0(800,147);


/* End */
}














