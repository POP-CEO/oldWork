$(document).ready(function(){ 
  $('#submit').on('click keydown',function(){
  /*--------------------*/
  // Button Loading .....
  /*--------------------*/
    (function(){
  $('#submit').on('click', function () {
  var $btn = $(this).button('loading')
  })})();
  /*--------------------*/
  // First function Chech
  /*--------------------*/
    $("#form").validate({
    rules:{
        email:{
          required:true,
          email:true
        },
        password:{
          required:true,
          minlength:8}},          
  //Massages Error
   messages: {
      password: {
        required: "من فضلك ادخل الرقم السري ",
        minlength: "لا يقل الرقم السري عن 8 ارقام"
      },
      email:{
      required:"من فضلك ادخل بريدك الالكترونى",
      email:"بريدك الالكترونى غير صحيح"
    }
    },
  submitHandler: function(form) {
  console.log('second function');
  check();
}
})})});


/*--------------------*/
/*After Success Check */
/*--------------------*/
function check(){
 this.data={
 email:$('#inputEmail').val(),
 password:$('#inputpassword').val(),
 };
 this.datas = JSON.stringify(data);
 console.log(datas);
 console.log('three function');
 basicajax();
 ajaxForm(); 
};
/*--------------------*/
// setup function 
/*--------------------*/
function basicajax(){
  $.ajaxSetup({
  url:'form.php',
  type:"post",
  async:'true',
  cache:'true',
  dataType:"json",
  contentType:"application/x-www-form-urlencoded",
  beforeSend:function(){
  $('#submit').on('click', function () {
  var $btn = $(this).button('loading')
  });  
}})

}
/*--------------------*/
// ajax function 
/*--------------------*/
function ajaxForm(){ 
$.ajax({
  data:datas
}).done(function(e){
  console.log("done man ")
}).fail(function(jqxhr,status){
  console.log("Error "+status)
})
setTimeout(function(){
   $('#submit').button('reset')
 },1000)  

 console.log('four function');
};



