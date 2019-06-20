//从表单里面收集数据，然后发送给stripe,然后stripe会返回一个token

//从 https://stripe.com/docs/stripe.js  上复制来的
//en:stripe:
//Your publishable API key identifies your website to Stripe during communications. 
//We’ve pre-filled the example with your test API key. Only you can see this value.
//You will need to replace the test key with your live key for production uses. 
Stripe.setPublishableKey('pk_test_sFn08HHNXVaUKFqGOmBeqAZ3');

var $form = $('#checkout-form');//通过jquery 找到这个表单，然后赋给变量$form

$form.submit(function(event){//调用jquery的submit方法来提交表单  //传入回调函数
$('#charge-error').addClass('hidden');//当提交表单的时候，隐藏 id 为 charge-error 的 div, because at this point, there can't be any error
$form.find('button').prop('disabled', true);//点击提交以后禁用按钮

//从 https://stripe.com/docs/stripe.js  上复制来的
Stripe.card.createToken({ // en:stripe: Request a token from Stripe:	
  number: $('#card-number').val(),
  cvc: $('#card-cvc').val(),
  exp_month: $('#card-expiry-month').val(),
  exp_year: $('#card-expiry-year').val(),
  name: $('#card-name').val()
}, stripeResponseHandler);  //stripeResponseHandler is the callback function when we get the answer from the stripe

//we have send all the request to stripe and waiting for the response.
return false;//means, ok we are done.  but don't continue the form submittion. because at this point we don't want to send the post request to laravel. we haven't valicate the form yet.也就是阻止表单通过post的方式提交给laravel，因为我们还没有验证表单




});  



/*
 备注：en:stripe:  https://stripe.com/docs/custom-form
 You may also pass a form element as the first argument to createToken. The relevant information will be pulled from inputs marked up with the data-stripe attribute, which should be set to one of the values specified above.

 The second argument to Stripe.card.createToken—stripeResponseHandler—is a callback you provide to handle the response from Stripe. The handler is written to accept two arguments:

 status is one of the status codes described in the API docs
 response is of the following form:
 {
   id: "tok_u5dg20Gra", // Token identifier
   card: {...}, // Dictionary of the card used to create the token
   created: 1468448201, // Timestamp of when token was created
   currency: "usd", // Currency that the token was created in
   livemode: false, // Whether this token was created with a live API key
   object: "token", // Type of object, always "token"
   used: false // Whether this token has been used
 }
 Understand that Stripe.card.createToken is an asynchronous call. The function returns immediately and calls stripeResponseHandler when it receives a response from Stripe’s servers. This whole process only takes a few moments, and your customer never leaves your site or even the payment form page during that time.
*/
function stripeResponseHandler(status, response){
	//alert('aaa');  4242424242424242
	if (response.error){//如果有错误的话，就显示错误  //en:stripe:If the card information entered by the user returned an error, display it on the page
		$('#charge-error').removeClass('hidden');//显示id为#charge-error的div
		$('#charge-error').text(response.error.message);//将错误信息放进去//this is the error message being sent by stripe
		$form.find('button').prop('disabled', false);//启用按钮，等用户修改了错误以后可以再次的提交

	}else{//如果没有错误的话，stripe会返回一个token  //en:stripe:If no errors were returned—a single-use token was created successfully, add the returned token to the payment form and submit the form to your server

		// Get the token ID:
    var token = response.id;

    // Insert the token into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));

    // Submit the form:
    // get(0)表示get the form
    // submit()表示send the post request to laravel
    $form.get(0).submit();

	}
}