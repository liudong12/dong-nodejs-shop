jQuery(document).ready(function($){
	//open/close mobile-navigation
	$('.cd-dropdown-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});
	//open/close mobile-cart
	$('.mobile-cart-trigger').on('click', function(event){
		event.preventDefault();
		toggleCart();
		// var isOpen = $('.mobile-cart-trigger').attr('data-isOpen');
		// alert("aa");
	});
	//open/close mobile-search
	$('.mobile-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
	});

	//close mobile-navigation
	$('.cd-dropdown .cd-close').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//on mobile - open submenu
	$('.has-children').children('a').on('click', function(event){
		//prevent default clicking on direct children of .has-children 
		event.preventDefault();
		var selected = $(this);
		selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	//submenu items - go back link
	$('.go-back').on('click', function(){
		var selected = $(this),
			visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
		selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
	}); 


	function toggleNav(){

		var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;		
		 //alert(navIsVisible);//没打开是false,要是已经打开了是true
		
		closeOthers( 'toggleNav', navIsVisible );
		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		
		if( !navIsVisible ) {
			$('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}		
	}

	function toggleCart(){
        
		var cartIsVisible = ( !$('.mobile-cart').hasClass('mobile-cart-is-active') ) ? true : false;
		// alert(cartIsVisible);
		
		closeOthers( 'toggleCart', cartIsVisible );
		$('.mobile-cart').toggleClass('mobile-cart-is-active', cartIsVisible);
		$('.mobile-cart-trigger').toggleClass('mobile-cart-is-active', cartIsVisible);
		
		if( !cartIsVisible ) {
			$('.mobile-cart').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}
		
	}

	function toggleSearch(){
        
		var searchIsVisible = ( !$('.mobile-search').hasClass('mobile-search-is-active') ) ? true : false;
		// alert(cartIsVisible);
		
		closeOthers( 'toggleSearch', searchIsVisible );
		$('.mobile-search').toggleClass('mobile-search-is-active', searchIsVisible);
		$('.mobile-search-trigger').toggleClass('mobile-search-is-active', searchIsVisible);
		
		$('.input-search').focus();
		
		if( !searchIsVisible ) {
			$('.mobile-search').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}

		
	}

	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

	function closeOthers( button,IsVisible ) {
		//alert(IsVisible);
		if( button !== 'toggleNav' ) {

			if($('.cd-dropdown').hasClass('dropdown-is-active')){
				$('.cd-dropdown').toggleClass('dropdown-is-active', !IsVisible);
			}

		}

		if( button !== 'toggleCart' ) {
			if($('.mobile-cart').hasClass('mobile-cart-is-active')){
				$('.mobile-cart').toggleClass('mobile-cart-is-active', !IsVisible);
			}

		}

		if( button !== 'toggleSearch' ) {
			if($('.mobile-search').hasClass('mobile-search-is-active')){
				$('.mobile-search').toggleClass('mobile-search-is-active', !IsVisible);
			}

		}

	}

	
	
});