var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');
var Size = require('../models/size');
var Order = require('../models/order');

var Hbs = require('hbs');

/* GET home page. */
router.get('/', function (req, res, next) {  
    var successMsg = req.flash('success')[0];
    Product.find(function (err, docs) { //调用 Product model 里面的 find 方法（异步）（返回一个数组，数组里面是一个一个对象，每个对象是一条数据），查询完以后执行回调函数 //成功返回docs，失败返回err
        var productChunks = []; //产品组//productChunks数组里面的每个元素也是一个数组，每个数组里面有3到1个对象
        var chunkSize = 4;  //4个一组
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));//切数组docs，从0开始截，截3个元素放到新的数组productChunks里面
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id; //获取id
    var cart = new Cart(req.session.cart ? req.session.cart : {});//a new cart will be created each time i add a new item. pass in the old cart, if i do have a old cart.
    //req.session.cart 表示 check if the cart property exists.
    //if it does exists, then i will pass my req.session.cart (old cart)
    //otherwise, pass in an empty js object


    Product.findById(productId, function(err, product) {//要是没找到返回err，要是找到就返回product
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);//传入找到以后返回的product，和product的id字段
        req.session.cart = cart; //store the cart in the session. the session will be saved as soon as the response was sent back.
        console.log(req.session.cart);
        res.redirect('/');
    });
});

router.get('/product-detail/:id', function(req, res, next) { 
    var productId = req.params.id; //获取id
    
    var promise = Product.findById(productId, function(err, product) {//要是没找到返回err，要是找到就返回product
        if (err) {
           return res.redirect('/');
        }
    });

    
    promise.then(function (product) {
        Product.
        findOne({ _id: product._id }).
        populate('sizes'). // only works if we pushed refs to children
        exec(function (err, product) {
            if (err) return err;                              
             
            var sizes = product.sizes;

            product = product.toObject(); //Mongoose Models inherit from Documents, which have a toObject() method. 将 Document 类型转换成对象类型
            product.largeImageUrl =         product.imageUrl + '/'  + product.product_sn + 'view1' + product.large        + product.imageType;
            product.largeRetinaImageUrl =   product.imageUrl + '/'  + product.product_sn + 'view1' + product.largeRetina  + product.imageType;
            product.mediumImageUrl =        product.imageUrl + '/'  + product.product_sn + 'view1' + product.medium       + product.imageType;
            product.mediumRetinaImageUrl =  product.imageUrl + '/'  + product.product_sn + 'view1' + product.mediumRetina + product.imageType;
            product.smallImageUrl =         product.imageUrl + '/'  + product.product_sn + 'view1' + product.small        + product.imageType;
            product.smallRetinaImageUrl =   product.imageUrl + '/'  + product.product_sn + 'view1' + product.smallRetina  + product.imageType;
            product.standardImageUrl =      product.imageUrl + '/'  + product.product_sn + 'view1' + product.standard     + product.imageType;
                                                           
            
            //生成 viewImageUrl 字段 （数组类型）
            var i;
            var viewImageUrl = [];
            for (i = 1; i < product.view_number+1; i++) {
                //product.eval('view' + i + 'ImageUrl') =  product.imageUrl + '/'  + product.product_sn + 'view' + i + product.thumbnail + product.imageType;
                product['view' + i + 'ImageUrl'] =  product.imageUrl + '/'  + product.product_sn + 'view' + i + product.thumbnail + product.imageType;        
                viewImageUrl[i] = product['view' + i + 'ImageUrl'];//生成数组
                product.viewImageUrl = viewImageUrl;//将数组保存到 $product->viewImageUrl
            }

            //生成 viewImageId 字段 （数组类型）
            var j;
            var viewImageId = [];
            for(j = 1; j < product.view_number+1; j++){
                product['view' + j + 'ImageId'] =  product.product_sn + 'view' + j;
                viewImageId[j] = product['view' + j + 'ImageId'];
                product.viewImageId = viewImageId;       
            }

            Product.
            find({ product_style: product.product_style }).
            exec(function (err, brothers) {
                if (err) return err;
                for (var i in brothers) {
                  brothers[i].colorImageUrl = brothers[i].imageUrl + '/' + brothers[i].product_sn + brothers[i].colorImage + brothers[i].imageType;
                }  
                //console.log('product obj: ', product);
                // console.log('brothers obj: ', brothers);
                
                var node = [
                        {name: 'express', url: 'http://expressjs.com/'},
                        {name: 'hapi', url: 'http://spumko.github.io/'},
                        {name: 'compound', url: 'http://compoundjs.com/'},
                        {name: 'derby', url: 'http://derbyjs.com/'}
                ]

            
                if(req.xhr){ //一个简便属性，如果请求由 Ajax 发起将会返回 true 。 //https://findwisdom.github.io/2016/10/23/Node-Express-request-response/
                    //return response()->json(['view' => view('shop.product-detail-part',['product' => $product, 'brothers' => $brothers, 'sizes' => $sizes])->render()]);              
                    //res.setHeader('Content-Type', 'application/json');
                    //var data = {};
                    //res.render('shop/product-detail-part', {product: product, brothers: brothers, sizes: sizes});
                    // console.log('body: ' + JSON.stringify(data));
                    // res.send(JSON.stringify(data, null, 3));
                    
                    res.render('shop/product-detail-part', 
                               {product: product, 
                                brothers: brothers, 
                                sizes: sizes,
                                helpers: {
                                            foo: function () { return 'FOO!'; },
                                            bar: function () { return 'BAR!'; },
                                            table: function(data) {
                                                var str = '<table>';
                                                for (var i = 0; i < data.length; i++ ) {
                                                    str += '<tr>';
                                                    for (var key in data[i]) {
                                                        str += '<td>' + data[i][key] + '</td>';
                                                    };
                                                    str += '</tr>';
                                                };
                                                str += '</table>';

                                                return new Hbs.SafeString (str);
                                            },
                                            imglist: function(product) {//product=data
                                                var str = '';
                                                for (var i = 2; i < product.view_number + 1; i++ ) {
                                                    str += '<li class="imglist' + ' ' + 'imglist' + i + '" ' + 'data-id="' + product.viewImageId[i] + '">';
                                                    
                                                    str += '<img class="simg' + ' ' + 'simg' + i + '" ' + 'alt="加载中..."' + ' ' + 'src="' + product.viewImageUrl[i] + '"' + ' ' + 'data-src="' + product.viewImageId[i] + '">';
                                                
                                                    str += '</li>';
                                                };
                                                
                                                return new Hbs.SafeString (str);
                                            }                                    
                                            // concat: function() {
                                            //     var outStr = '';
                                            //     for(var arg in arguments){
                                            //         if(typeof arguments[arg]!='object'){
                                            //             outStr += arguments[arg];
                                            //         }
                                            //     }
                                            //     return outStr;
                                            // }
                                }
                               }, function(err, html){
                                    var data = {};
                                    data.view = html;
                                    //console.log('body: ' + data.view);
                                    res.json(data);
                                });
                }else{  //如果不是ajax请求             
                    res.render(
                               'shop/product-detail', 
                               {
                                product: product, 
                                totalPrice: productId,
                                brothers:  brothers,
                                sizes: sizes, 
                                node: node,
                                helpers: {
                                            foo: function () { return 'FOO!'; },
                                            bar: function () { return 'BAR!'; },
                                            table: function(data) {
                                                var str = '<table>';
                                                for (var i = 0; i < data.length; i++ ) {
                                                    str += '<tr>';
                                                    for (var key in data[i]) {
                                                        str += '<td>' + data[i][key] + '</td>';
                                                    };
                                                    str += '</tr>';
                                                };
                                                str += '</table>';

                                                return new Hbs.SafeString (str);
                                            },
                                            imglist: function(product) {//product=data
                                                var str = '';
                                                for (var i = 2; i < product.view_number + 1; i++ ) {
                                                    str += '<li class="imglist' + ' ' + 'imglist' + i + '" ' + 'data-id="' + product.viewImageId[i] + '">';
                                                    
                                                    str += '<img class="simg' + ' ' + 'simg' + i + '" ' + 'alt="加载中..."' + ' ' + 'src="' + product.viewImageUrl[i] + '"' + ' ' + 'data-src="' + product.viewImageId[i] + '">';
                                                
                                                    str += '</li>';
                                                };
                                                
                                                return new Hbs.SafeString (str);
                                            }
                                            
                                }
                    });
                }
                
                // res.render('shop/product-detail', {product: product, totalPrice: productId, sizes: sizes});
            });
        });
    });
});

router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id; 
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) { //如果session里面没有购物车 //if the cart is not set in the session
       return res.render('shop/shopping-cart', {products: null});
   } 
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});//cart.generateArray() 返回a list of array of my products (group) in my cart
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);//create a new cart of the cart stored in my session
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    
    var stripe = require("stripe")(
        "sk_test_fwmVPdJfpkmwlQRedXec5IxR"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({//create a new order //创建一个订单//类似于创建一张表
            user: req.user,//fetching the user from the request. //为啥req里面有user？答：passport does this for us. since i am using passport in this application, whenever i sign in with passport, passport will place this "user" object here on the "req". therefore, throughout my whole application, i can always use this "user" object
            cart: cart,
            address: req.body.address,//retrive address field
            name: req.body.name,//retrive name field //"req.body" is where express store the values sent with post request 
            paymentId: charge.id //fininally i want to store the payment id, i can retrive the paymentId from my charge object which gets passed here to the callback above
        });
        order.save(function(err, result) {//save the order to the database//传入一个回调函数，如果保存失败就传入err，如果保存成功就传入result
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    }); 
});

module.exports = router;

function isLoggedIn(req, res, next) {//用于在用户结账前强制用户先登录
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url; //保留登录前的url，用于登录以后跳转回去
    res.redirect('/user/signin');
}
