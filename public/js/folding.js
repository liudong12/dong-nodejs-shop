$(document).ready(function(){
		
		$('.folding').on('click',function(){
			var dd = $(this).next();
			
			// If the title is clicked and the dd is not currently animated,
			// start an animation with the slideToggle() method.
			
			if(!dd.is(':animated')){
				dd.slideToggle();
				$(this).toggleClass('opened');
			}
			
		});
		
		$('a.button').click(function(){
			
			// To expand/collapse all of the FAQs simultaneously,
			// just trigger the click event on the DTs
			
			if($(this).hasClass('collapse')){
				$('dt.opened').click();
			}
			else $('dt:not(.opened)').click();
			
			$(this).toggleClass('expand collapse');
			
			return false;
		});
});