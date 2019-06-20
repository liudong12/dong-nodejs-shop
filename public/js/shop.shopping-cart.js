(function($) {
	
	$(".cart-item-remove").click(function(e) {
        //防止默认事件
		e.preventDefault();
        //得到要删的这那个商品的sku
		$productSKU = $(this).data("sku");
		//alert($(this).data("sku"));


		var url = "/remove-one-item";
		$.ajax({
            url:    rootUrl + url + '/' + $productSKU, // 跳转到 action    
            // data: {
            //         selRollBack: selRollBack,
            //         selOperatorsCode: selOperatorsCode,
            //         PROVINCECODE: PROVINCECODE,
            //         pass2: pass2
            // },
             //data:aa,
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function(data) {
                

                if (data.result) { //等同于： if (data.result = true)
                        
                    alert("Removed Successfully！");
                    location.reload();
                    //下面是无刷新的写法
                    // $("#shopping-cart").load('/shopping-Cart' +  ' .content', function(responseTxt, statusTxt, xhr){
                    //     if(statusTxt == "success"){
                        
                    //     }
                    //     else if(statusTxt == "error"){
                    //         //alert("Error: " + xhr.status + ": " + xhr.statusText);
                    //         errorsHtml = '<div class="alert alert-danger"><ul>';
                            
                    //         errorsHtml += '<li>' + xhr.statusText + '</li>'; //showing only the first error.
                        
                    //         errorsHtml += '</ul></di>';
                                
                    //         $( '.add_cart_errors' ).html( errorsHtml );
                    //     }
                    // });
                } 
                else {
                    alert("Removed Failed！");
                }
            },
            error: function() {
                // view("异常！");    
                alert("Error！");
            }
        });
	});

	


    //展示层 
    function showLayer(id){ 
        var layer = $('#'+id), //var layer = $('#hw-layer')
            layerwrap = layer.find('.hw-layer-wrap');// layerwrap = $('#hw-layer').find('.hw-layer-wrap');
        layer.fadeIn(); 
        //屏幕居中 
        layerwrap.css({ 
            // 'margin-top': -layerwrap.outerHeight()/2 
             'margin-top': 0
             //'max-width': "none"  //这样写也有效
        }); 
    } 
 
    //隐藏层 
    function hideLayer(){ 
        $('.hw-overlay').fadeOut(); 
    } 
 
    $('.hwLayer-ok,.hwLayer-cancel,.hwLayer-close').on('click', function() { 
        hideLayer(); 
    }); 
 
    //触发弹出层 
    $('.show-layer').on('click',  function() {         
        var layerid = $(this).data('show-layer'); //return hw-layer
        showLayer(layerid); 

        ////////////////////////
        var url = "/edit-cart-item";
        var productSKU = $(this).data("sku");  
        
        
        $.ajax({
            url:    rootUrl + url + '/' + productSKU, // 跳转到 action    
            type: 'get',
            cache: false,
            dataType: 'json',
            beforeSend : function () {//alert("aaa");
                $('.loading').show();
            },
            success: function(data) {//alert("bbb");
                $('.loading').hide();
                //alert(data.largeImageUrl);
                $('#edit-cart-item-reload').html(data.view);
                //$(".content").css('max-width', "none"); //将 content 设置成 100% 宽度

                 
                //$("#reload").load(document.URL +  ' #categories');



                // $(".smallimg1").attr("srcset", data.largeImageUrl + ',' + data.largeRetinaImageUrl + ' ' + '2x');//将 product_sn + view? 替换掉以后，赋给 smallimg1 的 srcset 属性 
                // $(".smallimg2").attr("srcset", data.mediumImageUrl + ',' + data.mediumRetinaImageUrl + ' ' + '2x');//将 product_sn + view? 替换掉以后，赋给 smallimg2 的 srcset 属性 
                // $(".smallimg3").attr("srcset", data.smallImageUrl + ',' + data.smallRetinaImageUrl + ' ' + '2x');//将 product_sn + view? 替换掉以后，赋给 smallimg3 的 srcset 属性 
                // $("#bigimg").attr("srcset", data.standardImageUrl);//将 product_sn + view? 替换掉以后，赋给 bigimg 的 srcset 属性 

                // $(".color-name-span").text(data.product_color);

                // if (data.msg == "true") {
                //     // view("修改成功！");    
                //     alert("修改成功！");
                //     window.location.reload();
                // } else {
                //     view(data.msg);
                // }
            },
            error: function() {
                // view("异常！");    
                alert("Error！");
            }
        });
    

    }); 
 
    //点击或者触控弹出层外的半透明遮罩层，关闭弹出层 
    $('.hw-overlay').on('click',  function(event) { 
        if (event.target == this){   
            hideLayer(); 
        } 
    }); 
 
    //按ESC键关闭弹出层 
    $(document).keyup(function(event) { 
        if (event.keyCode == 27) { 
            hideLayer(); 
        } 
    }); 

}(jQuery));