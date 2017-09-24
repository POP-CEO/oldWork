/*icon Eye*/
$('#icons').click(function() {
  $("#icons").toggleClass('glyphicon-eye-close');
  if($("#icons").hasClass("glyphicon-eye-close")==true){
  $("#inputpassword").attr("type","text");}else{$("#inputpassword").attr("type","password");};})
/*End Eye*/

//Event
$("#submit").click(function(event) {
 event.preventDefault();
checkEmail();
checkpass();
});
/*Click*/
$('#inputEmail').on("click",function(){
  $("#inputEmail").parent().removeClass("has-error");
  $("#inputEmail").parent().next().text(" ").removeClass('bg-danger text-right text-danger h4')
});
/*Click*/
$('#inputpassword').on("click",function(){
  $("#inputpassword").parent().removeClass("has-error");
  $("#inputpassword").parent().next().text(" ").removeClass('bg-danger text-right text-danger h4')
});

function checkEmail(){
/*If input Empyt*/
if($('#inputEmail').val()=="" ||$('#inputEmail').val()==null ||$('#inputEmail').val().length<=0){
  $("#inputEmail").parent().addClass("has-error");
  $("#inputEmail").parent().next().text("من فضلك ادخل البريد الالكتروني الصحيح").addClass('bg-danger text-right text-danger h4');
}
/*If input not have { @ }*/
if($('#inputEmail').val().indexOf('@') <0 ){
  $("#inputEmail").parent().addClass("has-error");
  $("#inputEmail").parent().next().text("'\@\'  من فضلك ادخل البريد الالكتروني الصحيح").addClass('bg-danger text-right text-danger h4');
}
/*If input not have { . || com }*/
if($('#inputEmail').val().indexOf('.') <0 ||$('#inputEmail').val().indexOf('com') <0 ){
  $("#inputEmail").parent().addClass("has-error");
  $("#inputEmail").parent().next().text("'\.\', \'com\'  من فضلك ادخل البريد الالكتروني الصحيح").addClass('bg-danger text-right text-danger h4');
}
/*If input not have { . || com }*/
var re = /\W|\s+^@/igm;
var found = $('#inputEmail').val().match(re);
console.log(found);



}

/*
switch ($('#inputEmail').val()) {
case "":
case null:
case length<=0:

      $("#inputEmail").parent().addClass("has-error");
      $("#inputEmail").parent().next().text("من فضلك ادخل البريد الالكتروني الصحيح").addClass('bg-danger text-right text-danger h4');
break;
default:
  console.log("wwww");
  break;
}
*/

function checkpass(){
if($('#inputpassword').val()=="" ||$('#inputpassword').val()==null ||$('#inputpassword').val().length<=0 ){
 $("#inputpassword").parent().addClass("has-error");
 $("#inputpassword").parent().next().text("من فضلك ادخل الرقم السري ").addClass('bg-danger text-right text-danger h4');
 }else(console.log("wow"))
}
