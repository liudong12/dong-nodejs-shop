//here, i create a seed per model. you could have 1 seed for all the data
var Product = require('../models/product'); //导入 product model
var Size = require('../models/size');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var dataSize = 0;
var dataProduct = 0;
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
                        title: 'FIGURES PRINT SILK DRESS',
                        description: "A silk dress featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The eye-catching piece is finished with lace detailing and a thigh-grazing slit.",
                        price: 10.00,
                        _id: 1,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000101',  //product id  //这个是产品编号，是唯一的，每款产品对应一个号
                        product_style: '1730001', //17年第三季度的0001款 这个表示款式号，不是唯一的
                        product_color: 'Umber brown',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1101, //women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010101',  //年份编号 16年7月。 第几个产品：0001 颜色 01 尺码 01         
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;

saveSize(product, size);
 
//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000101',
            product_sku: '16700010106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 1 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});



//产品2----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'TRENCH DRESS WITH RECLINING FIGURES PRINT',
                        description: "A lightweight silk wrap trench dress enhanced with a vivid all-over print taken from Henry Moore’s drawing 'Reclining Figures' 1937, chosen from the Henry Moore Foundation archive. Bracelet sleeves and a back vent add a flattering finish to the elegant design.",
                        price: 10.00,
                        _id: 2,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000102',  //product id
                        product_style: '1730001',
                        product_color: 'Umber brown',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000102',
            product_sku: '16700010201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000102',
            product_sku: '16700010202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000102',
            product_sku: '16700010203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000102',
            product_sku: '16700010204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000102',
            product_sku: '16700010205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000102',
            product_sku: '16700010206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 2 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品3----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FIGURES PRINT COTTON TUNIC DRESS',
                        description: "A cotton tunic dress featuring a vivid print taken from Henry Moore’s drawing 'Reclining Figures' 1937, chosen from the Henry Moore Foundation archive. The belted waist ensures a flattering fit.",
                        price: 103.00,
                        _id: 3,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000103',  //product id
                        product_style: '1730001',
                        product_color: 'Stone blue',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000103',
            product_sku: '16700010301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000103',
            product_sku: '16700010302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000103',
            product_sku: '16700010303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000103',
            product_sku: '16700010304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000103',
            product_sku: '16700010305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000103',
            product_sku: '16700010306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 3 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品4----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'SILK DRESS WITH NECK TIE',
                        description: "A silk shift dress accented with a print taken from Henry Moore’s drawing 'Reclining Figure: Bunched' 1961, chosen from the Henry Moore Foundation archive. The design is finished with a self-tie bow that flatters the neckline.",

                        price: 104.00,
                        _id: 4,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000104',  //product id
                        product_style: '1730001',
                        product_color: 'Natural white',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000104',
            product_sku: '16700010401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000104',
            product_sku: '16700010402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000104',
            product_sku: '16700010403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000104',
            product_sku: '16700010404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000104',
            product_sku: '16700010405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000104',
            product_sku: '16700010406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 4 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品5----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'PRINT SILK DRESS WITH NECK TIE',
                        description: "A silk dress accented with a vivid print taken from Henry Moore's lithograph 'Pallas Heads' 1973, chosen from the Henry Moore Foundation archive. The design is gently defined at the waist and is finished with a self-tie bow that flatters the neckline.",
                        price: 105.00,
                        _id: 5,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000105',  //product id
                        product_style: '1730001',
                        product_color: 'Natural white',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000105',
            product_sku: '16700010501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000105',
            product_sku: '16700010502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000105',
            product_sku: '16700010503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000105',
            product_sku: '16700010504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000105',
            product_sku: '16700010505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000105',
            product_sku: '16700010506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 5 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品6----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'PRINT COTTON SILK TRENCH DRESS',
                        description: "A softly structured trench dress in a cotton silk blend, with a watercolour rose print. Detailed with epaulettes and a belted waist, it is an elegant option for the office.",
                        price: 106.00,
                        _id: 6,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000106',  //product id
                        product_style: '1730001',
                        product_color: 'Teal blue',            
                        view_number: 5,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-top
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000106',
            product_sku: '16700010601',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000106',
            product_sku: '16700010602',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000106',
            product_sku: '16700010603',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000106',
            product_sku: '16700010604',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000106',
            product_sku: '16700010605',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000106',
            product_sku: '16700010606',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 6 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品7----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'PRINT SILK TRENCH DRESS',
                        description: "A softly structured trench dress in Italian-woven lightweight pyjama print silk inspired by the runway. Sporting epaulettes and a belted waist, it is an elegant option for the office.",
                        price: 107.00,
                        _id: 7,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000107',  //product id
                        product_style: '1730001',
                        product_color: 'Pale stone blue',            
                        view_number: 4,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-top
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000107',
            product_sku: '16700010701',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000107',
            product_sku: '16700010702',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000107',
            product_sku: '16700010703',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000107',
            product_sku: '16700010704',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000107',
            product_sku: '16700010705',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000107',
            product_sku: '16700010706',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 7 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品8----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'PRINT SILK WRAP TRENCH DRESS',
                        description: "A wrap trench dress created from sumptuous silk cloth. The vivid garden floral print is taken from artwork hand-painted in the Burberry design studio.",
                        price: 108.00,
                        _id: 8,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000108',  //product id
                        product_style: '1730001',
                        product_color: 'Navy',            
                        view_number: 4,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-top
                        product_category_2: 1101, //jackets  //后来改成women-dress
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000108',
            product_sku: '16700010801',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000108',
            product_sku: '16700010802',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000108',
            product_sku: '16700010803',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000108',
            product_sku: '16700010804',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000108',
            product_sku: '16700010805',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000108',
            product_sku: '16700010806',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 8 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品9----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'STRETCH COTTON POPLIN SHIRT',
                        description: "A cotton poplin shirt with romantic ruffle detailing and bell-shaped cuffs. The fabric is woven with a hint of stretch for added comfort.",
                        price: 201.00,
                        _id: 9,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000201',  //product id
                        product_style: '1730002',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1105, //jackets  //后来改成women-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000201',
            product_sku: '16700020101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000201',
            product_sku: '16700020102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000201',
            product_sku: '16700020103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000201',
            product_sku: '16700020104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000201',
            product_sku: '16700020105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000201',
            product_sku: '16700020106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 9 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品10----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 202.00,
                        _id: 10,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000202',  //product id
                        product_style: '1730002',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1105, //jackets  //后来改成women-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 10 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品11----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 205.00,
                        _id: 11,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000203',  //product id
                        product_style: '1730002',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1105, //women-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000203',
            product_sku: '16700020301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000203',
            product_sku: '16700020302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000203',
            product_sku: '16700020303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000203',
            product_sku: '16700020304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000203',
            product_sku: '16700020305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000203',
            product_sku: '16700020306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 11 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品12----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 210.00,
                        _id: 12,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000204',  //product id
                        product_style: '1730002',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1105, //women-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 12 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品13----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 13,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000205',  //product id
                        product_style: '1730002',
                        product_color: 'White',            
                        view_number: 5,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1105, //women-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000202',
            product_sku: '16700020506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 13 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品14----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 208.00,
                        _id: 14,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000301',  //product id
                        product_style: '1730003',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1103, //women-sweaters
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000301',
            product_sku: '16700030101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000301',
            product_sku: '16700030102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000301',
            product_sku: '16700030103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000301',
            product_sku: '16700030104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000301',
            product_sku: '16700030105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000301',
            product_sku: '16700030106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 14 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品15----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 209.00,
                        _id: 15,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000302',  //product id
                        product_style: '1730003',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1103, //women-sweaters
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000302',
            product_sku: '16700030201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000302',
            product_sku: '16700030202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000302',
            product_sku: '16700030203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000302',
            product_sku: '16700030204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000302',
            product_sku: '16700030205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000302',
            product_sku: '16700030206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 14 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品15----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 301.00,
                        _id: 15,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000304',  //product id
                        product_style: '1730003',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1103, //women-sweaters
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000304',
            product_sku: '16700030401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000304',
            product_sku: '16700030402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000304',
            product_sku: '16700030403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000304',
            product_sku: '16700030404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000304',
            product_sku: '16700030405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000304',
            product_sku: '16700030406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 15 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品16----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 306.00,
                        _id: 16,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000305',  //product id
                        product_style: '1730003',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 11, //women-tops
                        product_category_2: 1103, //women-sweaters
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000305',
            product_sku: '16700030501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000305',
            product_sku: '16700030502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000305',
            product_sku: '16700030503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000305',
            product_sku: '16700030504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000305',
            product_sku: '16700030505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000305',
            product_sku: '16700030506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 16 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品17----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 17,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000401',  //product id
                        product_style: '1730004',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1303, //women-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000401',
            product_sku: '16700040101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000401',
            product_sku: '16700040102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000401',
            product_sku: '16700040103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000401',
            product_sku: '16700040104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000401',
            product_sku: '16700040105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000401',
            product_sku: '16700040106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 17 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品18----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 18,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000402',  //product id
                        product_style: '1730004',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1303, //women-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000402',
            product_sku: '16700040201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000402',
            product_sku: '16700040202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000402',
            product_sku: '16700040203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000402',
            product_sku: '16700040204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000402',
            product_sku: '16700040205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000402',
            product_sku: '16700040206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 18 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品19----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 19,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000403',  //product id
                        product_style: '1730004',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1303, //women-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000403',
            product_sku: '16700040301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000403',
            product_sku: '16700040302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000403',
            product_sku: '16700040303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000403',
            product_sku: '16700040304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000403',
            product_sku: '16700040305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000403',
            product_sku: '16700040306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 19 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品20----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 20,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000404',  //product id
                        product_style: '1730004',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1303, //women-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000404',
            product_sku: '16700040401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000404',
            product_sku: '16700040402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000404',
            product_sku: '16700040403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000404',
            product_sku: '16700040404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000404',
            product_sku: '16700040405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000404',
            product_sku: '16700040406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 20 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品21----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 21,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000404',  //product id
                        product_style: '1730004',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1303, //women-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000405',
            product_sku: '16700040501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000405',
            product_sku: '16700040502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000405',
            product_sku: '16700040503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000405',
            product_sku: '16700040504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000405',
            product_sku: '16700040505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000405',
            product_sku: '16700040506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 21 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品22----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 22,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000501',  //product id
                        product_style: '1730005',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1304, //women-gloves
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000501',
            product_sku: '16700050101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000501',
            product_sku: '16700050102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000501',
            product_sku: '16700050103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000501',
            product_sku: '16700050104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000501',
            product_sku: '16700050105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000501',
            product_sku: '16700050106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 22 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品23----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 23,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000601',  //product id
                        product_style: '1730006',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1302, //women-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000601',
            product_sku: '16700060101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000601',
            product_sku: '16700060102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000601',
            product_sku: '16700060103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000601',
            product_sku: '16700060104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000601',
            product_sku: '16700060105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000601',
            product_sku: '16700060106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 23 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品24----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 24,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000602',  //product id
                        product_style: '1730006',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1302, //women-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000602',
            product_sku: '16700060201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000602',
            product_sku: '16700060202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000602',
            product_sku: '16700060203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000602',
            product_sku: '16700060204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000602',
            product_sku: '16700060205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000602',
            product_sku: '16700060206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 24 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品25----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 25,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000603',  //product id
                        product_style: '1730006',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1302, //women-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000603',
            product_sku: '16700060301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000603',
            product_sku: '16700060302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000603',
            product_sku: '16700060303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000603',
            product_sku: '16700060304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000603',
            product_sku: '16700060305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000603',
            product_sku: '16700060306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 25 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品26----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 26,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000604',  //product id
                        product_style: '1730006',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1302, //women-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000604',
            product_sku: '16700060401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000604',
            product_sku: '16700060402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000604',
            product_sku: '16700060403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000604',
            product_sku: '16700060404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000604',
            product_sku: '16700060405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000604',
            product_sku: '16700060406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 26 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品27----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 27,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000605',  //product id
                        product_style: '1730006',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1302, //women-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000605',
            product_sku: '16700060501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000605',
            product_sku: '16700060502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000605',
            product_sku: '16700060503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000605',
            product_sku: '16700060504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000605',
            product_sku: '16700060505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000605',
            product_sku: '16700060506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 27 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品28----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 28,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000701',  //product id
                        product_style: '1730007',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000701',
            product_sku: '16700070101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000701',
            product_sku: '16700070102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000701',
            product_sku: '16700070103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000701',
            product_sku: '16700070104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000701',
            product_sku: '16700070105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000701',
            product_sku: '16700070106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 28 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品29----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 29,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000702',  //product id
                        product_style: '1730007',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000702',
            product_sku: '16700070201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000702',
            product_sku: '16700070202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000702',
            product_sku: '16700070203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000702',
            product_sku: '16700070204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000702',
            product_sku: '16700070205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000702',
            product_sku: '16700070206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 29 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品30----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 30,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000703',  //product id
                        product_style: '1730007',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000703',
            product_sku: '16700070301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000703',
            product_sku: '16700070302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000703',
            product_sku: '16700070303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000703',
            product_sku: '16700070304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000703',
            product_sku: '16700070305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000703',
            product_sku: '16700070306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 30 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品31----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 31,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000704',  //product id
                        product_style: '1730007',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000704',
            product_sku: '16700070401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000704',
            product_sku: '16700070402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000704',
            product_sku: '16700070403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000704',
            product_sku: '16700070404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000704',
            product_sku: '16700070405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000704',
            product_sku: '16700070406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 31 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品32----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 32,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000801',  //product id
                        product_style: '1730008',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000801',
            product_sku: '16700080101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000801',
            product_sku: '16700080102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000801',
            product_sku: '16700080103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000801',
            product_sku: '16700080104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000801',
            product_sku: '16700080105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000801',
            product_sku: '16700080106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 32 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品33----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 33,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000802',  //product id
                        product_style: '1730008',
                        product_color: 'White',            
                        view_number: 5,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000802',
            product_sku: '16700080201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000802',
            product_sku: '16700080202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000802',
            product_sku: '16700080203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000802',
            product_sku: '16700080204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000802',
            product_sku: '16700080205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000802',
            product_sku: '16700080206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 33 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品34----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 34,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000803',  //product id
                        product_style: '1730008',
                        product_color: 'White',            
                        view_number: 4,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000803',
            product_sku: '16700080301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000803',
            product_sku: '16700080302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000803',
            product_sku: '16700080303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000803',
            product_sku: '16700080304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000803',
            product_sku: '16700080305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000803',
            product_sku: '16700080306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 34 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});

//产品35----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 35,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000901',  //product id
                        product_style: '1730009',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2101, //men-suit
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000901',
            product_sku: '16700090101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000901',
            product_sku: '16700090102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000901',
            product_sku: '16700090103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000901',
            product_sku: '16700090104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000901',
            product_sku: '16700090105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000901',
            product_sku: '16700090106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 35 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品36----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 36,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000901',  //product id
                        product_style: '1730009',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2101, //men-suit
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000902',
            product_sku: '16700090201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000902',
            product_sku: '16700090202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000902',
            product_sku: '16700090203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000902',
            product_sku: '16700090204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000902',
            product_sku: '16700090205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000902',
            product_sku: '16700090206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 36 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品37----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 37,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000901',  //product id
                        product_style: '1730009',
                        product_color: 'White',            
                        view_number: 5,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2101, //men-suit
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000903',
            product_sku: '16700090301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000903',
            product_sku: '16700090302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000903',
            product_sku: '16700090303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000903',
            product_sku: '16700090304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000903',
            product_sku: '16700090305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000903',
            product_sku: '16700090306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 37 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品38----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 38,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000901',  //product id
                        product_style: '1730009',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2101, //men-suit
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000904',
            product_sku: '16700090401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000904',
            product_sku: '16700090402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000904',
            product_sku: '16700090403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000904',
            product_sku: '16700090404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000904',
            product_sku: '16700090405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000904',
            product_sku: '16700090406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 38 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品39----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 39,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000901',  //product id
                        product_style: '1730009',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2101, //men-suit
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000905',
            product_sku: '16700090501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000905',
            product_sku: '16700090502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000905',
            product_sku: '16700090503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000905',
            product_sku: '16700090504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000905',
            product_sku: '16700090505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000905',
            product_sku: '16700090506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 39 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品40----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 40,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173000901',  //product id
                        product_style: '1730009',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2101, //men-suit
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173000906',
            product_sku: '16700090601',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173000906',
            product_sku: '16700090602',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173000906',
            product_sku: '16700090603',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173000906',
            product_sku: '16700090604',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173000906',
            product_sku: '16700090605',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173000906',
            product_sku: '16700090606',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 40 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品41----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price:201.00,
                        _id: 41,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001001',  //product id
                        product_style: '1730010',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2105, //men-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001001',
            product_sku: '16700100101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001001',
            product_sku: '16700100102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001001',
            product_sku: '16700100103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001001',
            product_sku: '16700100104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001001',
            product_sku: '16700100105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001001',
            product_sku: '16700100106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 41 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品42----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price:201.00,
                        _id: 42,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001002',  //product id
                        product_style: '1730010',
                        product_color: 'White',            
                        view_number: 4,  
                        product_category_0: 2, //men
                        product_category_1: 21, //men-tops
                        product_category_2: 2105, //men-shirts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001002',
            product_sku: '16700100201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001002',
            product_sku: '16700100202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001002',
            product_sku: '16700100203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001002',
            product_sku: '16700100204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001002',
            product_sku: '16700100205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001002',
            product_sku: '16700100206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 42 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品43----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price:201.00,
                        _id: 43,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001101',  //product id
                        product_style: '1730011',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2303, //men-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001101',
            product_sku: '16700110101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001101',
            product_sku: '16700110102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001101',
            product_sku: '16700110103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001101',
            product_sku: '16700110104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001101',
            product_sku: '16700110105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001101',
            product_sku: '16700110106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 43 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品44----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price:201.00,
                        _id: 44,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001102',  //product id
                        product_style: '1730011',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2303, //men-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001102',
            product_sku: '16700110201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001102',
            product_sku: '16700110202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001102',
            product_sku: '16700110203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001102',
            product_sku: '16700110204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001102',
            product_sku: '16700110205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001102',
            product_sku: '16700110206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 44 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});





//产品47----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 47,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001104',  //product id
                        product_style: '1730011',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2303, //men-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001104',
            product_sku: '16700110401',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001104',
            product_sku: '16700110402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001104',
            product_sku: '16700110403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001104',
            product_sku: '16700110404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001104',
            product_sku: '16700110405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001104',
            product_sku: '16700110406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 47 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品48----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 48,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001105',  //product id
                        product_style: '1730011',
                        product_color: 'White',            
                        view_number: 5,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2303, //men-belts
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001105',
            product_sku: '16700110501',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001105',
            product_sku: '16700110502',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001105',
            product_sku: '16700110503',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001105',
            product_sku: '16700110504',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001105',
            product_sku: '16700110505',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001105',
            product_sku: '16700110506',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 48 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品49----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 49,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001201',  //product id
                        product_style: '1730012',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001201',
            product_sku: '16700120101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001201',
            product_sku: '16700120102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001201',
            product_sku: '16700120103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001201',
            product_sku: '16700120104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001201',
            product_sku: '16700120105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001201',
            product_sku: '16700120106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 49 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品50----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 50,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001202',  //product id
                        product_style: '1730012',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001202',
            product_sku: '16700120201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001202',
            product_sku: '16700120102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001202',
            product_sku: '16700120103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001202',
            product_sku: '16700120104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001202',
            product_sku: '16700120105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001202',
            product_sku: '16700120106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 50 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品51----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 51,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001203',  //product id
                        product_style: '1730012',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2302, //men-hats
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001203',
            product_sku: '16700120301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001203',
            product_sku: '16700120302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001203',
            product_sku: '16700120303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001203',
            product_sku: '16700120304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001203',
            product_sku: '16700120305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001203',
            product_sku: '16700120306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 51 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品52----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 52,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001301',  //product id
                        product_style: '1730013',
                        product_color: 'White',            
                        view_number: 4,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001301',
            product_sku: '16700130101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001301',
            product_sku: '16700130102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001301',
            product_sku: '16700130103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001301',
            product_sku: '16700130104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001301',
            product_sku: '16700130105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001301',
            product_sku: '16700130106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 52 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品53----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 53,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001302',  //product id
                        product_style: '1730013',
                        product_color: 'White',            
                        view_number: 5,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001302',
            product_sku: '16700130201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001302',
            product_sku: '16700130202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001302',
            product_sku: '16700130203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001302',
            product_sku: '16700130204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001302',
            product_sku: '16700130205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001302',
            product_sku: '16700130206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 53 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品54----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 54,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001401',  //product id
                        product_style: '1730014',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001401',
            product_sku: '16700140101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001401',
            product_sku: '16700140102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001401',
            product_sku: '16700140103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001401',
            product_sku: '16700140104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001401',
            product_sku: '16700140105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001401',
            product_sku: '16700140106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 54 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品55----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 55,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001402',  //product id
                        product_style: '1730014',
                        product_color: 'White',            
                        view_number: 3,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001402',
            product_sku: '16700140201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001402',
            product_sku: '16700140202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001402',
            product_sku: '16700140203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001402',
            product_sku: '16700140204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001402',
            product_sku: '16700140205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001402',
            product_sku: '16700140206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 55 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品56----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 56,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001501',  //product id
                        product_style: '1730015',
                        product_color: 'White',            
                        view_number: 4,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001501',
            product_sku: '16700150101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001501',
            product_sku: '16700150102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001501',
            product_sku: '16700150103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001501',
            product_sku: '16700150104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001501',
            product_sku: '16700150105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001501',
            product_sku: '16700150106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 56 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品57----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 57,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001502',  //product id
                        product_style: '1730015',
                        product_color: 'White',            
                        view_number: 4,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001502',
            product_sku: '16700150201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001502',
            product_sku: '16700150202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001502',
            product_sku: '16700150203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001502',
            product_sku: '16700150204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001502',
            product_sku: '16700150205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001502',
            product_sku: '16700150206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 57 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品58----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 58,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001601',  //product id
                        product_style: '1730016',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001601',
            product_sku: '16700160101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001601',
            product_sku: '16700160102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001601',
            product_sku: '16700160103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001601',
            product_sku: '16700160104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001601',
            product_sku: '16700160105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001601',
            product_sku: '16700160106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 58 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品59----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 59,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001602',  //product id
                        product_style: '1730016',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001602',
            product_sku: '16700160201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001602',
            product_sku: '16700160202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001602',
            product_sku: '16700160203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001602',
            product_sku: '16700160204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001602',
            product_sku: '16700160205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001602',
            product_sku: '16700160206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 59 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品60----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 60,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001603',  //product id
                        product_style: '1730016',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001603',
            product_sku: '16700160301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001603',
            product_sku: '16700160302',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001603',
            product_sku: '16700160303',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001603',
            product_sku: '16700160304',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001603',
            product_sku: '16700160305',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001603',
            product_sku: '16700160306',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 60 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品61----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 61,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001604',  //product id
                        product_style: '1730016',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 13, //women-accessories
                        product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001604',
            product_sku: '16700160301',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001604',
            product_sku: '16700160402',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001604',
            product_sku: '16700160403',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001604',
            product_sku: '16700160404',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001604',
            product_sku: '16700160405',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001604',
            product_sku: '16700160406',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 61 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品62----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 62,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001701',  //product id
                        product_style: '1730017',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001701',
            product_sku: '16700170101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001701',
            product_sku: '16700170102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001701',
            product_sku: '16700170103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001701',
            product_sku: '16700170104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001701',
            product_sku: '16700170105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001701',
            product_sku: '16700170106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 62 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品63----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 63,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001702',  //product id
                        product_style: '1730017',
                        product_color: 'White',            
                        view_number: 5,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001702',
            product_sku: '16700170201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001702',
            product_sku: '16700170202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001702',
            product_sku: '16700170203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001702',
            product_sku: '16700170204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001702',
            product_sku: '16700170205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001702',
            product_sku: '16700170206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 63 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品64----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 64,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001801',  //product id
                        product_style: '1730018',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001801',
            product_sku: '16700180101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001801',
            product_sku: '16700180102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001801',
            product_sku: '16700180103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001801',
            product_sku: '16700180104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001801',
            product_sku: '16700180105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001801',
            product_sku: '16700180106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 64 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品65----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 65,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001802',  //product id
                        product_style: '1730018',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001802',
            product_sku: '16700180201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001802',
            product_sku: '16700180202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001802',
            product_sku: '16700180203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001802',
            product_sku: '16700180204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001802',
            product_sku: '16700180205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001802',
            product_sku: '16700180206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 65 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品66----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 66,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001901',  //product id
                        product_style: '1730019',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001901',
            product_sku: '16700190101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001901',
            product_sku: '16700190102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001901',
            product_sku: '16700190103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001901',
            product_sku: '16700190104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001901',
            product_sku: '16700190105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001901',
            product_sku: '16700190106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 66 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品67----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 67,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173001902',  //product id
                        product_style: '1730019',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173001902',
            product_sku: '16700190201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173001902',
            product_sku: '16700190202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173001902',
            product_sku: '16700190203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173001902',
            product_sku: '16700190204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173001902',
            product_sku: '16700190205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173001902',
            product_sku: '16700190206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 67 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品68----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 68,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002001',  //product id
                        product_style: '1730020',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002001',
            product_sku: '16700200101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002001',
            product_sku: '16700200102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002001',
            product_sku: '16700200103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002001',
            product_sku: '16700200104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002001',
            product_sku: '16700200105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002001',
            product_sku: '16700200106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 68 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品69----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 69,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002002',  //product id
                        product_style: '1730020',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 1, //women
                        product_category_1: 14, //women-shoes
                        //product_category_2: 1301, //women-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002002',
            product_sku: '16700200201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002002',
            product_sku: '16700200202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002002',
            product_sku: '16700200203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002002',
            product_sku: '16700200204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002002',
            product_sku: '16700200205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002002',
            product_sku: '16700200206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 69 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品70----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 70,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002101',  //product id
                        product_style: '1730021',
                        product_color: 'White',            
                        view_number: 6,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002101',
            product_sku: '16700210101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002101',
            product_sku: '16700210102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002101',
            product_sku: '16700210103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002101',
            product_sku: '16700210104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002101',
            product_sku: '16700210105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002101',
            product_sku: '16700210106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 70 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品71----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 71,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002102',  //product id
                        product_style: '1730021',
                        product_color: 'White',            
                        view_number: 7,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002102',
            product_sku: '16700210201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002102',
            product_sku: '16700210202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002102',
            product_sku: '16700210203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002102',
            product_sku: '16700210204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002102',
            product_sku: '16700210205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002102',
            product_sku: '16700210206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 71 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品72----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 72,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002201',  //product id
                        product_style: '1730022',
                        product_color: 'White',            
                        view_number: 2,  
                        product_category_0: 2, //men
                        product_category_1: 23, //men-accessories
                        product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002201',
            product_sku: '16700220101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002201',
            product_sku: '16700220102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002201',
            product_sku: '16700220103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002201',
            product_sku: '16700220104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002201',
            product_sku: '16700220105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002201',
            product_sku: '16700220106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 72 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品73----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 73,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002301',  //product id
                        product_style: '1730023',
                        product_color:3,  
                        product_category_0: 2, //men
                        product_category_1: 24, //men-shoes
                        //product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002301',
            product_sku: '16700230101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002301',
            product_sku: '16700230102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002301',
            product_sku: '16700230103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002301',
            product_sku: '16700230104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002301',
            product_sku: '16700230105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002301',
            product_sku: '16700230106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 73 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品74----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 74,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002302',  //product id
                        product_style: '1730023',
                        product_color:3,  
                        product_category_0: 2, //men
                        product_category_1: 24, //men-shoes
                        //product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002302',
            product_sku: '16700230201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002302',
            product_sku: '16700230202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002302',
            product_sku: '16700230203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002302',
            product_sku: '16700230204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002302',
            product_sku: '16700230205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002302',
            product_sku: '16700230206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 74 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品75----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 75,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002401',  //product id
                        product_style: '1730024',
                        product_color:3,  
                        product_category_0: 2, //men
                        product_category_1: 24, //men-shoes
                        //product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002401',
            product_sku: '16700240101',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002401',
            product_sku: '16700240102',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002401',
            product_sku: '16700240103',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002401',
            product_sku: '16700240104',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002401',
            product_sku: '16700240105',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002401',
            product_sku: '16700240106',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 75 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});


//产品76----------------------------------------------------------------------------------

var product =   new Product({ //用product model 来实例化一个对象，传入一个js对象，里面是要写入的模拟数据 //this will create 1 product, however i want multiple products
                        imagePath: '',
                        imageUrl: 'http://localhost:3000/images',
                        title: 'FRAMED HEADS AND RECLINING FIGURES PRINT SILK SHIRT',
                        description: "A silk shirt featuring prints taken from Henry Moore's drawings 'Framed Heads' 1943 and 'Reclining Figures' 1937, both works chosen from the Henry Moore Foundation archive. The shirt is detailed with front pintuck pleats and English lace woven on traditional looms.",
                        price: 201.00,
                        _id: 76,
                        sizes: [],
                        //sizes: size._id,
                        product_sn: '173002402',  //product id
                        product_style: '1730024',
                        product_color:3,  
                        product_category_0: 2, //men
                        product_category_1: 24, //men-shoes
                        //product_category_2: 2301, //men-bags
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
dataProduct++;

//-------------size new and save---------------------------------

//1
var size = new Size({
            _belong: product._id,
            product_sn: '173002402',
            product_sku: '16700240201',             
            product_size: 'xs',
            stock_quantity: '100'
}); 
dataSize++;
saveSize(product, size);

//2
var size = new Size({
            _belong: product._id,
            product_sn: '173002402',
            product_sku: '16700240202',             
            product_size: 's',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//3
var size = new Size({
            _belong: product._id,
            product_sn: '173002402',
            product_sku: '16700240203',             
            product_size: 'm',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//4
var size = new Size({
            _belong: product._id,
            product_sn: '173002402',
            product_sku: '16700240204',             
            product_size: 'l',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//5
var size = new Size({
            _belong: product._id,
            product_sn: '173002402',
            product_sku: '16700240205',             
            product_size: 'xl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//6
var size = new Size({
            _belong: product._id,
            product_sn: '173002402',
            product_sku: '16700240206',             
            product_size: 'xxl',
            stock_quantity: '100'
});
dataSize++;
saveSize(product, size);

//product 76 save
product.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
    doneProduct++;
    if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
        exit();
    }
});








//--------公共函数-------------------------------------------------------------------------------------------
function saveSize(product, size){
    size.save(function(err, result) {//用save将数据保存到数据库，注意：这个方法是异步的，因此要将mongoose.disconnect();写在回调函数里面，否则还没等遍历完成就会关闭连接
        doneSize++;
        console.log("dataSize" + dataSize);
        console.log("doneSize" + doneSize);
        console.log("dataProduct" + dataProduct);
        console.log("doneProduct" + doneProduct);
        console.log("---------------------------------");
        if ((doneSize === dataSize) && (doneProduct === dataProduct)) {//判断是否全部写入，只有全部写入以后才关闭连接，要是不判断的话，当第一个写入以后，就会关闭连接
            exit();
        }
    });

    product.sizes.push(size);
}

function exit() {
    mongoose.disconnect();
}

//E:\视频教程\IT\mindspace\NodeJS Shopping Cart\nodejs-shopping-cart-tutorial-07-finishing-touches\seed>
//  node product-seeder.js

