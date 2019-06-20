//在这里配置 password
//here, setup passport and Strategy i use
var passport = require('passport'); //导入passport模块。来验证用户信息，判断是否能登录
var User = require('../models/user');//import user model，（相当于user 表）
var LocalStrategy = require('passport-local').Strategy; //npm install --save passport-local //算法

//这段代码是将环境中的user.id序列化到session中，即sessionID，同时它将作为凭证存储在用户cookie中。
passport.serializeUser(function (user, done) { //tell passport how to store the user in the session//传入done call back. excute the done function once its done
    done(null, user.id);//it means whenever you want to store the user in your session, serialize the user by id
});

//这段代码是从session反序列化，参数为用户提交的sessionID，若存在则从数据库中查询user并存储在req.user中。
passport.deserializeUser(function (id, done) {//this allow the passport to store my user in the session or store the id in the session and retrive the user whenever i need it through this stored id
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

/*
本地验证默认是通过用户名和密码来验证的，代码如下：

passport.use(new LocalStrategy(
      function(username, password, done) {
          //操作
    })
})        
也可以通过配置，采用邮箱和密码来验证，本文要介绍的就是通过邮箱和密码验证。

代码如下：
 */
/*
在passport.use()里面，done()有三种用法：

当发生系统级异常时，返回done(err)，这里是数据库查询出错，一般用next(err)，但这里用done(err)，两者的效果相同，都是返回error信息；
当验证不通过时，返回done(null, false, message)，这里的message是可选的，可通过express-flash调用；
当验证通过时，返回done(null, user)。

In case of an Error interacting with our database, we need to invoke done(err). 
When we cannot find the user or the passwords do not watch, we invoke done(null, false). 
If everything went fine and we want the user to login we invoke done(null, user).
 */
passport.use('local.signup', new LocalStrategy({//config the local passport package
    usernameField: 'email', //采用邮箱和密码来验证  //表单里面必须要有name=email的字段
    passwordField: 'password',  //表单里面必须要有name=password的字段
    passReqToCallback: true  //此处为true，下面函数的参数才能有req  //设置为true时可以将整个req传递给回调函数，这样在回调里就可以验证req中带的所有条件。
}, function (req, email, password, done) {//验证 with express-validator //this is call back //参数1：req对象。参数2：用户输入的email，参数3：用户输入的password
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();//检查用户输入的email是否符合要求
    //参数1：check the email field,参数2：提示语句。notEmpty()检查是否为空。isEmail()检查email格式是否正确
    req.checkBody('password', 'Invalid password').notEmpty().isLength({min:4});//检查用户输入的password是否符合要求
    var errors = req.validationErrors();//将验证时返回的错误赋给变量errors //validationErrors() is a function added by the express-validator package.
    if (errors) {//如果用户输入的格式有问题
        var messages = [];//声明一个空数组，用于保存所有的验证是产生的错误 //an aray of message which i want to pass back to the view
        errors.forEach(function(error) {//遍历所有的错误
           messages.push(error.msg);//将每个单独的错误放到数组里面//we are not push the complete error object, but the msg field
        });
        return done(null, false, req.flash('error', messages));  //null 表示：数据库查询没出错。false表示：此用户不存在。参数3是错误提示，使用flash模块，传入。。。
    }//如果用户输入的格式没问题
    User.findOne({'email': email}, function (err, user) {//find the user by email//参数2：call back.不是err就是the found user
        if (err) {//if i got error
            return done(err);  //数据库查询出错
        }
        if (user) {//if there is no error but found the user
            return done(null, false, {message: 'Email is already in use.'});//参数1：nothing wrong(no error),参数2:no retrived object(means not successful),参数3：提示，this will later be the flash message stored in the session, which i can output in the view(here is the message why it is not successful)
        }
        var newUser = new User();//create a new user by using mongoose s model(model是在schama的基础上来的，schama类似于表结构)
        newUser.email = email;
        //newUser.password = newUser.encryptPassword(password); //加密 //使用hash
        //newUser.password = password; //不加密   //备用
        newUser.password = newUser.encryptPasswordCrypto(password); //加密  //使用encryptPasswordCrypto方法来加密，可逆  //备用
        newUser.save(function(err, result) {//save the new user,传入call back.save 失败返回err，save成功返回result
           if (err) {
               return done(err);
           }
           return done(null, newUser);//null表示no error//then the user is created
        });
    });
}));

/*
Before asking Passport to authenticate a request, the strategy (or strategies) used by an application must be configured.

Strategies, and their configuration, are supplied via the use() function. For example, the following uses the LocalStrategy for username/password authentication.
 
passport.use的第一个参数是一个字符串，是用来标识验证方法的，因为一个工程中，可能会有多处验证，每次验证的逻辑会不一样，。。。
passport.use的第二个参数是一个实例化的对象，在对象里面添加你要进行用户登录验证的字段，其中passReqToCallback项，默认为false，设置为true时可以将整个req传递给回调函数，这样在回调里就可以验证req中带的所有条件。
 */
passport.use('local.signin', new LocalStrategy({ //local.signin 是这个 passport.use或 LocalStrategy 的名字，在路由里面会用到这个名字
    usernameField: 'signin_email',
    passwordField: 'signin_password',
    passReqToCallback: true
}, function(req, signin_email, signin_password, done) {
    req.checkBody('signin_email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('signin_password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': signin_email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'No user found.'});
        } // 本来是：if (!user.validPassword(signin_password))
        if (!user.validPasswordCrypto(signin_password)) { //validPassword是user模型里面的方法 //if the password is not valid
            return done(null, false, {message: 'Wrong password.'});
        } //!user.validPasswordCrypto(signin_password)  //备用
        return done(null, user); //the user here is the user i found in the database "function (err, user)"
    });
}));