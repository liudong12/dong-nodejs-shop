// $.validator.setDefaults({
//     submitHandler: function() {
//       alert("提交事件! (取消跳过验证)");
//     }
//   });

;jQuery(document).ready(function($) {



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




  //如果要前端验证的话，用这一段，
    ///////////////////////////////////////////////////////////////////
    
    // $("#checkout-step-one-form").validate({ //备注：如果要用validate来验证的话，form里面就不能写action
    //     debug: true,
    //     rules: {
    //             // gender: "required",
    //             "first-name": "required",//所有颜色的input的name属性都叫color-radio，这样就形成了一个组
    //             "last-name": "required"   //所有尺寸的input的name属性都叫size-radio，这样就形成了一个组 
                
    //     },  
    //     messages: {
    //             // gender: "请输入您的名字",
    //             "first-name": "First Name Required",
    //             "last-name": "Last Name Required"   
    //     },
    //     // errorContainer: "ol.errors_log",
    //     // // errorLabelContainer : 'ol.errors_log',
    //     wrapper : 'li',
    //     highlight : function (element, errorClass) {
    //         //$(element).parent().parent().parent().css('border', '1px solid red');
    //         // $(ol.add_cart_errors li).addClass("alert");
    //         // $(ol.add_cart_errors li).addClass("alert-danger");
            
    //     },
    //     //errorClass:"alert ",
    //     unhighlight : function (element, errorClass) {
    //         //$(element).parent().parent().parent().css('border', 'none');
    //     },

    //     errorPlacement: function (error, element) {
    //       $('.errors_log').show();
    //     error.appendTo(element.parent().parent().parent().find('.errors_log'));
        
    // },
    // focusCleanup: true,
    // onsubmit:true,
    // submitHandler:function(form){
    //         alert("提交事件!");   
    //         form.submit();
    //     }   
    // }); 
  ////////////////////////////////////////////////////////////////////////////////////
  ///
  

  var container = $('div.errors_container');
    // 提交时验证表单
    var validator = $("#checkout-step-one-form").validate({
      errorContainer: container,
      errorLabelContainer: $("ol", container),  //div.errors_container > ol > li
      wrapper: 'li',

      rules: {
              "shipping-first-name": {
                required: true
              },
              "shipping-last-name": {
                required: true
              },
              "shipping-address": {
                required: true,
                minlength: 5
              },
              "shipping-city": {
                required: true
              },
              "shipping-state": {
                required: true
              },
              "shipping-zip": {
                required: true,
                minlength: 5
              }
      },
      messages: {
                "shipping-first-name": "First Name Required.",
                "shipping-last-name": "Last Name Required." ,
                "shipping-address": {
                required: "Address Required.",
                minlength: "Address at least 5 characters."
                },  
                "shipping-city": "City Required." ,
                "shipping-state": "State Required." ,
                "shipping-zip": {
                required: "Zip Required.",
                minlength: "Zip at least 5 characters."
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
      }
    });

    // $(".cancel").click(function() {
    //   validator.resetForm();
    // });


});
