;jQuery(document).ready(function($) {
$('.billing-tel').focus(function() {
//alert('aa');
    $('.billing-tel-label').css('display', 'inline-block'); //显示label
    $('.billing-tel').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.billing-tel').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
    // alert($('.name').attr("placeholder"));

  });


  $('.billing-tel').blur(function() {
    //alert($('.name').val());
    if ($('.billing-tel').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.billing-tel').attr("placeholder", "Phone: (999-999-9999)"); //显示placeholder里面的提示文字
        $('.billing-tel-label').css('display', 'none'); //隐藏label
        $('.billing-tel').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.billing-tel-label').css('display', 'inline-block'); //显示label
        $('.billing-tel').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.billing-tel').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }
  });

  $('.email').focus(function() {

    $('.email-label').css('display', 'inline-block'); //显示label
    $('.email').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.email').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
    // alert($('.name').attr("placeholder"));

  });


  $('.email').blur(function() {
    //alert($('.name').val());
    if ($('.email').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.email').attr("placeholder", "Email:"); //显示placeholder里面的提示文字
        $('.email-label').css('display', 'none'); //隐藏label
        $('.email').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.email-label').css('display', 'inline-block'); //显示label
        $('.email').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.email').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }
  });








  if($(".first-name").val()!=""){
    $('.first-name-label').css('display', 'inline-block'); //显示label
    $('.first-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.first-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
  }

  $('.first-name').focus(function() {

    $('.first-name-label').css('display', 'inline-block'); //显示label
    $('.first-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.first-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
    // alert($('.name').attr("placeholder"));

  });


  $('.first-name').blur(function() {
    //alert($('.name').val());
    if ($('.first-name').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.first-name').attr("placeholder", "First Name"); //显示placeholder里面的提示文字
        $('.first-name-label').css('display', 'none'); //隐藏label
        $('.first-name').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.first-name-label').css('display', 'inline-block'); //显示label
        $('.first-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.first-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }
  });

  if($(".last-name").val()!=""){
    $('.last-name-label').css('display', 'inline-block'); //显示label
    $('.last-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.last-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
  }

  $('.last-name').focus(function() {

    $('.last-name-label').css('display', 'inline-block'); //显示label
    $('.last-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.last-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
    // alert($('.name').attr("placeholder"));

  });


  $('.last-name').blur(function() {
    //alert($('.name').val());
    if ($('.last-name').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.last-name').attr("placeholder", "Last Name"); //显示placeholder里面的提示文字
        $('.last-name-label').css('display', 'none'); //隐藏label
        $('.last-name').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.last-name-label').css('display', 'inline-block'); //显示label
        $('.last-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.last-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }
  });

  if($(".address").val()!=""){
    $('.address-label').css('display', 'inline-block'); //显示label
    $('.address').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.address').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
  }

  $('.address').focus(function() {

    $('.address-label').css('display', 'inline-block'); //显示label
    $('.address').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.address').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.address').blur(function() {

        if ($('.address').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.address').attr("placeholder", "Address"); //显示placeholder里面的提示文字
        $('.address-label').css('display', 'none'); //隐藏label
        $('.address').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.address-label').css('display', 'inline-block'); //显示label
        $('.address').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.address').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });

  if($(".address-line-two").val()!=""){
    $('.address-line-two-label').css('display', 'inline-block'); //显示label
    $('.address-line-two').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.address-line-two').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
  }

  $('.address-line-two').focus(function() {

        $('.address-line-two-label').css('display', 'inline-block'); //显示label
    $('.address-line-two').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.address-line-two').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.address-line-two').blur(function() {

        if ($('.address-line-two').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.address-line-two').attr("placeholder", "Address Line Two"); //显示placeholder里面的提示文字
        $('.address-line-two-label').css('display', 'none'); //隐藏label
        $('.address-line-two').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.address-line-two-label').css('display', 'inline-block'); //显示label
        $('.address-line-two').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.address-line-two').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });


    if($(".city").val()!=""){
    $('.city-label').css('display', 'inline-block'); //显示label
    $('.city').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.city').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
  }

  $('.city').focus(function() {

        $('.city-label').css('display', 'inline-block'); //显示label
    $('.city').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.city').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.city').blur(function() {

        if ($('.city').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.city').attr("placeholder", "City"); //显示placeholder里面的提示文字
        $('.city-label').css('display', 'none'); //隐藏label
        $('.city').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.city-label').css('display', 'inline-block'); //显示label
        $('.city').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.city').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });



  if($(".state").val()!=""){
    $('.state-label').addClass('state-label-small');
  }
  $('.state').focus(function() {


    $('.state-label').addClass('state-label-small');




  });


  $('.state').blur(function() {
    var checkValue = $(".state").val();
    if (checkValue == "") {
      $('.state-label').removeClass('state-label-small');
    }

  });

  $(".state").change(function() {

    var checkValue = $(".state").val();

    if (checkValue == "") {
      $('.state-label').removeClass('state-label-small');
    } else {
      $('.state-label').addClass('state-label-small');
    }

  });

  if($(".zip").val()!=""){
    $('.zip-label').css('display', 'inline-block'); //显示label
    $('.zip').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.zip').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
  }

  $('.zip').focus(function() {

        $('.zip-label').css('display', 'inline-block'); //显示label
    $('.zip').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.zip').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.zip').blur(function() {

        if ($('.zip').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.zip').attr("placeholder", "Zip"); //显示placeholder里面的提示文字
        $('.zip-label').css('display', 'none'); //隐藏label
        $('.zip').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.zip-label').css('display', 'inline-block'); //显示label
        $('.zip').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.zip').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });










  $('.card-name').focus(function() {

        $('.card-name-label').css('display', 'inline-block'); //显示label
    $('.card-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.card-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.card-name').blur(function() {

        if ($('.card-name').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.card-name').attr("placeholder", "Card Holder Name"); //显示placeholder里面的提示文字
        $('.card-name-label').css('display', 'none'); //隐藏label
        $('.card-name').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.card-name-label').css('display', 'inline-block'); //显示label
        $('.card-name').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.card-name').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });

  $('.payment-type').focus(function() {


    $('.payment-type-label').addClass('payment-type-label-small');




  });


  $('.payment-type').blur(function() {
    var checkValue = $(".payment-type").val();
    if (checkValue == "") {
      $('.payment-type-label').removeClass('payment-type-label-small');
    }

  });

  $(".payment-type").change(function() {

    var checkValue = $(".payment-type").val();

    if (checkValue == "") {
      $('.payment-type-label').removeClass('payment-type-label-small');
    } else {
      $('.payment-type-label').addClass('payment-type-label-small');
    }

  });

  $('.card-number').focus(function() {

       $('.card-number-label').css('display', 'inline-block'); //显示label
    $('.card-number').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.card-number').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.card-number').blur(function() {

        


        if ($('.card-number').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.card-number').attr("placeholder", "Credit Card Number"); //显示placeholder里面的提示文字
        $('.card-number-label').css('display', 'none'); //隐藏label
        $('.card-number').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.card-number-label').css('display', 'inline-block'); //显示label
        $('.card-number').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.card-number').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });






$('.card-expiry-month').focus(function() {


    $('.card-expiry-month-label').addClass('card-expiry-month-label-small');




  });


  $('.card-expiry-month').blur(function() {
    var checkValue = $(".card-expiry-month").val();
    if (checkValue == "") {
      $('.card-expiry-month-label').removeClass('card-expiry-month-label-small');
    }

  });

  $(".card-expiry-month").change(function() {

    var checkValue = $(".card-expiry-month").val();

    if (checkValue == "") {
      $('.card-expiry-month-label').removeClass('card-expiry-month-label-small');
    } else {
      $('.card-expiry-month-label').addClass('card-expiry-month-label-small');
    }

  });




  $('.card-expiry-year').focus(function() {


    $('.card-expiry-year-label').addClass('card-expiry-year-label-small');




  });


  $('.card-expiry-year').blur(function() {
    var checkValue = $(".card-expiry-year").val();
    if (checkValue == "") {
      $('.card-expiry-year-label').removeClass('card-expiry-year-label-small');
    }

  });

  $(".card-expiry-year").change(function() {

    var checkValue = $(".card-expiry-year").val();

    if (checkValue == "") {
      $('.card-expiry-year-label').removeClass('card-expiry-year-label-small');
    } else {
      $('.card-expiry-year-label').addClass('card-expiry-year-label-small');
    }

  });
   


$('.card-cvc').focus(function() {

        $('.card-cvc-label').css('display', 'inline-block'); //显示label
    $('.card-cvc').attr("placeholder", ""); //隐藏placeholder里面的提示文字
    $('.card-cvc').css("padding-top", "18px"); //将placeholder里面的提示文字往下移

      });


  $('.card-cvc').blur(function() {

        if ($('.card-cvc').val() == "") { //判断是否已经有输入，如果没有输入。。。
        $('.card-cvc').attr("placeholder", "CVC"); //显示placeholder里面的提示文字
        $('.card-cvc-label').css('display', 'none'); //隐藏label
        $('.card-cvc').css("padding-top", "0"); //将placeholder里面的提示文字往上移
    } else { //如果已经有输入
        $('.card-cvc-label').css('display', 'inline-block'); //显示label
        $('.card-cvc').attr("placeholder", ""); //隐藏placeholder里面的提示文字
        $('.card-cvc').css("padding-top", "18px"); //将placeholder里面的提示文字往下移
           }

      });







$(".is-shipping").change(function() {

  var checkValue = $(".is-shipping").val();
  //alert(checkValue);

  if($('.is-shipping').is(':checked')) {
    // $(".shipping-info").hide();
     $(".shipping-info").slideUp('fast');

           var wait = setInterval(function() {//每隔200毫秒就执行一下下面的函数（判断一下上面的动画是否已经执行完毕）
        if (!$(".shipping-info").is(":animated")) {//判断上面的动画是否已经执行完毕
          clearInterval(wait);//如果已经已经执行完毕，就终止循环
          //执行code--
          $(".shipping-info-summary").slideDown('fast');
        }
      }, 200);
    


    
  }else{
    $(".shipping-info-summary").slideUp('fast');
    

    var wait = setInterval(function() {//每隔200毫秒就执行一下下面的函数（判断一下上面的动画是否已经执行完毕）
        if (!$(".shipping-info-summary").is(":animated")) {//判断上面的动画是否已经执行完毕
          clearInterval(wait);//如果已经已经执行完毕，就终止循环
          //执行code--
          $(".shipping-info").slideDown('fast');
        }
      }, 200);
    
  }

});


// var dd = $(this).next();

      
      
//       if(!dd.is(':animated')){
//         dd.slideToggle();
//         $(this).toggleClass('opened');
//       }


var container = $('div.errors_container');
    // 提交时验证表单
    var validator = $("#checkout-form").validate({
      errorContainer: container,
      errorLabelContainer: $("ol", container),  //div.errors_container > ol > li
      wrapper: 'li',

      rules: {
              "payment-type": {
                required: true
              },
              "card-number": {
                required: true,
                creditcard: true
              },
              "card-expiry-month": {
                required: true
              },
              "card-expiry-year": {
                required: true
              },
              "card-cvc": {
                required: true,
                rangelength:[3,4],
                digits:true //必须输入整数
              },
              "billing-first-name": {
                required: true
              },
              "billing-last-name": {
                required: true
              },
              "billing-address": {
                required: true,
                minlength: 5
              },
              "billing-city": {
                required: true
              },
              "billing-state": {
                required: true
              },
              "billing-zip": {
                required: true,
                minlength: 5
              },
              "billing-tel": {
                required: true,
                phoneUS: true
              },
              "email": {
                required: true,
                email:true
              },
      },
      messages: {
                "payment-type": "Payment Type Required",
                "card-number": {
                  required: "Card Number Required",
                  creditcard: "Invalid Card Format"
                },
                "card-expiry-month": "Card Expiry Month Required" ,
                "card-expiry-year": "Card Expiry Year Required" ,
                "card-cvc": {
                  required: "Card Cvc Required",
                  minlength: "Invalid Format"
                },
                "billing-first-name": "First Name Required",
                "billing-last-name": "Last Name Required" ,
                "billing-address": {
                  required: "Address Required",
                  minlength: "Address at least 5 characters"
                },  
                "billing-city": "City Required" ,
                "billing-state": "State Required" ,
                "billing-zip": {
                  required: "Zip Required",
                  minlength: "Zip at least 5 characters"
                },
                "billing-tel": {
                  required: "Phone Number Required",
                  phoneUS: "Invalid Phone Number Format"
                },
                "email": {
                  required: "Email Required",
                  email: "Invalid Email Format"
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
            //form.submit();  加上以后会提交2次
      }
    });

});