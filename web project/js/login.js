$(document).ready(function(){
  // placeholder
  $('#inputEmail').focus(function(){
    $(this).attr({placeholder:" "});
  }).blur(function(){
    $('#inputEmail').attr({placeholder:"الايميل "});
  });

    $('#inputpassword').focus(function(){
    $(this).attr({placeholder:" "});
  }).blur(function(){
    $('#inputpassword').attr({placeholder:"كلمة السر"});
  });

                      /*--------------------*/
                      // .....  Login  .....
                      /*--------------------*/

  $('[data-select="login"]').on('click keydown keypress ',function(){
  /*--------------------*/  
  // validate function 
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
/*Chech function console.log('second function');*/
check();
}})});

                          /*--------------------*/
                          // ..... forget  .....
                          /*--------------------*/

$('[data-select="forget"]').on('click keydown keypress', function () {
  /*--------------------*/
  // validate function
  /*--------------------*/
    $("#form").validate({
    rules:{
        email:{
          required:true,
          email:true
        }},          
  //Massages Error
   messages: {
      email:{
      required:"من فضلك ادخل بريدك الالكترونى",
      email:"بريدك الالكترونى غير صحيح"
    }
    },
  submitHandler: function(form) {
  check();
}
})});

                        /*--------------------*/
                        // ..... reset  .....
                        /*--------------------*/
$('[data-select="reset"]').on('click', function () {
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
    $('#form').validate({
    rules:{
        password:{
          required:true,
          minlength:8
        },
        password_a:{
      equalTo: "#inputpassword"
    }
    },
  //Massages Error
   messages: {
      password:{
      required:"من فضلك ادخل الرقم السري الجديد",
      minlength:"لا يقل الرقم السري عن 8 احرف"
    },
    password_a:{
      equalTo:"ادخل نفس الرقم السري "
    }
    },
 submitHandler: function(form) {
/*Chech function console.log('second function');*/
  check();
  
}});});


                            /*--------------------*/
                            /*    adapter_Check    */
                            /*--------------------*/

function check(){
   this.data={
  email:$('#inputEmail').val(),
 password:$('#inputpassword').val()
 }
 /*Chech function console.log(data);*/
 this.datas = JSON.stringify(data);
 /*Chech function console.log(datas);*/ 
 /*Chech function console.log('three function');*/
 basicajax();
 ajaxForm(); 
};

/*--------------------*/
// setup_Ajax function 
/*--------------------*/
function basicajax(){
  $.ajaxSetup({
  url:'form.php',
  type:"post",
  async:'true',
  cache:'true',
  dataType:"json",
  timeout:"5000",
      contentType:"application/json",
    CrossDomain:true,
  beforeSend:function(xhr){
  $('#submit').button('loading');
  console.log(xhr);
},
  success:function(result,status,xhr){
    $('#submit').button('loading');
    console.log("done man")
  },
  error:function(jqXHR,exception){
    $('#submit').button('reset');
            var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
          console.log(exception)
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        $('[data-error="error"]').text(msg).removeClass('hidden');
  

  }
})

}

/*--------------------*/
// ajax function 
/*--------------------*/

function ajaxForm(){ 
$.ajax({
  data:datas
}) 
};

//End Document 
});