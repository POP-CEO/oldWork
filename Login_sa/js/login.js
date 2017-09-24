$(document).ready(function(){
  $('#form').validate({
    rules:{
        email:{
          required:true,
          email:true
        },
		
        password:{
          required:true,
          minlength:8
        }
    },
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
    }
	//End Massages
  });
  });
