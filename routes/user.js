//将所有前缀为 /user 的路由都写到这里  localhost:3000/user
var express = require('express');
var router = express.Router();
var csrf = require('csurf');//npm install csurf --save
var passport = require('passport');

var Order = require('../models/order');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection); //apply this middleware (csrfProtection) to this router to protect my routes here. with this, i am now telling express, all the routers included in this router package here (第一个 router 对象) (router.use 里面的router) package here, should be protected by csrf protection (csrfProtection).

// router.get('/profile', isLoggedIn, function (req, res, next) { //More than one callback function can handle a route (make sure you specify the next object)
//     //next函数主要负责将控制权交给下一个中间件，如果当前中间件没有终结请求，并且next没有被调用，那么请求将被挂起，后边定义的中间件将得不到被执行的机会。
//     //从上边的描述我们已经知道，next函数主要是用来确保所有注册的中间件被一个接一个的执行，那么我们就应该在所有的中间件中调用next函数，但有一个特例，如果我们定义的中间件终结了本次请求，那就不应该再调用next函数，否则就可能会出问题
//     //注意：app.use注册的中间件，如果path参数为空，则默认为"/"，而path为"/"的中间件默认匹配所有的请求。
//     Order.find({user: req.user}, function(err, orders) {//find the order for the logged in user
//         if (err) {
//             return res.write('Error!');
//         }
//         var cart;//next, we need to get the cart from the order
//         orders.forEach(function(order) {//每遍历一次或没获取一次元素，就执行一次传入的这个函数 function(order)
//             cart = new Cart(order.cart);//create a cart based on the cart object in datavase
//             order.items = cart.generateArray();
//         });
//         res.render('user/profile', { orders: orders });
//     });
// });

router.get('/profile', isLoggedIn, function (req, res, next) { //console.log("aaa");
    var scripts = ['/js/jquery.form.js', '/js/user.profile.js', '/js/folding.js'];
    var css = ['/css/user.profile.css'];
    
    var page = "my-info";
    var orderSn = null;
    if (req.query.page){
        page = req.query.page;
    }
    if (req.query.orderSn){
        orderSn = req.query.orderSn;
    }
      
    var user = req.user;
    //获取与这个用户有关的所有的订单
    Order.find({user: req.user}, function(err, orders) {//find the order for the logged in user
        if (err) {
            return res.write('Error!');
        }
        var cart;//next, we need to get the cart from the order
        orders.forEach(function(order) {//每遍历一次或（获取一次order），就执行一次传入的这个函数 function(order)
            var cart = new Cart(order.cart);//create a cart based on the cart object in database
            order.items = cart.generateArray();//cart本来是对象类型，这里我们将它转换成数组类型，然后保存在order.items
        });
        // console.log("req.user");
        // console.log(req.user);
        // console.log("orders");
        // console.log(orders);
        if (orderSn == null){//判断参数 orderSn 是否有值 //如果为空，表示不是 order-details 
            //如果没有传入订单编号表示只要显示用户信息就可以了。page="my-info"
            res.render('user/profile', { scripts: scripts, css: css, csrfToken: req.csrfToken(), user: user, myOrders: orders, page: page });
        }else{//如果传入订单编号，表示是 order-details 
            Order.find({order_sn: orderSn}, function(err, order) {//通过订单的编号找到这个订单 //返回的order是数组，但是这个数组只有一个元素
                if (err) {
                    return res.write('Error!');
                } //console.log(Object.prototype.toString.call(order)); //[object Array] //返回的order是数组，但是这个数组只有一个元素
                var cart = new Cart(order[0].cart);//create a cart based on the cart object in datavase
                order.items = cart.generateArray();
                //var myOrder = order;
                var productsInThisOrder = order.items; //得到这个订单里面所有产品的集合 //数组类型


                // foreach($productsInThisOrder as $product){
                //     $product->smallRetinaImageUrl =   $product->imageUrl . '/'  . $product->product_sn . 'view1' . $product->smallRetina  . $product->imageType;
                //     $product->product_quality = $product->pivot->product_quality;
                //     $product->price = $product->pivot->product_price;
                // } 
                
                console.log(Object.prototype.toString.call(productsInThisOrder)); //[object Array]
                console.log(productsInThisOrder);
                for (var i = 0; i < productsInThisOrder.length; i++) {//遍历这个数组 //得到每个单独的item(看cart.js) productsInThisOrder[i] === 每个单独的item
                    productsInThisOrder[i].smallRetinaImageUrl =   productsInThisOrder[i].item.imageUrl + '/'  + productsInThisOrder[i].item.product_sn + 'view1' + productsInThisOrder[i].item.smallRetina  + productsInThisOrder[i].item.imageType;
                    productsInThisOrder[i].title =   productsInThisOrder[i].item.title; //将内层product对象里面的属性转到外层 order.items上面
                    //productsInThisOrder[i].product_quality = productsInThisOrder[i].qty;
                    productsInThisOrder[i].price = productsInThisOrder[i].item.price;
                }
                //dd($productsInThisOrder);
                //return view('user.profile',['user' => $user, 'myOrder' => $myOrder, 'page' => $page, 'productsInThisOrder' => $productsInThisOrder]);
                res.render('user/profile', { scripts: scripts, css: css, csrfToken: req.csrfToken(), user: user, myOrder: order[0], page: page, productsInThisOrder: productsInThisOrder });
            });
                      
            // foreach ($myOrder->products as $product)
            // {
            //     dd($product->pivot->product_price);//得到 order_product 表里面的 product_price 字段的值
            // }                       
        }
    });
});

router.post('/profile', isLoggedIn, function (req, res, next) { //console.log("aaa");
    if(req.xhr){ //判断是否 ajax 提交
                   
        


        //后端验证
        req.assert('firstname', 'First Name required').notEmpty();
        req.assert('password', 'Password required').notEmpty();
        req.assert('lastname', 'Last Name required').notEmpty();
        req.assert('email', 'Email required').notEmpty();
        
        
        var errors = req.validationErrors();
        if (errors) {
            // var productId = req.body.id;
            // req.session.errors = errors; 
            // return res.redirect('http://localhost:3000/product-detail/' + productId);
                      
            // res.send(errors);            
            //return;
        } 
        else {
            // normal processing here
            var firstName = req.body.firstname; 
            var password = req.body.password;
            var lastName = req.body.lastname;
            var email = req.body.email; 
            var gender = req.body.gender;

            if (req.user){  
                var user = req.user;
            }else{
                var response = {};
                response.msg = 'Illegal Access';
                res.json(response);
            }

            user.firstName =  firstName;
            user.lastName =  lastName;
            user.password =  user.encryptPasswordCrypto(password);
            
            user.email =  email;
            user.gender =  gender;

            user.save();//保存到数据库里面

            var response = {};
            response.msg = 'Modified Successfully'; 
            res.json(response);
        }        
    }
    else{ 
        var response = {};
        response.msg = 'Not Ajax Request';
        res.json(response);
    }  
});


// Log Out

// Passport exposes a logout() function on req (also aliased as logOut()) that can be called from any route handler which needs to terminate a login session. 
// Invoking logout() will remove the req.user property and clear the login session (if any).
router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function (req, res, next) { //将自定义的中间件应用于所有的请求
    next();
});

//本来的写法
// router.get('/signup', function (req, res, next) {
//     var messages = req.flash('error');
//     res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
// });

//新的写法
router.get('/signup', function (req, res, next) {
    var scripts = ['/js/user.signin.js'];
    var css = ['/css/user.signin.css'];
    var messages = req.flash('error');
    res.render('user/signinsignup', {scripts: scripts, css: css, csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0, isSigninSignup: 'signup'});
});

router.post('/signup', passport.authenticate('local.signup', {//apply the Strategy //passport.authenticate 是中间件
    failureRedirect: '/user/signup',
    failureFlash: true
}), function (req, res, next) {
    req.session.logInStatus = true;
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/user/profile');
    }
});

//本来的写法
// router.get('/signin', function (req, res, next) {//在回调函数里面传入req, res, next。
//     var messages = req.flash('error');//获取错误messages
//     res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});//将数据传到模板
// });

//新的写法
router.get('/signin', function (req, res, next) {//在回调函数里面传入req, res, next。
    var scripts = ['/js/user.signin.js'];
    var css = ['/css/user.signin.css'];
    var messages = req.flash('error');//获取错误messages
    res.render('user/signinsignup', {scripts: scripts, css: css, csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0, isSigninSignup:'signin'});//将数据传到模板
});


//这里的passport.authenticate(‘local’)就是中间件，若通过就进入后面的回调函数，并且给res加上res.user，若不通过则默认返回401错误。
/*
authenticate()方法有3个参数，第一是name，即验证策略的名称，第二个是options，包括下列属性：
session：Boolean。设置是否需要session，默认为true
successRedirect：String。设置当验证成功时的跳转链接
failureRedirect：String。设置当验证失败时的跳转链接
failureFlash：Boolean or String。设置为Boolean时，express-flash将调用use()里设置的message。设置为String时将直接调用这里的信息。
successFlash：Boolean or String。使用方法同上。
第三个参数是callback。注意如果使用了callback，那么验证之后建立session和发出响应都应该由这个callback来做，passport中间件之后不应该再有其他中间件或callback。
 */
router.post('/signin', passport.authenticate('local.signin', {//当路由接收到post类型的'/signin'请求时，调用在passport.js里面定义好的Strategy 'local.signin' 来进行登录验证
    failureRedirect: '/user/signin', //设置当验证失败时的跳转链接
    failureFlash: true  //Boolean or String。设置为Boolean时，express-flash将调用use()里设置的message。设置为String时将直接调用这里的信息。
}), function (req, res, next) {//this is normal middleware function, which will be excuted whenever the passport(中间件，参数2) is passed successfully. //如果没有通过前面那个中间件的验证，就会跳转到 (failureRedirect: '/user/signin'),然后不会去执行这个中间件(参数3)
    req.session.logInStatus = true;
    if (req.session.oldUrl) {//判断是否有oldUrl
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;//清空session里面的oldUrl字段 //注意：不能放在下面这句的后面，因为跳转了以后就不能操作req对象了
        res.redirect(oldUrl);//跳转到被强制登录前的那个oldUrl
    } else {//如果没有oldUrl，就跳转到 /user/profile
        res.redirect('/user/profile');
    }
});

module.exports = router;

function isLoggedIn(req, res, next) {//this is my own middleware //将这个中间件应用在 '/profile'
    if (req.isAuthenticated()) {//isAuthenticated是passport里面的方法
        return next(); //继续
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}