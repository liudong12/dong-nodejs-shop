//here, i create a seed per model. you could have 1 seed for all the data
var Product = require('../models/product'); //导入 product model

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        imageUrl: 'http://localhost:3000/images',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10,
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
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Also awesome? But of course it ',
        price: 20
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'Call of Duty Video Game',
        description: 'Meh ... nah, it\'s okay I guess',
        price: 40
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'Minecraft Video Game',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!',
        price: 50
    })
];


// var done1 = 0;
// for (var j = 0; j < products.length; j++) {//loop through all the projects
//     products[j].remove({}, function (err) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
//         done1++;
//         if (done1 === products.length) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
//             exit();
//         }
//     });
// }

//store all the products into the database
var done = 0;
for (var i = 0; i < products.length; i++) {//loop through all the projects
    products[i].save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        done++;
        if (done === products.length) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

//E:\视频教程\IT\mindspace\NodeJS Shopping Cart\nodejs-shopping-cart-tutorial-07-finishing-touches\seed>
//  node product-seeder.js

module.exports = products;  //导出包含所有产品的数组