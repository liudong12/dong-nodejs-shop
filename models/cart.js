/*
    Cart {
            items:  {
                        '1':  {
                                item: [Object], 
                                qty: 1, 
                                price: 40
                               },
                        '2':  {
                                item: [Object], 
                                qty: 0, 
                                price: 0
                               }
                    }
            totalQty: 1,
            totalPrice: 40,
            add: [Function],
            generateArray: [Function]
         }
*/

//whenever i re-create my cart, i pass my old cart into it.
//(oldCart)如果传入空对象的话，items，totalQty，totalPrice等字段 will be undefined. 因此要加 ||
module.exports = function Cart(oldCart) { //use classic javascript constructor function here 因为我们不需要保存到数据库，有可能以后要为登录的用户保存。//执行这个函数以后会实例化一个对象
    this.items = oldCart.items || {}; //这个购物车对象应该要有 items 字段 //不是oldCart里面的items，就是空对象
    this.totalQty = oldCart.totalQty || 0; //这个购物车对象应该要有 totalQty 字段
    this.totalPrice = oldCart.totalPrice || 0; //这个购物车对象应该要有 totalPrice 字段

    //whenever i add new item, i will take my old cart, and create the new cart of this old cart. and i also want to ba able to check if the certain product id already exists in this cart. if yes, then i will only update the quality and so on. so that i will not push a new product in there.
    this.add = function(item, id) { //we need be able to add new item to my cart //we need item and the id of this item //we also need to group my items
        var storedItem = this.items[id];//this is the exist items where i want to see if the id already exists.
        if (!storedItem) {//if i am not retriving this storedItem, i will create a new one.如果购物车里面没有这个id所对应的产品
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};//i will create a new one
            //create a new entry: {item: item, qty: 0, price: 0} //对象里面的对象
            //give it a key to be: id
            //also asign it to the storedItem
        }
        storedItem.qty++; //increase the qty by 1
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++; //increase the totalQty by 1
        this.totalPrice += storedItem.item.price;   

        console.log("cart---" + this.items[id].item.sizeName);
        console.log("cart---" + this.items[id].item.imagePath);
    };

    this.reduceByOne = function(id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    this.removeItem = function(id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };

    this.removeOneItem = function(id){ //console.log('aaa');

        var itemsInCart = this.items;

        if(this.items){//检查购物车里面是否已经有东西  

            if (this.items.hasOwnProperty(id)){//如果已经有东西的话，继续检查要删除的这个产品是否在购物车里面

                //echo($this->items[$id]['qty']);
                //echo($this->items[$id]['price']);
                // console.log(this.items[id]['qty']);
                // console.log(this.items[id]['price']);
                // console.log(this.totalQty);
                // console.log(this.totalPrice);
                
                this.totalQty = this.totalQty - this.items[id]['qty']; //使用方括号运算符来读取属性
                //this.totalQty = this.totalQty - this.items[id].qty;  //也可以这样写，因为qty是一个对象里面的属性 //其实这样写更清楚
                //this.totalQty = this.totalQty - this.items.id.qty;  //这样写不行，因为 数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。
                
                this.totalPrice -= this.items[id]['price'];  //使用方括号运算符来读取属性
                //this.totalPrice -= this.items[id].price; //也可以这样写，因为price是一个对象里面的属性
                //this.totalPrice -= this.items.id.price;  //这样写不行
                

                // console.log("type: " + Object.prototype.toString.call(this.items));
                // console.log("type: " + Object.prototype.toString.call([1,2,3]));



                delete this.items[id]; //删除对象this.items里面属性为 （变量 id 所对应的值） 的元素
                //delete命令用于删除对象的属性，删除成功后返回true。

                


                if(this.items){ //console.log('true');
                    return true;
                }
                else{ //console.log('false');
                    return false;
                }
                

            }
        }
    }
    
    this.generateArray = function() { //it will give me my cart items as an array
        var arr = [];//return at the end
        for (var id in this.items) {//loop through keys in my items
            arr.push(this.items[id]);//push the value of each of my item
        }
        return arr;
    };
};