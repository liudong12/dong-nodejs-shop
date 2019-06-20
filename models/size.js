//var Product = require('./product');
//define a model of product in this file
var mongoose = require('mongoose');  //导入mongoose模块
var Schema = mongoose.Schema; //得到mongoose模块里面的Schema对象

var schema = new Schema({ //实例化一个Schema //define a Schema //传入一个js对象来配置 //describe how the data we works should look like

    product_sn: {type: String, required: true},
    product_sku: {type: String, required: true},
    product_size: {type: String, required: true},
    stock_quantity: {type: Number, required: true},
    //product_id: { type: Schema.Types.ObjectId, ref: 'Product' },//每个产品有多个尺码，这个具体的尺码是属于这个产品的
    //_belong : { type: Schema.Types.ObjectId, ref: 'Product' }
    //_belong : { type: Number, ref: 'Person' },

});//其实就是弄一个数据库表结构，在mysql里面创建表的时候其实也有这东西

module.exports = mongoose.model('Size', schema); //用定义好的Schema生成一个model，命名为Product，然后导出
