;jQuery(document).ready(function($) {

	// $('.tab-nav li').click(function(){
	// 	$('.tab-nav li').removeClass('current');
 //  	$('.tab-nav li a').removeClass('current-a');
 //  	$(this).addClass('current');
 //  	$(this).find('.tab-a').addClass('current-a');
 //  	$('.tab-content').css('display','none');
 //  	$('.tab-content').eq($(this).index()).css('display','inline-block');
 //  });
	
	$('#my-info-edit').click(function(){
    $('.my-info-content-wrap').find('input').not("input[name='email']").prop("disabled", false);//email除外，因为email是用做用户名的，唯一的，不能改
    //$('.my-info-content-wrap').find('input[name="email"]').prop("disabled", true);
    $('.my-info-content-wrap').find('select').prop("disabled", false);
    $('.my-info-content-wrap').find('li').addClass('my-info-content-li-active');
  });

  // $('#my-info-firstname-input').focus(function() {
  //   $('.my-info-firstname-label').removeClass('my-info-firstname-label-active');
  // });

  // $('#my-info-firstname-input').blur(function() {    
  //   if ($('#my-info-firstname-input').val() == "") { //判断是否已经有输入，如果没有输入。。。        
  //     $('.my-info-firstname-label').addClass('my-info-firstname-label-active'); 
  //   } else { //如果已经有输入
        
  //   }
  // });

  

  $('.my-info-input').focus(function() {
    $(this).prev().removeClass('label-active');
  });

  $('.my-info-input').blur(function() {    
    if ($(this).val() == "") { //判断是否已经有输入，如果没有输入。。。           
      $(this).prev().addClass('label-active'); 
    } else { //如果已经有输入
        
    }
  });

  //提交个人信息
  //切记，使用ajax提交表单的时候，必须在form里面加上 onsubmit="return false;" ， 否则就不是ajax提交了,在控制器里判断ajax的时候会报错
  //var url = "/user/profile";
  var token = $("input[name='_csrf']").attr("value");
  //var token = $("#_csrf").attr("value");
  //alert(token);
  var options = {  
    //url : rootUrl + url,//默认是用form里面的请求地址  //action="{{route('user.profile')}}"
    type : 'POST',
    dataType: 'JSON',
    //data: { _csrf: token},
    beforeSubmit : function (jqXhr) {
      $('.backend-errors-container').empty();
      $('.backend-errors-container').hide(); 
      // alert(token);
      // jqXhr.setRequestHeader('X-CSRF-TOKEN', token);
        
    },
    success : function (responseText) {
      alert(responseText);
    },
    
    // error: Function( jqXHR jqXHR, String textStatus, String errorThrown )
    // 如果 dataType: 是 JSON 的话，那么 jqXHR 对象里面就有 responseJSON  属性 (就可以这样写 var errors = jqXHR.responseJSON)
    error: function(jqXhr ){//后端验证, 通过ajax提交的时候，如果不通过会返回一个responseJSON
      //If an ajax request don't pass a form request validation, errors will be returned as json. You can catch them in the error callback of jquery ajax method 
      //$(".add_cart_errors").text(data.errmsg);
      //process validation errors here.
      alert(jqXhr.responseText );

      // var acc = []
      // $.each(jqXhr, function(index, value) {
      //     acc.push(index + ': ' + value);
      // });
      // alert(JSON.stringify(acc));

      var errors = jqXhr.responseJSON; //this will get the errors response data.
      //show them somewhere in the markup
      //e.g
      // errorsHtml = '<div class="alert alert-danger"><ul>';
      var errorsHtml = '<ol>';

      $.each( errors, function( key, value ) {
          //errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
          errorsHtml += '<li>' + value + '</li>'; //showing all the errors.
      });
      // errorsHtml += '</ul></di>';
      errorsHtml += '</ol>';
      
      $( '.backend-errors-container' ).show();
      $( '.backend-errors-container' ).html( errorsHtml ); //appending to a <div id="form-errors"></div> inside form    
    }
  };  

  var container = $('div.errors_container');
  $("#edit-my-info").validate({ //备注：如果要用validate来验证的话，form里面就不能写action
    //debug: true,
    errorContainer: container,
    errorLabelContainer: $("ol", container),  //div.errors_container > ol > li
    wrapper: 'li',
    rules: {
              "firstname": "required",
              "email": {
                required: true,
                email:true
              },
              "password": {
                required: true,
                minlength: 5
              },
              "lastname": "required",
              "phone": {
                phoneUS: true
              }            
    },  
    messages: {
                "firstname": "First Name Required",
                "email": {
                  required: "Email Required",
                  email: "Invalid Email Format"
                },
                "password": {
                  required: "Password Required",
                  minlength: "Password at least 6 characters"
                },
                "lastname": "Last Name Required" ,
                "phone": {
                  phoneUS: "Invalid Phone Number Format"
                },   
    },
    highlight : function (element, errorClass) {
      $(element).parent().find('label').css('color', '#ebccd1');
      $(element).addClass('danger');           
    },
    unhighlight : function (element, errorClass) {
      $(element).parent().find('label').css('color', '#2f2f2f');
      $(element).removeClass('danger');
    },
    submitHandler: function(form) {   
      $("#edit-my-info").ajaxSubmit(options);  
      return false;   // required to block normal submit since you used ajax
    }  
  }); 

  // $(".btn-edit-my-info").click(function () {
  //   $('.backend-errors-container').empty();
  //   $('.backend-errors-container').hide(); 
  // });


  // $(".btn-edit-my-info").click(function () {
  //               $.ajax({
  //                   // cache: true,
  //                   type: "POST",
  //                   url: '/profile',//提交的URL
  //                   dataType: 'JSON',
  //                   data: $('#edit-my-info').serialize(), // 要提交的表单,必须使用name属性
  //                   // async: false,                    
  //                   success: function (data) {
  //                       alert('success');//输出提交的表表单
  //                   },
  //                   error: function (request) {
  //                       alert("Connection error");
  //                   }
  //               });
  //           });



  $('.show-password').click(function(){
    var isPassword = $('#my-info-password-input').attr('type');
    if (isPassword == 'password'){
      $('#my-info-password-input').attr('type','text');
      $('.show-password').text('hide');
    }else{
      $('#my-info-password-input').attr('type','password');
      $('.show-password').text('show');
    }    
  });

});