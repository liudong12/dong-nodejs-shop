//here, i create a seed per model. you could have 1 seed for all the data
var Product = require('../models/product'); //导入 product model
var Size = require('../models/size');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var dataSize = 0;
var dataProduct = 2;
var doneSize = 0;
var doneProduct = 0;
console.log("dataSize" + dataSize);
console.log("doneSize" + doneSize);
console.log("dataProduct" + dataProduct);
console.log("doneProduct" + doneProduct);
console.log("---------------------------------");



var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',//在控制器里面用代码生成
                        imageUrl: 'http://localhost:3000/images',
                        title: 'Gothic Video Game',
                        description: 'Awesome Game!!!!',
                        price: 10.00,
                        _id: 1,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000101',  //product id
                        product_style: '1730001',
                        product_color: 'Umber brown',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women_ready_to_wear
                        product_category_2: 1101, //jackets  //后来改成women_dress
                        sizeName: '',
                        sizeAName: 'XS',
                        sizeBName: 'S',
                        sizeCName: 'M',
                        sizeDName: 'L',
                        sizeEName: 'XL',
                        sizeFName: 'XXL',
                        colorImage: '-40x30',  //颜色图
                        thumbnail: '-80x100',  //缩略图
                        extraSmall: '-160x200',  //缩略图
                        small: '-320x400',     //小图
                        smallRetina: '-640x800',  //小图，高清
                        medium: '-480x600',   //中图            //414x414
                        mediumRetina: '-960x1200',  //中图, 高清    //828x828
                        large: '-800x1000',   //大图  //iphone 6+ 横屏  // 736x736
                        largeRetina: '-960x1200',  //大图, 高清       // 1472x1472
                        standard: '-960x1200',  //标准图
                        standardRetina: '-960x1200',  //标准图, 高清
                        imageType: '.jpg'                       
});

//方法1：用数组
var sizes = [
    new Size({
        _belong: product._id,
        product_sn: '173000101',
        product_sku: '16700010101',             
        product_size: 'xs',
        stock_quantity: '100'
    }),
    new Size({
        _belong: product._id,
        product_sn: '173000101',
        product_sku: '16700010102',             
        product_size: 's',
        stock_quantity: '100'
    })
];


for (var s = 0; s < sizes.length; s++) {//loop through all the projects
    sizes[s].save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        doneSize++;
        product.sizes.push(sizes[s]);
        if (doneSize === sizes.length){//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
                doneProduct++;
                if (doneProduct === dataProduct) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
                    exit();
                }
            });
        }
    });
}







//产品2----------------------------------------------------------------------------------


var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'Gothic Video Game',
                        description: 'Awesome Game!!!!',
                        price: 10.00,
                        _id: 2,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000102',  //product id
                        product_style: '1730001',
                        product_color: 'Umber brown',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women_ready_to_wear
                        product_category_2: 1101, //jackets  //后来改成women_dress
                        sizeAName: 'XS',
                        sizeBName: 'S',
                        sizeCName: 'M',
                        sizeDName: 'L',
                        sizeEName: 'XL',
                        sizeFName: 'XXL',
                        colorImage: '-40x30',  //颜色图
                        thumbnail: '-80x100',  //缩略图
                        extraSmall: '-160x200',  //缩略图
                        small: '-320x400',     //小图
                        smallRetina: '-640x800',  //小图，高清
                        medium: '-480x600',   //中图            //414x414
                        mediumRetina: '-960x1200',  //中图, 高清    //828x828
                        large: '-800x1000',   //大图  //iphone 6+ 横屏  // 736x736
                        largeRetina: '-960x1200',  //大图, 高清       // 1472x1472
                        standard: '-960x1200',  //标准图
                        standardRetina: '-960x1200',  //标准图, 高清
                        imageType: '.jpg'
                        //title: 'FIGURES PRINT SILK DRESS',
                        //description: "A silk dress featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The eye-catching piece is finished with lace detailing and a thigh-grazing slit.",
                        //price: 101
});

//方法1：用数组
var sizes = [
    new Size({
        _belong: product._id,
        product_sn: '173000102',
        product_sku: '16700010201',             
        product_size: 'xs',
        stock_quantity: '100'
    }),
    new Size({
        _belong: product._id,
        product_sn: '173000102',
        product_sku: '16700010202',             
        product_size: 's',
        stock_quantity: '100'
    })
];


for (var s = 0; s < sizes.length; s++) {//loop through all the projects
    sizes[s].save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        doneSize++;
        product.sizes.push(sizes[s]);
        if (doneSize === sizes.length){//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
                doneProduct++;
                if (doneProduct === dataProduct) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
                    exit();
                }
            });
        }
    });
}


function exit() {
    mongoose.disconnect();
}

//E:\视频教程\IT\mindspace\NodeJS Shopping Cart\nodejs-shopping-cart-tutorial-07-finishing-touches\seed>
//  node product-seeder.js

