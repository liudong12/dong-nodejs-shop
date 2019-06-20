//here, i create a seed per model. you could have 1 seed for all the data
var Size = require('../models/size'); //导入 product model

var products = require('./product-seeder'); //导入 product model

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var sizes = [
    new Size({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
        product_sn: '173000101',
        product_sku: '16700010101',             
        product_size: 'xs',
        stock_quantity: '100',
        //product_id: products[0]._id
        _belong: 1
    }),
    new Size({
        product_sn: '173000101',
        product_sku: '17300010102',             
        product_size: 's',
        stock_quantity: '100',
        _belong: 1
    }),
    new Size({
        product_sn: '173000101',
        product_sku: '17300010103',             
        product_size: 'm',
        stock_quantity: '100',
        _belong: 1
    }),
    new Size({
        product_sn: '173000101',
        product_sku: '17300010104',             
        product_size: 'l',
        stock_quantity: '100',
        _belong: 1
    }),
    new Size({
        product_sn: '173000101',
        product_sku: '17300010105',             
        product_size: 'xl',
        stock_quantity: '100',
        _belong: 1
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
for (var i = 0; i < sizes.length; i++) {//loop through all the projects
    sizes[i].save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        done++;
        if (done === sizes.length) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

//E:\视频教程\IT\mindspace\NodeJS Shopping Cart\nodejs-shopping-cart-tutorial-07-finishing-touches\seed>
//  node product-seeder.js