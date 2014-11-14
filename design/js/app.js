$(function () {
	//$('#accordion .item .item-title').click().filter(':not(:first)').hide();

	$('#accordion .item .item-title').click(function () {
		var item = $(this).parent();

		if(item.hasClass('active')){
			item.find('.item-content').slideUp('250',function(){
				item.removeClass('active');
			});
		}else{
			if($('#accordion .active').length !== 0){
				$('#accordion .active .item-content').slideUp('250',function(){
					$(this).parent().removeClass('active');
					item.find('.item-content').slideDown('250',function(){
						item.addClass('active');
					});
				});
			}else{
				item.find('.item-content').slideDown('250',function(){
					item.addClass('active');
				});
			}	
		}
	});

	$('.toggle-section .toggle-button').click(function(e){
		e.preventDefault();
		var section = $(this).parents('.toggle-section');
		if(section.hasClass('active')){
			section.find('.toggle-content').slideUp('250',function(){
				section.removeClass('active');
			});
		}else{
			section.find('.toggle-content').slideDown('250',function(){
				section.addClass('active');
			});
		}
	})

	$('.case-item .image').click(function(e){
		e.preventDefault();
	    $.fancybox.showLoading();
	    $.ajax({
	      url : this.href,
	      success: function(data) {
	        $.fancybox({
	          content: data,
	          fitToView : true,
	          autoSize  : true,
	          closeClick  : false,
	          openEffect  : 'fade',
	          closeEffect : 'fade',
	          padding: 0,
	          helpers : {
	            overlay : {
	              opacity: 0.4,
	              locked: true
	            }
	          }
	        });
	      }
	    });
	});

	/******** FILTER ********/
	$('.select-filter .selected').click(function(){
		var filterContent = $(this).next();
		if(filterContent.is(':visible')){
			filterContent.slideUp('250');
		}else{
			filterContent.slideDown('250');
		}
	});
	$('.select-filter li').click(function(){
		var filterContainer = $(this).closest('.select-filter');
		filterContainer.find('li').removeClass('active');
		var input = filterContainer.find('.selected');
		var selected = $(this).text();
		$(this).addClass('active');
		//set text to input
		input.text(selected);
		//run fulter
		portfolioFilter(selected);
	});
});

function portfolioFilter(category){
	console.log(category);
}