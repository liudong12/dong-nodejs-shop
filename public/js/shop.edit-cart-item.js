(function($) {
//     //////////////////////////////////////////////////////////////////
//     // var imgboxWidth = $('.imgbox').width();
//     // $('.imgbox').css({'height':imgboxWidth+'px'});
//     // var bigboxWidth = $('.bigbox').width();
//     // $('.bigbox').css({'height':bigboxWidth+'px'});

//     //鼠标在图片上移动时，显示遮罩层区域的细节图
//     $(".imgbox").mousemove(function(event) {
//         $(".bigbox").show();
//         //计算百分比 
//         var sx = event.pageX, //鼠标在页面上的位置
//             sy = event.pageY,
//             ox = $(this).offset().left, //小图在页面上的偏移量
//             oy = $(this).offset().top,
//             cWidth = sx - ox, //鼠标在小图上的宽高
//             cHeight = sy - oy,
//             simgwidth = $("#smallimg").width(), //小图片的宽高
//             simgheight = $("#smallimg").height(),
//             //大图片的宽高
//             bimgwidth = $("#bigimg").width(),
//             bimgheight = $("#bigimg").height(),
//             //大图片显示区域的大小的一半
//             boxwidth = $(".bigbox").width() / 2,
//             boxheight = $(".bigbox").height() / 2,
//             ////得出鼠标位置占图片大小的百分比
//             x = (cWidth / simgwidth).toFixed(2),
//             y = (cHeight / simgheight).toFixed(2),
//             //细节大图全部显示时临界百分比，即细节大图在显示区域的上下左右的距离不能小于大图显示区域宽或高的一半
//             //鼠标在小图左侧移动时，全部显示细节大图时的最小宽占比
//             minpercx = ((boxwidth + 2) / bimgwidth).toFixed(2), //+2,是边框的大小
//             //鼠标在小图上侧移动时，全部显示细节大图时的最小高占比
//             minpercy = ((boxheight + 2) / bimgheight).toFixed(2),
//             //鼠标在小图右侧移动时，全部显示细节大图时的最大宽占比
//             maxpercx = 1 - minpercx,
//             //鼠标在小图下侧移动时，全部显示细节大图时的最大高占比
//             maxpercy = 1 - minpercy,
//             //遮罩层的大小的一半
//             layerwidth = $("#layer").width() / 2,
//             layerheight = $("#layer").height() / 2,
//             bx, by; //保存大图显示中心位置坐标
//         //$("#preview-img").width() * x小于等于250
//         if (x <= minpercx) {
//             x = minpercx;
//         } else if (x >= maxpercx) { //$("#preview-img").width() * x大于等于（1280-250=1030）
//             x = maxpercx;
//         }
//         if (y <= minpercy) { //$("#preview-img").height() * y小于等于250
//             y = minpercy;
//         } else if (y >= maxpercy) { //$("#preview-img").height() * y大于等于（800-250=550）
//             y = maxpercy;
//         }
//         //鼠标在小图上的位置，距离上下左右不能小于遮罩层宽或高的一半
//         if (cWidth < layerwidth) {
//             cWidth = layerwidth;
//         } else if (cWidth > (simgwidth - layerwidth)) {
//             cWidth = simgwidth - layerwidth;
//         }
//         if (cHeight < layerheight) {
//             cHeight = layerheight;
//         } else if (cHeight > (simgheight - layerheight)) {
//             cHeight = simgheight - layerheight;
//         }
//         //遮罩层显示的位置
//         $("#layer").css('top', (cHeight - layerheight) + "px");
//         $("#layer").css('left', (cWidth - layerwidth) + "px");
//         $("#layer").css('visibility', "visible");
//         //计算细节大图正好显示在显示区域中心时的坐标
//         bx = -(bimgwidth * x - boxwidth);
//         by = -(bimgheight * y - boxheight);
//         $("#bigimg").css('top', by + 'px');
//         $("#bigimg").css('left', bx + 'px');
//     });
//     //鼠标移出图片区域，隐藏大图和遮罩层
//     $(".imgbox").mouseout(function() {
//         $("#layer").css('visibility', 'hidden');
//         $(".bigbox").hide();
//     });


//     //鼠标点击缩略图时，在上方显示对应的图片
//     $(".imglist").click(function() {

//         $(this).addClass("selected").siblings().removeClass("selected");  //被点击的加边框，其他的去除边框

//         var re = /images\/[^-]*/ig;  //找被替换的(从 images/ 开始，到 - 结束)  如：images/pid000001a     如：images/163000101view1
//         // var dataSrc = $(this).find(".simg").data("src")+'-';  //暂时不用这种方法
//         var dataSrc = $(this).find(".simg").attr("data-src");  //找用来替换的  如：pid000001b         如：163000101view1
//         dataSrc = "images/" + dataSrc;  //拼接成： images/pid000001b               //拼接成：images/163000101view1
//         //alert("dataSrc" + dataSrc);
//         //alert(dataSrc);


//         // var srcValue = $(this).find(".simg").attr("src");  ////////////////////
//         var srcValue1 = $(".smallimg1").attr("srcset");//smallimg1 = min-width: 768px  //得到完整的 url
//         var srcValue2 = $(".smallimg2").attr("srcset");//smallimg2 = min-width: 480px  //得到完整的 url
//         var srcValue3 = $(".smallimg3").attr("srcset");//smallimg3 = min-width: 320px  //得到完整的 url
//         var srcValue4 = $(".smallimg4").attr("srcset");//standard
//         // alert(srcValue1);
//         // alert(srcValue2);
//         // alert(srcValue3);
//         $(".smallimg1").attr("srcset", srcValue1.replace(re, dataSrc));//将 product_sn + view? 替换掉以后，赋给 smallimg1 的 srcset 属性 
//         $(".smallimg2").attr("srcset", srcValue2.replace(re, dataSrc));//将 product_sn + view? 替换掉以后，赋给 smallimg2 的 srcset 属性
//         $(".smallimg3").attr("srcset", srcValue3.replace(re, dataSrc));//将 product_sn + view? 替换掉以后，赋给 smallimg3 的 srcset 属性
//         $(".smallimg4").attr("srcset", srcValue1.replace(re, dataSrc));//将 product_sn + view? 替换掉以后，赋给 bigimg 的 srcset 属性

        


        
//        //下面是用来测试的
//         // var name = 'http://dong-shop.com:8000/src/images/pid000001a-800x800.jpg, http://dong-shop.com:8000/src/images/pid000001a-1600x1600.jpg';
//         // alert(name.match(/pid.*a/ig)[1]);
//         // alert(name.match(/pid(.*)-/)[2]);
         
//         //  var pattern = /images\/[^-]*/ig; //[^-]*  只要不是-, 就继续匹配
//         //  //全局搜索  
//         //  //     /pid[^-]*-/ig;
//         //  //     /pid[^-]*/ig; 
//         //  //     /images\/[^-]*/ig;
//         //  //     /(?<=images\/)\w+/ig;  不支持正向回顾后发
//         //  //     /images\/([^-]+)-/ig;
//         // var str = 'http://dong-shop.com:8000/src/images/pid000001a-800x800.jpg, http://dong-shop.com:8000/src/images/pid000001a-1600x1600.jpg';
//         // alert(str.match(pattern)); //匹配到两个Box,Box
//         // alert(str.match(pattern).length); //获取数组的长度






//         // $(this).addClass("selected").siblings().removeClass("selected");
//         // var srcValue = $(this).find(".simg").attr("src");
//         // $("#smallimg").attr("srcset", srcValue.replace("small", "mid"));
//         // $("#bigimg").attr("srcset", srcValue.replace("_small", ""));
//         //alert($("#smallimg").attr("srcset"));
//     });

//     var dataColor = $(".product-color-ul").find(".selected").find(".color").data("color");//得到初始的颜色的名字//.default=>.color
//     $(".color-name-span").text(dataColor);//将上面得到的这个颜色的名字写到 color-name-span
// //alert(dataColor);

//     //鼠标点击颜色时，切换
//     $(".product-color-li").click(function() {
//         //e.preventDefault(); 
//         $(this).addClass("selected").siblings().removeClass("selected");//被点击的加边框，其他的去除边框
//         //////////////////////////////////////////////////////////////////////////////////////////
//         // var dataColor = $(this).find(".color").data("color");//得到被点击的那个颜色的名字
//         // // alert(dataColor);
//         // $(".color-name-span").text(dataColor);//将上面得到的这个颜色的名字写到 color-name-span




//         // var re = /images\/[^-]*/ig;  //找被替换的(从 images/ 开始，到 - 结束)  如：images/pid000001a     如：images/163000101view1
//         // // var dataSrc = $(this).find(".simg").data("src")+'-';  //暂时不用这种方法
//         // var dataId = $(this).find(".color").data("id");  //找用来替换的  如：pid000001b          如：163000101
//         // dataId1 = "images/" + dataId + 'view1';  //拼接成： images/pid000002a       //拼接成：images/163000101view1
//         // dataId2 = "images/" + dataId;  //拼接成：images/163000101
//         // //alert(dataId2);


//         // // var srcValue = $(this).find(".simg").attr("src");  ////////////////////
//         // var srcValue1 = $(".smallimg1").attr("srcset");//smallimg1 = min-width: 768px  //得到完整的 url
//         // var srcValue2 = $(".smallimg2").attr("srcset");//smallimg1 = min-width: 768px  //得到完整的 url
//         // var srcValue3 = $(".smallimg3").attr("srcset");//smallimg3 = min-width: 320px  //得到完整的 url       
//         // // alert(srcValue1);
//         // // alert(srcValue2);
//         // // alert(srcValue3);
//         // $(".smallimg1").attr("srcset", srcValue1.replace(re, dataId1));//将 product_sn + view? 替换掉以后，赋给 smallimg1 的 srcset 属性 
//         // $(".smallimg2").attr("srcset", srcValue2.replace(re, dataId1));//将 product_sn + view? 替换掉以后，赋给 smallimg2 的 srcset 属性 
//         // $(".smallimg3").attr("srcset", srcValue3.replace(re, dataId1));//将 product_sn + view? 替换掉以后，赋给 smallimg3 的 srcset 属性 
//         // $("#bigimg").attr("srcset", srcValue1.replace(re, dataId1));//将 product_sn + view? 替换掉以后，赋给 bigimg 的 srcset 属性 

//         // $("#product_sn").attr("value", dataId);//将 product_sn(如：163000101)  写到 #product_sn 的 value 属性里面


//         // var viewNumber = $(this).find(".color").data("view-number");
//         // //alert(viewNumber);
        
//         // // 定义和用法
//         // // :visible 选择器选取每个当前是可见的元素。
//         // // 除以下几种情况之外的元素即是可见元素：
//         // // 设置为 display:none
//         // // type="hidden" 的表单元素
//         // // Width 和 height 设置为 0
//         // // 隐藏的父元素（同时隐藏所有子元素）
        
//         // //检测当前有几个可见的class是imglist的元素
//         // var str = $(".imglist:visible").last().attr("data-id");//得到最后一个可见的元素，并得到它的data-id属性
//         // var str = parseInt(str.charAt(str.length - 1));  //parseInt("10");//10  //得到最后一个字符，并转换成整数
//         // //alert('str='+str+'viewNumber'+viewNumber);
//         // if(str>viewNumber){  //如果当前这款的view图的数量大于被点击的这款的view图的数量
//         //     for (j = str; j > viewNumber; j--) { 
//         //         $(".imglist" + j).css("display", "none");
//         //     }
//         // }else{
//         //     for (j = str+1; j < viewNumber+1; j++) { //alert(".imglist" + j);
//         //         $(".imglist" + j).css("display", "block");
//         //     }
//         // }

//         // for (i = 1; i < viewNumber+1; i++) { 

//         //     // var str = $(".imglist" + i).attr("data-id");
//         //     // var str = parseInt(str.charAt(str.length - 1));  //parseInt("10");//10
//         //     // alert('str='+str+'i='+i);
//         //     // if(str != i){
//         //     //     alert("no");
//         //     // }
            
//         //     //将thumbnailSrc的值'thumbnailSrc' + i创建成为一个变量并赋值
//         //     var thumbnailSrc ='thumbnailSrc' + i;//生成变量名
//         //     eval(thumbnailSrc + '= $(".simg" + i).attr("src"); ');//给变量赋值

//         //     //将thumbnailDataSrc的值'thumbnailDataSrc' + i创建成为一个变量并赋值
//         //     var thumbnailDataSrc ='thumbnailDataSrc' + i;//生成变量名
//         //     eval(thumbnailDataSrc + '= $(".simg" + i).data("src"); ');//给变量赋值

           
//         //     //alert(eval(thumbnailSrc + ".replace(re, dataId2 + 'view' + i); "));
//         //     //alert($(".simg" + i).attr("src"));
//         //     //只有用eval才能转换成变量名
//         //     $(".simg" + i).attr("src", eval(thumbnailSrc + ".replace(re, dataId2 + 'view' + i); ")    );

//         //     $(".simg" + i).attr("data-src", dataId + 'view' + i);
            
//         //     //alert(dataId2);
        
//         //     // var str = [];
//         //     // str.push("thumbnailSrc");
//         //     // str.push(i);
//         //     // str.join("");
//         //     // alert(str);
//         // }
//         // //alert(thumbnailSrc1+ "  | "+thumbnailSrc2+ "  | "+thumbnailSrc3+ "  | "+thumbnailSrc4+ "  | "+thumbnailSrc5+ "  | "+thumbnailSrc6);
//         // //alert(thumbnailDataSrc1+ "  | "+thumbnailDataSrc2+ "  | "+thumbnailDataSrc3+ "  | "+thumbnailDataSrc4+ "  | "+thumbnailDataSrc5+ "  | "+thumbnailDataSrc6);

//         // // var thumbnailSrc1 = $(".simg1").attr("src");//得到缩略图1的url  (view)
//         // // var thumbnailSrc2 = $(".simg2").attr("src");//得到缩略图2的url  (view)
//         // // var thumbnailSrc3 = $(".simg3").attr("src");//得到缩略图3的url  (view)
//         // // var thumbnailSrc4 = $(".simg4").attr("src");//得到缩略图4的url  (view)

//         // // var thumbnailDataSrc1 = $(".simg1").data("src");//得到缩略图1所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // var thumbnailDataSrc2 = $(".simg2").data("src");//得到缩略图2所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // var thumbnailDataSrc3 = $(".simg3").data("src");//得到缩略图3所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // var thumbnailDataSrc4 = $(".simg4").data("src");//得到缩略图4所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // //alert("thumbnailDataSrc1:" + thumbnailDataSrc1);
//         // // //alert($(".simg1").attr("data-src"));

//         // // $(".simg1").attr("src", thumbnailSrc1.replace(re, dataId2 + 'view1'));//更新缩略图1的url  (view)
//         // // $(".simg2").attr("src", thumbnailSrc2.replace(re, dataId2 +'view2'));//更新缩略图2的url  (view)
//         // // $(".simg3").attr("src", thumbnailSrc3.replace(re, dataId2 +'view3'));//更新缩略图3的url  (view)
//         // // $(".simg4").attr("src", thumbnailSrc4.replace(re, dataId2 +'view4'));//更新缩略图4的url  (view)

//         // // var re2 = /.*/ig;

//         // // $(".simg1").attr("data-src", dataId + 'view1');//更新缩略图1所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // $(".simg2").attr("data-src", dataId + 'view2');//更新缩略图2所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // $(".simg3").attr("data-src", dataId + 'view3');//更新缩略图3所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // $(".simg4").attr("data-src", dataId + 'view4');//更新缩略图4所对应的产品编号 (product_sn) +view? 如：16300101view1
//         // // // alert(srcValue);
//         // // 
        
//         //////////////////////////////////////////////////////////////////////////////////////////////


//         var url = "/product-detail";
//         var productId = $(this).find(".color").data("product-id");  //parseInt($(this).find(".color").data("product-id"));
//         //var aa = $("#categories").serialize();
        
//         $.ajax({
//             url:    url + '/' + productId, // 跳转到 action    
//             // data: {
//             //         selRollBack: selRollBack,
//             //         selOperatorsCode: selOperatorsCode,
//             //         PROVINCECODE: PROVINCECODE,
//             //         pass2: pass2
//             // },
//              //data:aa,
//             type: 'get',
//             cache: false,
//             dataType: 'json',
//             success: function(data) {
//                 //alert(data.largeImageUrl);
//                 // var str = data.view;
//                 // alert(str);
//                 // var s1 = "shop.product-detail.js";
//                 // var s2 ="shop.edit-cart-item.js";
//                 // var str2 = str.replace(s1, s2);
//                 // alert(str2);
//                 // $('#categories').html(str2);
                

//                 // var str = data.view;
//                 // var s1 = 'shop.product-detail.js';
//                 // var s2 ='shop.empty.js';
//                 // var s3 = 'id="add-to-cart"';
//                 // var s4 = 'id="edit-cart-item"';
                
//                 // var str2 = str.replace(s1, s2);
//                 // var str3 = str2.replace(s3, s4);
//                 // alert(str3);
//                 // $('#categories').html(str3);




//                 $('#categories').html(data.view);
                 
//                 //$('#add-to-cart').attr('id','edit-cart-item');

                
                

//                 //$("#reload").load(document.URL +  ' #categories');



//                 // $(".smallimg1").attr("srcset", data.largeImageUrl + ',' + data.largeRetinaImageUrl + ' ' + '2x');//将 product_sn + view? 替换掉以后，赋给 smallimg1 的 srcset 属性 
//                 // $(".smallimg2").attr("srcset", data.mediumImageUrl + ',' + data.mediumRetinaImageUrl + ' ' + '2x');//将 product_sn + view? 替换掉以后，赋给 smallimg2 的 srcset 属性 
//                 // $(".smallimg3").attr("srcset", data.smallImageUrl + ',' + data.smallRetinaImageUrl + ' ' + '2x');//将 product_sn + view? 替换掉以后，赋给 smallimg3 的 srcset 属性 
//                 // $("#bigimg").attr("srcset", data.standardImageUrl);//将 product_sn + view? 替换掉以后，赋给 bigimg 的 srcset 属性 

//                 // $(".color-name-span").text(data.product_color);

//                 // if (data.msg == "true") {
//                 //     // view("修改成功！");    
//                 //     alert("修改成功！");
//                 //     window.location.reload();
//                 // } else {
//                 //     view(data.msg);
//                 // }
//             },
//             error: function() {
//                 // view("异常！");    
//                 alert("异常！");
//             }
//         });
//     });


//     //鼠标点击尺寸时，切换
//     $(".product-size-li").click(function() {
//         $(this).addClass("size-selected").siblings().removeClass("size-selected");//被点击的加边框，其他的去除边框
//         var dataSize = $(this).find(".size").data("size");//得到被点击的那个尺寸的名字
//         // alert(dataSize);
//         $(".size-name-span").text(dataSize);//将上面得到的这个尺寸的名字写到 color-name-span

//     });

//     //$(".selected").find(".color-radio").attr('checked', true);//将被点击的那个尺寸打钩
//     $(".product-color-ul").find(".selected").find("input").attr('checked', true);


//      // var url = "http://dong-shop.com:8000/add-to-cart";
//      //            var data = {"id":$("#id").val()};
//      //            var success= function(response){
//      //                if(response.errno == 0){
//      //                    alert('加入购物车成功');
//      //                }else{
//      //                    alert('加入购物车失败');
//      //                }
//      //            }
//      //            $.post(url, data, success, "json");
//      //        }

//      // $('#add-to-cart').ajaxSubmit({
//      //     url : 'http://dong-shop.com:8000/add-to-cart',
//      //     type : 'POST',
//      //     dataType: 'JSON',
//      //     beforeSubmit : function () {
//      //         // $('#loading').dialog('open');
//      //     },
//      //     success : function (responseText) {
//      //        alert("aaa");
//      //        $(".mobile-cart-trigger").trigger("click");
//      //     }
//      // });


// //////////////////////////////////////////////////////////////

//     //  var options = {  
//     //     //url : '/add-to-cart',//默认是用form里面的请求地址  //action="{{route('product.addToCart')}}"
//     //      type : 'POST',
//     //      dataType: 'JSON',
//     //      beforeSubmit : function () {
             
//     //          $(".back-to-top").trigger("click");//模拟点击back-to-top按钮，回到顶部

//     //          //判断mobile-cart下拉菜单是否已经关闭，这句来自于main.js
//     //         var cartIsVisible = ( !$('.mobile-cart').hasClass('mobile-cart-is-active') ) ? true : false;
        
//     //         if (!cartIsVisible){//如果还没有关闭
//     //             $(".mobile-cart-trigger").trigger("click"); 
                
                
//     //         }else{
                
//     //         }
//     //      },
//     //      success : function (responseText) {
//     //         //alert(responseText.itemsInCart);
//     //         $(".badge").text(responseText.itemsInCart);//更新购物车里商品的数量
//     //         // $('.reload').load(document.URL +  ' .mobile-cart');
//     //         // $(".mobile-cart-trigger").trigger("click");
         
            
//     //         //The following example loads the content of the element with class="mobile-cart", inside the file "document.URL", into a specific <div> element:
//     //         //重新加载主页，也就是路由'/'所对应的shop.index这个文件。并且在里面找到.mobile-cart这个元素来进行重新加载。
//     //         //  '/' --> '/'所对应的路由  -->  控制器  --> shop.index这个文件
//     //         $("#reload").load('/' +  ' .mobile-cart', function(responseTxt, statusTxt, xhr){
//     //             if(statusTxt == "success"){
//     //                 //alert("External content loaded successfully!");
//     //                 $(".mobile-cart-trigger").trigger("click");
//     //                 setTimeout(function(){
//     //                     //判断是否已经关闭，这句来自于main.js
//     //                     var cartIsVisible = ( !$('.mobile-cart').hasClass('mobile-cart-is-active') ) ? true : false;
                        
//     //                     if (!cartIsVisible){//如果还没有关闭
//     //                         $(".mobile-cart-trigger").trigger("click"); 
//     //                     }else{

//     //                     }
                    
//     //                 }, 3000);
//     //             }
//     //             else if(statusTxt == "error"){
//     //                 //alert("Error: " + xhr.status + ": " + xhr.statusText);
//     //                 errorsHtml = '<div class="alert alert-danger"><ul>';
                    
//     //                 errorsHtml += '<li>' + xhr.statusText + '</li>'; //showing only the first error.
                
//     //                 errorsHtml += '</ul></di>';
                        
//     //                 $( '.add_cart_errors' ).html( errorsHtml );
//     //             }
//     //         });

//     //      },
//     //     error: function(data){//后端验证, 通过ajax提交的时候，如果不通过会返回一个responseJSON
//     //     //If an ajax request don't pass a form request validation, errors will be returned as json. You can catch them in the error callback of jquery ajax method 
//     //     //$(".add_cart_errors").text(data.errmsg);
//     //     //process validation errors here.
//     //     var errors = data.responseJSON; //this will get the errors response data.
//     //     //show them somewhere in the markup
//     //     //e.g
//     //     errorsHtml = '<div class="alert alert-danger"><ul>';

//     //     $.each( errors, function( key, value ) {
//     //         errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
//     //     });
//     //     errorsHtml += '</ul></di>';
            
//     //     $( '.add_cart_errors' ).html( errorsHtml ); //appending to a <div id="form-errors"></div> inside form
        
//     //     }
//     // };  
//     /////////////////////////////////////////////////////
  
//     // $('#add-to-cart').submit(function() {  
//     //     $(this).ajaxSubmit(options);  
//     //     return false;
//     // }); 

//    //   $('#add-to-cart').submit(function() {
//    // $(this).ajaxSubmit(function() {   
//    //       url : 'http://dong-shop.com:8000/add-to-cart',
//    //       type : 'POST',
//    //       beforeSubmit : function () {
//    //           // $('#loading').dialog('open');
//    //       },
//    //       success : function (response) {
//    //          alert("aaa");
//    //          $(".mobile-cart-trigger").trigger("click");
//    //       }
//    //       return false; //阻止表单默认提交
//    // });

//     // var $form = $('#add-to-cart');
//     // $form.submit(function(event){

//     //     moni();

//     //     return false;

//     // }); 

//     // function moni(status, response){

//     // $(".mobile-cart-trigger").trigger("click");
    
//     // $form.get(0).submit();

//     // };
//     // 
    



//     //表单的前端验证，使用validate.js
    

//     // $(".selector").validate({     
//     //     submitHandler: function(form) {      
//     //       $(form).ajaxSubmit();     
//     //     }  
//     // }) 
//     // 
    

    

    
//     // $("#edit-cart-item").validate({ //备注：如果要用validate来验证的话，form里面就不能写action
//     //     debug: true,
//     //     rules: {
//     //             // gender: "required",
//     //             "color-radio": "required",//所有颜色的input的name属性都叫color-radio，这样就形成了一个组
//     //             "size-radio": "required"   //所有尺寸的input的name属性都叫size-radio，这样就形成了一个组 
                
//     //     },  
//     //     messages: {
//     //             // gender: "请输入您的名字",
//     //             "color-radio": "Color Required",
//     //             "size-radio": "Size Required"   
//     //     },
//     //     errorLabelContainer : 'ol.add_cart_errors',
//     //     wrapper : 'li',
//     //     highlight : function (element, errorClass) {
//     //         //$(element).parent().parent().parent().css('border', '1px solid red');
//     //         // $(ol.add_cart_errors li).addClass("alert");
//     //         // $(ol.add_cart_errors li).addClass("alert-danger");
            
//     //     },
//     //     errorClass:"alert alert-danger error",
//     //     unhighlight : function (element, errorClass) {
//     //         //$(element).parent().parent().parent().css('border', 'none');
//     //     },

//     //     submitHandler: function(form) {  
//     //     //alert('aaa');    
//     //             $("#edit-cart-item").ajaxSubmit(options);  
//     //             return false;   // required to block normal submit since you used ajax
//     //     }  
//     // }); 
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///
// ///
     $(".product-size-ul").find(".size-selected").find("input").attr('checked', true);
//     var url = "/update-cart-item";
//     // var productSKU = $(".product-size-ul").find(".size-selected").find("input").data("product-sku");
//     // alert(productSKU);

//     var options = {  
//             // url : url + '/' + productSKU,//默认是用form里面的请求地址  //action="{{route('product.addToCart')}}"
//             url : url,
//             type : 'get',
//             dataType: 'json',
//             beforeSubmit : function () {
//             alert('beforeSubmit2');
//             },
//             success : function (responseText) {
//             location.reload();

//             },
//             error: function(XMLHttpRequest, textStatus, errorThrown){
//                 alert(textStatus);
        
//             }
//     };  
// alert('aa');
//     $('#edit-cart-item').submit(function() { 
//     alert('submit'); 
//         $(this).ajaxSubmit(options);  
//         return false;
//     }); 

// 	// $('.edit-cart-item').on('click',  function() {         
    
//  //        ////////////////////////
//  //        var url = "/update-cart-item";
//  //        var productSKU = $(this).data("sku");  
//  //        alert(productSKU);
        
        
//  //        $.ajax({
//  //            url:    url + '/' + productSKU, // 跳转到 action  

//  //            type: 'get',
//  //            cache: false,
//  //            dataType: 'json',
//  //            success: function(data) {
//  //                alert('success');
//  //            },
//  //            error: function() {
//  //                // view("异常！");    
//  //                alert("异常！");
//  //            }
//  //        });
    

//  //    }); 
 
//     //输入框
//     // var oInput = new SimpleNumberInput({
//     //     target: document.getElementById('update-product-quality2'),
//     //     value: 2,
//     //     min: 0,
//     //     max: 10,
//     //     unit: 1
//     //     //用这个的话，要加下面这2句
//     //     //<div id="update-product-quality2" value=""></div>
//     //     //<script type="text/javascript" src="{{URL::to('src/js/SimpleNumberInput.js')}}"></script>
//     // });

    //向产品数量的下拉菜单里面写入选项，并设置默认的值
    var productQty = $("#product-quality").data("qty");//本来有几个商品
    var startNum = "1";
    var endNum   = "10";
    for(var k=startNum; k<=endNum; k++ ) 
    {
      var selected = (k==productQty) ? 'selected' : '';
      $( "#product-quality" ).append("<option value='"+k+"'"+selected+">"+k+"</option>");
    }
}(jQuery));