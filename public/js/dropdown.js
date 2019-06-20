(function($) {

    // var screenSize = $(window).width();
    // // alert(screenSize);



    // if ($(window).width() < 768) {
    //     // do something for small screens
    //     // alert('aaa');

    // } else if ($(window).width() >= 751) {
    //     // do something for small screens
    //     $('.dropdown').hover(function() {
    //         $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown('fast');
    //     }, function() {
    //         $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp('fast');
    //     });

    // } else if ($(window).width() >= 768 && $(window).width() <= 992) {
    //     // do something for medium screens

    // } else if ($(window).width() > 992 && $(window).width() <= 1200) {
    //     // do something for big screens

    // } else {
    //     // do something for huge screens

    // }
    // 
    // 
    $('.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown('fast');
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp('fast');
        });


// var smallNav = {};
//     $('[_s_nav]').hover(function() {//选择所有 具有一个叫 _t_nav 的属性的标签
//         var _nav = $(this).attr('_s_nav');//得到被悬停的这个标签的_t_nav属性的值
//         clearTimeout(smallNav[_nav + '_timer']);//smallNav[women_timer]  //当鼠标进入的时候，离开停止正在执行的动画（正在上拉或下拉的菜单）
//         smallNav[_nav + '_timer'] = setTimeout(function() {  //smallNav[women_timer]
//             $('[_s_nav]').each(function() {//遍历所有 具有一个叫 _t_nav 的属性的标签
//                 $(this)[_nav == $(this).attr('_s_nav') ? 'addClass' : 'removeClass']('nav-up-selected');
//             });
//             $('#' + _nav).stop(true, true).slideDown(200);
//         }, 300);//150毫秒以后执行里面的代码
//     }, function() {//当鼠标离开的时候。。。
//         var _nav = $(this).attr('_s_nav');
//         clearTimeout(smallNav[_nav + '_timer']);//当鼠标离开的时候，离开停止正在执行的动画（正在下来的菜单）
//         smallNav[_nav + '_timer'] = setTimeout(function() {
//             $('[_s_nav]').removeClass('nav-up-selected');//移除“选中”的样式
//             $('#' + _nav).stop(true, true).slideUp(200);
//         }, 300);//150毫秒以后执行里面的代码
//     });
//     
//     

    // $('.dropdown').hover(function() {
            
    //         $('.dropdown-menu', this).stop().slideDown(100);
    //     }, function() {
            
    //         $('.dropdown-menu', this).stop().slideUp(100);
    //     });
})(jQuery);
