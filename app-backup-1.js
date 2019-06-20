var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
//var hbs = require('hbs');
//var hbs = require('./helpers/handlebars')(expressHbs);
// var hbs = require('hbs');
// hbs.registerHelper('table', function(data) {
//   var str = '<table>';
//   for (var i = 0; i < data.length; i++ ) {
//     str += '<tr>';
//     for (var key in data[i]) {
//       str += '<td>' + data[i][key] + '</td>';
//     };
//     str += '</tr>';
//   };
//   str += '</table>';

//   return new Handlebars.SafeString (str);
// });
// 
// 
// var hbs = expressHbs.create({
//     // Specify helpers which are only registered on this instance.
//     helpers: {
//         foo: function () { return 'FOO!'; },
//         bar: function () { return 'BAR!'; }
//     }
// });

var mongoose = require('mongoose');
var session = require('express-session'); //npm install --save express-session
var passport = require('passport'); //npm install --save passport
var flash = require('connect-flash'); //npm install --save connect-flash
var validator = require('express-validator');

//我们将购物车保存在session里面，好处是跳转页面，关闭页面的时候，购物车不会自动的清空。并且未登录的用户也可以使用购物车
//加这句的同时，其实也就是告诉express不要使用默认的memoryStore
//因为memoryStore是将session保存在memory里面的，加了以后就保存在server上面了
//执行 require('connect-mongo') 的结果是导出一个函数。然后我们要传入session
var MongoStore = require('connect-mongo')(session);//因为我们的数据库用的是mongodb, 这里的session也是mongo. so we can reuse the database connection

var routes = require('./routes/index');//导入路由 将接localhost:3000/
var userRoutes = require('./routes/user'); //导入路由 将接localhost:3000/user

var app = express(); //Creates an Express application. The express() function is a top-level function exported by the express module.

mongoose.connect('localhost:27017/shopping'); //创建数据库连接 //传入 the path of our server，端口号在运行mongodb的命令行里面找//"shopping" is the database name because the mongodb server might hold multiple database
//注意：你不需要去创建数据库，这样写好以后，会自动创建的
require('./config/passport');//相当于把这个文件里面的东西复制过来

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
//app.engine('expressHbs', hbs.engine);

// app.engine('.hbs', expressHbs({
//                                 defaultLayout: 'layout', 
//                                 extname: '.hbs',
//                                 helpers: hbsHelper
//                               }));

app.set('view engine', '.hbs');

//添加中间件  //应用于(apply to) 所有的请求  //第一组过滤
//Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //注意：app.use注册的中间件，如果path参数为空，则默认为"/"，而path为"/"的中间件默认匹配所有的请求。
//使用app.use(logger('dev'));可以将请求信息打印在控制台，便于开发调试，但实际生产环境中，需要将日志记录在log文件里
app.use(bodyParser.json());
//bodyParser中间件用来解析http请求体，是express默认使用的中间件之一。
//bodyParser.json是用来解析json数据格式的。bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据，也就是请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());//用于验证被提交的表单的中间件
app.use(cookieParser());
app.use(session({//here, we store the session on mongodb database. 保存在数据库中的到期的session将被自动的删除
  secret: 'mysupersecret', //用来注册session id 到cookie中，相当与一个密钥。
  resave: false, //the default value is true. if this is set to true, the session will be saved on the server on each request no matter if something changed or not
  saveUninitialized: false, //the default value is true. if this is set to true, the session will be stored on the server even through it is not been initialized, not has been added there.
  store: new MongoStore({ mongooseConnection: mongoose.connection }),//不要使用默认的memoryStore，而是使用MongoStore。//mongooseConnection: mongoose.connection 表示：specify a "mongooseConnection" key to tell it not to open a new connection on its own.(which it could do, of course). but use the exist connection.
  cookie: { maxAge: 180 * 60 * 1000 } // config how long my session should live before they expired.
}));
app.use(flash()); //this needs session
app.use(passport.initialize());//initialize passport
app.use(passport.session());//set to use session to store the users
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {//this is default express middleware set up
    res.locals.login = req.isAuthenticated();//在res对象里面的locals对象里面添加自定义的字段login。req.isAuthenticated()返回true or false.//这句话的目的是 i want to have a login varible in my view //i am bascially setting up this (res.locals.login) gobal varible here.
    res.locals.session = req.session;//make my session available in my views //this just make sure that i may access session in all my templates without having to pass it 分开的 in my routers files or in my routers functions
    next();
});

//应用于指定路径的请求 //第二组过滤
app.use('/user', userRoutes); //凡是以/user开头的路由都交给userRoutes来处理（对应routes/user.js文件，在上方导入
app.use('/', routes); //凡是以 / 开头的路由都交给routes来处理（对应routes/index.js文件），在上方导入 
//注意：'/' 一定要放在 '/user' 的下面，要不然，永远都不会进入到/user

// catch 404 and forward to error handler  //第三组过滤
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers  //第四组过滤

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app; //导出 app 对象
