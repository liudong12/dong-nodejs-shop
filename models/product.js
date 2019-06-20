//var Size = require('./size');

//define a model of product in this file
var mongoose = require('mongoose');  //导入mongoose模块
var Schema = mongoose.Schema; //得到mongoose模块里面的Schema对象

//这个类似于，在这里创建类
var schema = new Schema({ //实例化一个Schema //define a Schema //传入一个js对象来配置 //describe how the data we works should look like //其实就是类似于建一个数据库表结构
    imagePath: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
   
    _id     : {type: Number, required: true},
    sizes : [{ type: Schema.Types.ObjectId, ref: 'Size' }],
    // sizes : [{
    //             _id:        false,
    //             size:       {type: Schema.Types.ObjectId, ref: 'Size'}
    //             // product_sn: {type: String, required: true},
    //             // product_sku: {type: String, required: true},
    //             // product_size: {type: String, required: true},
    //             // stock_quantity: {type: Number, required: true}
    //         }],
    //sizes field set to an array of ObjectIds. The ref option is what tells Mongoose which model to use during population, in our case the Size model.
    //All _ids we store here must be document _ids from the Size model.
    //(in size.js) We also declared the Size _belong property as a Number, the same type as the _id used in the productSchema. It is important to match the type of _id to the type of ref.
    //重要，花了好几天才弄明白的。在 (in size.js) 里面我们还要将 Size 类的 _belong 字段设置为 Number 类型，这个类型需要和本类。也就是 productSchema 的 _id 字段的类型保持一致。
    //views : { type: Schema.Types.ObjectId, ref: 'View' },


    imageUrl: {type: String},
    smallRetinaImageUrl: {type: String},//注意，产品模型里面没有这一项
    product_sn: {type: String}, 
    product_sku: {type: String},//注意，产品模型里面没有这一项，加这一项，只是为了在将product通过addCart方法添加到购物车的时候可以保存product_sku这个值，要是不加这一项就不能保存product_sku这个值
    product_style: {type: String},
    product_color: {type: String},

    product_category_0: {type: Number},
    product_category_1: {type: Number},
    product_category_2: {type: Number},
    product_category_3: {type: Number},
    product_category_4: {type: Number},
    product_category_5: {type: Number},

    // imageUrl: {type: String}, //图片所在的目录
    // imageA: {type: String}, //这里放不同角度的图片
    // imageB: {type: String},
    // imageC: {type: String},
    // imageD: {type: String},
    view_number: {type: Number},

    // colorA: {type: String}, //这里放同一款，不同颜色的产品编号
    // colorB: {type: String},
    // colorC: {type: String},
    // colorD: {type: String},
    // colorE: {type: String},
    // colorF: {type: String},
    // colorG: {type: String},

    // colorAName: {type: String},
    // colorBName: {type: String},
    // colorCName: {type: String},
    // colorDName: {type: String},
    // colorEName: {type: String},
    // colorFName: {type: String},
    // colorGName: {type: String},
    sizeName: {type: String},//必须要加这一项，要不然 session.cart.items[x].item.sizeName 里面没办法保存这个值
    sizeAName: {type: String},
    sizeBName: {type: String},
    sizeCName: {type: String},
    sizeDName: {type: String},
    sizeEName: {type: String},
    sizeFName: {type: String},

    colorImage: {type: String},
    thumbnail: {type: String},
    extraSmall: {type: String},
    small: {type: String},
    smallRetina: {type: String},
    medium: {type: String},
    mediumRetina: {type: String},
    large: {type: String},
    largeRetina: {type: String},
    standard: {type: String},
    standardRetina: {type: String},
    
    imageType: {type: String},
    //title: {type: String, required: true},  //上面已经有了
    //description: {type: String, required: true},  //上面已经有了
    //price: {type: Number, required: true}, //上面已经有了
    product_name: {type: String},

    cat_id: {type: Number},
    brand_id: {type: Number},
    product_weight: {type: Number},

    shop_price: {type: Number},
    promote_price: {type: Number},
    promote_start_date: {type: Date},
    promote_end_date: {type: Date},

    quality: {type: Number},
    keywords: {type: String},
    product_brief: {type: String},
    product_desc: {type: String},

    is_promote: {type: Boolean},
    is_on_sale: {type: Boolean},
    is_new: {type: Boolean},
    is_hot: {type: Boolean},

    seller_note: {type: String},
    warn_number: {type: Number}



    
    




});//其实就是弄一个数据库表结构，在mysql里面创建表的时候其实也有这东西

//旧： 这个类似于，在这里创建实例，然后导出
module.exports = mongoose.model('Product', schema); //用定义好的Schema生成一个model，命名为Product，然后导出
//新： 这个类似于，在这里创建 一个叫 Product 的 model 对象，然后导出
//参数一： the name of the model (自己随便取)
//参数二： 实例化并且已经配置好的 schema 对象
