var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs'); //npm install --save bcrypt-nodejs //this package allows me to easily hash my password

var userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},

    //自己加的
    firstName: {type: String},    //不能随便加必填，要是用户注册的时候没有填这一项的话，在写入数据库的时候会报错
    lastName: {type: String},    
    gender: {type: String}
});

//hash the password
userSchema.methods.encryptPassword = function(password) {//为userSchema添加一个叫encryptPassword的方法
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  //返回 hashed password
};

userSchema.methods.validPassword = function(password) {//check if the password match the hashed password
  return bcrypt.compareSync(password, this.password);  
};

//**********************************************************************************
//需要导入的东西
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    passcode = 'd6F3Efeq';

userSchema.methods.encryptPasswordCrypto = function(text) {//为userSchema添加一个叫encryptPasswordCrypto的方法 //加密
	var cipher = crypto.createCipher(algorithm,passcode)
	var crypted = cipher.update(text,'utf8','hex')
	crypted += cipher.final('hex');
	return crypted;
};

userSchema.methods.validPasswordCrypto = function(text) {//check if the password match the hashed password
	
	if (this.encryptPasswordCrypto(text) == this.password){
		return true;
	}
	return false;
};

userSchema.methods.decryptPasswordCrypto = function(text) {//解密
	var decipher = crypto.createDecipher(algorithm,passcode)
	var dec = decipher.update(text,'hex','utf8')
	dec += decipher.final('utf8');
	return dec; 
};
// var hw = encrypt("hello world")

// console.log(decrypt(hw));  // outputs hello world
//...................................................................................

module.exports = mongoose.model('User', userSchema);