 ;jQuery(document).ready(function($){

 $('.tab-nav li').click(function(){
      $('.tab-nav li').removeClass('current');
      $('.tab-nav li a').removeClass('current-a');//
      $(this).addClass('current');
      $(this).find('.tab-a').addClass('current-a');//
     $('.tab-content').css('display','none');
     $('.alert-danger').empty();
     $('.alert-danger').css('display','none');
     // $('.errors_container').empty(); 点击标签是情况另一个标签的警告，还没做
     // $('.errors_container').css('display','none');
     // $('.errors_container').removeClass('danger');
    $('.tab-content').eq($(this).index()).css('display','inline-block')
     });

 $('.email').focus(function(){
      
      // alert('aaa');
     $('.email-label').css('display','inline-block');
     $('.email').attr("placeholder", "");
     $('.email').css("padding-top", "18px");
    
     });

 
 $('.email').blur(function(){
      
      // alert('aaa');
     $('.email-label').css('display','none');
     $('.email').attr("placeholder", "E-Mail");
     $('.email').css("padding-top", "0");
    
     });
 $('.password').focus(function(){
      
      // alert('aaa');
     $('.password-label').css('display','inline-block');
     $('.password').attr("placeholder", "");
     $('.password').css("padding-top", "18px");
    
     });

 
 $('.password').blur(function(){
      
      // alert('aaa');
     $('.password-label').css('display','none');
     $('.password').attr("placeholder", "Password");
     $('.password').css("padding-top", "0");
    
     });



var container = $('div.errors_container').eq(0);
    // 提交时验证表单
    var validator = $("#signin").validate({
      //debug:true,
      errorContainer: container,
      errorLabelContainer: $("ol", container),  //div.errors_container > ol > li
      wrapper: 'li',

      rules: {             
              "signin_email": {
                required: true,
                email:true
              },
              "signin_password": {
                required: true,
                minlength: 5
              }
      },
      messages: {               
                "signin_email": {
                  required: "Email Required",
                  email: "Invalid Email Format"
                },
                "signin_password": {
                  required: "Password Required",
                  minlength: "Password at least 6 characters"
                }
      },
      highlight : function (element, errorClass) {
            $(element).parent().find('label').css('color', '#ebccd1');
            $(element).addClass('danger');
            
      },
      unhighlight : function (element, errorClass) {
            $(element).parent().find('label').css('color', '#2f2f2f');
            $(element).removeClass('danger');
            $(element).empty();
      },
      //focusCleanup: true,
      submitHandler:function(form){
            //alert("提交事件!");   
            form.submit();
      }
    });





 var containerSignup = $('div.errors_container').eq(1);
    // 提交时验证表单
    var validatorSignup = $("#signup").validate({
      //debug:true,
      errorContainer: containerSignup,
      errorLabelContainer: $("ol", containerSignup),  //div.errors_container > ol > li
      wrapper: 'li',

      rules: {             
              "email": {//name属性的命名: signup 在命名时没前缀，signin 有前缀
                required: true,
                email:true
              },
              "password": {
                required: true,
                minlength: 5
              }
      },
      messages: {               
                "email": {
                  required: "Email Required",
                  email: "Invalid Email Format"
                },
                "password": {
                  required: "Password Required",
                  minlength: "Password at least 6 characters"
                }
      },
      highlight : function (element, errorClass) {
            $(element).parent().find('label').css('color', '#ebccd1');
            $(element).addClass('danger');
            
      },
      unhighlight : function (element, errorClass) {
            $(element).parent().find('label').css('color', '#2f2f2f');
            $(element).removeClass('danger');
      },
      //focusCleanup: true,
      submitHandler:function(form){
            //alert("提交事件!");   
            form.submit();
            //$("#signup").submit();
      }
    });


 });