## Tutorial on How to Build a Shopping Cart with NodeJS/ Express

This repository holds the source code of my YouTube series on how to create a shopping cart with NodeJS/Express/MongoDB



创建项目
1. project> express shopping-cart --hbs
--hbs === set up default template engine to handle bar
express 是 nodejs 的一个框架，类似于 php 和 laravel

2. project> cd shopping-cart

3. shopping-cart> npm install

4. shopping-cart> npm start
//to start the server

5. shopping-cart> npm install express-handlebars --save
//this express-handlebars offer more feature than the built in one.

6. download mongodb
cd mongodb
cd bin
双击运行mongodb
这样才能读写
要一直开着，不能关闭，关闭了就不能用了

install mongoose
7. npm install --save mongoose              //加 --save 以后 就会在 package.json 里面注册一个 （就会保存在里面）
-------------------------------------------------------------------------------------------------------
mongodo 常用命令
C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe  保持窗口打开
-----------------------------------------------------------
另起窗口
C:\windows\system32>cd..

C:\Windows>cd..

C:\>cd C:\Program Files\MongoDB\Server\3.4\bin

C:\Program Files\MongoDB\Server\3.4\bin>mongo.exe
MongoDB shell version v3.4.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.3
Server has startup warnings:
2017-05-04T03:13:31.564+0800 I CONTROL  [initandlisten]
2017-05-04T03:13:31.564+0800 I CONTROL  [initandlisten] ** WARNING: Access contr
ol is not enabled for the database.
2017-05-04T03:13:31.565+0800 I CONTROL  [initandlisten] **          Read and wri
te access to data and configuration is unrestricted.
2017-05-04T03:13:31.566+0800 I CONTROL  [initandlisten]
2017-05-04T03:13:31.567+0800 I CONTROL  [initandlisten] Hotfix KB2731284 or late
r update is not installed, will zero-out data files.
2017-05-04T03:13:31.567+0800 I CONTROL  [initandlisten]

----------------------------------------------------------

> show collections
> use foodorderdb
switched to db foodorderdb
> show collections
> use tekbook
switched to db tekbook
> show collections
books
categories
-----------------------------------------------------
> use shopping
switched to db shopping
2017-05-10T14:26:12.401+0800 I NETWORK  [thread1] Socket say send() An existing
connection was forcibly closed by the remote host. 127.0.0.1:27017

> show collections
2017-05-10T14:26:30.894+0800 I NETWORK  [thread1] trying reconnect to 127.0.0.1:
27017 (127.0.0.1) failed
2017-05-10T14:26:31.599+0800 I NETWORK  [thread1] reconnect 127.0.0.1:27017 (127
.0.0.1) ok
products
sessions
users

> db.products.drop()
true
>

如何删除一张表里面的内容？
> db.products.remove({})
> db.sizes.remove({})
> db.products.find()  查询products表
> db.sizes.find()  查询sizes表

--------------------------------------------------
如何加载数据？
PS C:\nodejs-project\dong-nodejs-shop-2-no-bootstrap> cd seed
PS C:\nodejs-project\dong-nodejs-shop-2-no-bootstrap\seed> node product-seeder.js
PS C:\nodejs-project\dong-nodejs-shop-2-no-bootstrap\seed> cd..
--------------------------------------------------
本项目使用 nodejs 来开发一个购物网站，是在 mindspace 的 nodejs shopping cart 的基础上修改的，本项目不是 SPA
参考： E:\视频教程\IT\mindspace\NodeJS Shopping Cart\nodejs-shopping-cart-tutorial-07-finishing-touches
如何运行这个项目？
1.  打开 cmd
2. 
	C:\windows\system32>cd..

	C:\Windows>cd..

	C:\>cd C:\Program Files\MongoDB\Server\3.4\bin
3.  C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe
4.  保持窗口的打开
4.x 如要通过命令行操作数据库，则：
	另起窗口
	C:\windows\system32>cd..

	C:\Windows>cd..

	C:\>cd C:\Program Files\MongoDB\Server\3.4\bin

	C:\Program Files\MongoDB\Server\3.4\bin>mongo.exe

5.  在项目文件夹上面右键打开 termal
	PS C:\nodejs-project\dong-nodejs-shop-2-no-bootstrap> npm start

	> shopping-cart@0.0.0 start C:\nodejs-project\dong-nodejs-shop-2-no-bootstrap
	> node ./bin/www

-----------------------------------------------------
> npm install mongoose@4.5.0


drop db
>use shopping
>db.dropDatabase()


upload project to github
去到项目文件夹，然后 git bash
> git init
> git add .
> git commit -m "这里是注释。。。"
> git remote add origin https://github.com/chenyufeng1991/NewsClient.git
> git pull origin master