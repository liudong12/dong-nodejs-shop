//here, i create a seed per model. you could have 1 seed for all the data
var Product = require('../models/product'); //导入 product model
var Size = require('../models/size');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var data = 3;
var done = 0;

// var products = [
//     new Product({
//         imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
//         title: 'World of Warcraft Video Game',
//         description: 'Also awesome? But of course it ',
//         price: 20
//     }),
//     new Product({
//         imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
//         title: 'Call of Duty Video Game',
//         description: 'Meh ... nah, it\'s okay I guess',
//         price: 40
//     })
// ];

// var done = 0;
// for (var i = 0; i < products.length; i++) {//loop through all the projects
//     products[i].save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
//         done++;
//         if (done === products.length) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
//             exit();
//         }
//     });
// }
//-----------------------------------------
var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'Gothic Video Game',
                        description: 'Awesome Game!!!!',
                        price: 10,
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

var done = 0;
for (var i = 0; i < sizes.length; i++) {//loop through all the projects
    sizes[i].save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        done++;
        if (done === sizes.length) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
    });
}
//方法2：不要数组
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 

size.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        done++;
        if (done === data) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
});

product.sizes.push(size);

//-------------------------------------------

var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010102',             
            product_size: 's',
            stock_quantity: '100'
});

size.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        done++;
        if (done === data) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
});

product.sizes.push(size);

  
//-------------------------------------------


// product.save((err,product)=>{  //this save method allows me to save a model to the database
// //save 这个方法是异步执行的，正因为这个方法是异步执行的，所以很有可能只保存一条数据，余下的数据还没保存就已经执行下面的关闭数据库连接的语句了。

//     if(err) return err;
//     done++;
// });

product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        done++;
        if (done === data) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
});

//-------------------------------------------

// var product =   new Product({
//                         imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
//                         title: 'World of Warcraft Video Game',
//                         description: 'Also awesome? But of course it ',
//                         price: 20
//                 });
// product.save();

// var product =   new Product({
//                         imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
//                         title: 'Call of Duty Video Game',
//                         description: 'Meh ... nah, it\'s okay I guess',
//                         price: 40
//                 });
// product.save();

// var product =   new Product({
//                         imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
//                         title: 'Minecraft Video Game',
//                         description: 'Now that is super awesome!',
//                         price: 15
//                 });
// product.save();

// var product =   new Product({
//                         imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
//                         title: 'Dark Souls 3 Video Game',
//                         description: 'I died!',
//                         price: 50
//                 });
// product.save();

// if (done = 2) {
//     exit();
// }
        



function exit() {
    mongoose.disconnect();
}

//E:\视频教程\IT\mindspace\NodeJS Shopping Cart\nodejs-shopping-cart-tutorial-07-finishing-touches\seed>
//  node product-seeder.js

