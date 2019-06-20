var Product = require('../models/product'); //导入 product model
var Size = require('../models/size');
var mongoose = require('mongoose');
//mongoose.disconnect();
mongoose.connect('localhost:27017/shopping');
//console.log(mongoose.connect('localhost:27017/shopping'));
//console.log(mongoose.connection.db);
var seeder = require('mongoose-seeder'),
    data = require('./data.json');
 //console.log(data);
seeder.seed(data, {dropDatabase: false, dropCollections: false}, function(err, dbData) {
    //var foo = dbData.users.foo;
});

function exit() {
    mongoose.disconnect();
}