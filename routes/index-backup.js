var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');
var Size = require('../models/size');
var Order = require('../models/order');

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
    
    Product.findById(productId, function(err, product) {//要是没找到返回err，要是找到就返回product
        if (err) {
           return res.redirect('/');
        }

        // var sizes = product.sizes;  //sizes = product->sizes; 
        // 返回的 sizes 类型是 objectId 类型
        
        // var sizes = product.sizes.toObject();  //TypeError: product.sizes.toObject is not a function
        
        


        //获取这个产品所有的尺码
        //调用Size model下面的find方法，（传入Size model与product model 相关联的字段）
        // var sizes = Size.
        //             find({ _belong: product._id }).
        //             populate('_belong').
        //             exec(function (err, size) {//如果执行成功的话，就返回所有的尺码
        //             if (err) return err;
        //             console.log('The sizes are an array: ', size);
        //             return size;
        //             });
        //            console.log('sizes: ', sizes);
        //也可以像下面这样写，效果一样
        
var sizes_promise =     Product.
                        findOne({ _id: product._id }).
                        populate('sizes'). // only works if we pushed refs to children
                        exec(function (err, product) {
                        if (err) return err;
                        //console.log(product);
                        //console.log('sizes: ', product.sizes); //返回的是已经替换的东西，有具体的size 数据
                        //var size_2 = product.sizes;
                        //
                        //
                                               
                        });
                        //console.log('sizes: ', product.sizes); //sizes:  ["596d317f555cad541ef2ac95","596d317f555cad541ef2ac96"]
                        
sizes_promise.then(function (doc) {
          
    var sizes = doc.sizes;

    product = product.toObject(); //Mongoose Models inherit from Documents, which have a toObject() method. 将 Document 类型转换成对象类型
    product.largeImageUrl =         product.imageUrl + '/'  + product.product_sn + 'view1' + product.large        + product.imageType;
    product.largeRetinaImageUrl =   product.imageUrl + '/'  + product.product_sn + 'view1' + product.largeRetina  + product.imageType;
    product.mediumImageUrl =        product.imageUrl + '/'  + product.product_sn + 'view1' + product.medium       + product.imageType;
    product.mediumRetinaImageUrl =  product.imageUrl + '/'  + product.product_sn + 'view1' + product.mediumRetina + product.imageType;
    product.smallImageUrl =         product.imageUrl + '/'  + product.product_sn + 'view1' + product.small        + product.imageType;
    product.smallRetinaImageUrl =   product.imageUrl + '/'  + product.product_sn + 'view1' + product.smallRetina  + product.imageType;
    product.standardImageUrl =      product.imageUrl + '/'  + product.product_sn + 'view1' + product.standard     + product.imageType;
                                                   
    // for($i = 1; $i < $product->view_number+1; $i++)
    // {
    //     $product->{'view' . $i . 'ImageUrl'} =  $product->imageUrl . '/'  . $product->product_sn . 'view' . $i . $product->thumbnail . $product->imageType;
    //     $viewImageUrl[$i] = $product->{'view' . $i . 'ImageUrl'};//生成数组
    //     $product->viewImageUrl = $viewImageUrl;//将数组保存到 $product->viewImageUrl
    // }
    

    // for($j = 1; $j < $product->view_number+1; $j++)
    // {
    //     $product->{'view' . $j . 'ImageId'} =  $product->product_sn . 'view' . $j;
    //     $viewImageId[$j] = $product->{'view' . $j . 'ImageId'};
    //     $product->viewImageId = $viewImageId;       
    // }
    
    var i;
    var viewImageUrl = [];
    for (i = 1; i < product.view_number+1; i++) {
        //product.eval('view' + i + 'ImageUrl') =  product.imageUrl + '/'  + product.product_sn + 'view' + i + product.thumbnail + product.imageType;
        product['view' + i + 'ImageUrl'] =  product.imageUrl + '/'  + product.product_sn + 'view' + i + product.thumbnail + product.imageType;        
        viewImageUrl[i] = product['view' + i + 'ImageUrl'];//生成数组
        product.viewImageUrl = viewImageUrl;//将数组保存到 $product->viewImageUrl
    }
    var j;
    var viewImageId = [];
    for(j = 1; j < product.view_number+1; j++)
    {
        product['view' + j + 'ImageId'] =  product.product_sn + 'view' + j;
        viewImageId[j] = product['view' + j + 'ImageId'];
        product.viewImageId = viewImageId;       
    }


    // $brothers = Product::where('product_style', '=' , $product->product_style)->get();
    // //$brothers->count(); 

    
    // foreach ($brothers as $brother)
    // {
    //     $brother->colorImageUrl =  $brother->imageUrl . '/' . $brother->product_sn . $brother->colorImage . $brother->imageType;
             
    // }  

    // var brothers_promise =  Product.
    //                         find({ product_style: product.product_style }).
    //                         exec(function (err, brothers) {
    //                             if (err) return err;
    //                             for (var i in brothers) {
    //                               brothers[i].colorImageUrl = brother.imageUrl + '/' + brother.product_sn + brother.colorImage + brother.imageType;
    //                             }                                                      
    //                         });

    console.log('product obj: ', product);
    res.render('shop/product-detail', {product: product, totalPrice: productId, sizes: sizes});
});
                    
        

        //这是 laravel 的写法
        // for (var size in sizes) {
        //     size.product_size = size.product_size.toUpperCase();//Str::upper($size->product_size);  //use Illuminate\Support\Str;
        // }

        // product = product.toObject(); //Mongoose Models inherit from Documents, which have a toObject() method. 将 Document 类型转换成对象类型
        // product.largeImageUrl =         product.imageUrl + '/'  + product.product_sn + 'view1' + product.large        + product.imageType;
        // product.largeRetinaImageUrl =   product.imageUrl + '/'  + product.product_sn + 'view1' + product.largeRetina  + product.imageType;
        // product.mediumImageUrl =        product.imageUrl + '/'  + product.product_sn + 'view1' + product.medium       + product.imageType;
        // product.mediumRetinaImageUrl =  product.imageUrl + '/'  + product.product_sn + 'view1' + product.mediumRetina + product.imageType;
        // product.smallImageUrl =         product.imageUrl + '/'  + product.product_sn + 'view1' + product.small        + product.imageType;
        // product.smallRetinaImageUrl =   product.imageUrl + '/'  + product.product_sn + 'view1' + product.smallRetina  + product.imageType;
        // product.standardImageUrl =      product.imageUrl + '/'  + product.product_sn + 'view1' + product.standard     + product.imageType;
       
       
        // res.render('shop/product-detail', {product: product, totalPrice: productId, sizes: sizes});//product 对象类型，sizes 数组类型，数组也是对象
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
