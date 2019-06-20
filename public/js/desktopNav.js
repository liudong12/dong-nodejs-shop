jQuery(document).ready(function() {
	
	var qcloud = {};
	$('[_t_nav]').hover(function() {//选择所有 具有一个叫 _t_nav 的属性的标签
		var _nav = $(this).attr('_t_nav');//得到被悬停的这个标签的_t_nav属性的值
		clearTimeout(qcloud[_nav + '_timer']);//qcloud[women_timer]  //当鼠标进入的时候，离开停止正在执行的动画（正在上拉或下拉的菜单）
		qcloud[_nav + '_timer'] = setTimeout(function() {  //qcloud[women_timer]
			$('[_t_nav]').each(function() {//遍历所有 具有一个叫 _t_nav 的属性的标签
				$(this)[_nav == $(this).attr('_t_nav') ? 'addClass' : 'removeClass']('nav-up-selected');
			});
			$('#' + _nav).stop(true, true).slideDown(200);
		}, 150);//150毫秒以后执行里面的代码
	}, function() {//当鼠标离开的时候。。。
		var _nav = $(this).attr('_t_nav');
		clearTimeout(qcloud[_nav + '_timer']);//当鼠标离开的时候，离开停止正在执行的动画（正在下来的菜单）
		qcloud[_nav + '_timer'] = setTimeout(function() {
			$('[_t_nav]').removeClass('nav-up-selected');//移除“选中”的样式
			$('#' + _nav).stop(true, true).slideUp(200);
		}, 150);//150毫秒以后执行里面的代码
	});
});