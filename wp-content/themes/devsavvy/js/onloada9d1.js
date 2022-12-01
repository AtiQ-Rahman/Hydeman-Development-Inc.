jQuery(function($) {
	// Load 'over' images, if there are any
	$('img[data-over],input:image[data-over]').each(function() {
		var img = new Image();
		img.src = $(this).data('over');
		$(this).attr('data-regular', $(this).attr('src'));
	}).hover(
		function () {
			$(this).attr('src', $(this).data('over'));
		},
		function () {
			$(this).attr('src', $(this).data('regular'));
		}
	);

	// Pop out nav bars
	$('#main-nav-button').click(function () {
		$('#pop-out-nav-wrapper').toggleClass('active');
		$('#wrapper').toggleClass('active');
		$('.pop-out-nav-subitems').removeClass('showSub');
		$('.pop-out-nav-parent-wrapper').removeClass('showSub');
		return false;
	});

	// Pop out nav close button
	$('#pop-out-nav-wrapper #close').click(function () {
		$('#pop-out-nav-wrapper').toggleClass('active');
		$('#wrapper').toggleClass('active');
		$('#pop-out-nav-wrapper .pop-out-nav-subitems').removeClass('showSub');
		$('#pop-out-nav-wrapper .pop-out-nav-parent-wrapper').removeClass('showSub');
		return false;
	});

	// When clicking the overlay, close the pop out nav wrapper
	$('#overlay').click(function () {
		$('#pop-out-nav-wrapper').removeClass('active');
		$('#wrapper').removeClass('active');
		$('.pop-out-nav-subitems').removeClass('showSub');
		$('.pop-out-nav-parent-wrapper').removeClass('showSub');
		return false;
	});

	// Dropdown buttons
	$('#pop-out-nav-wrapper .subnav-dropdown').click(function () {
		if ($(this).parent().hasClass('current')) {
			$(this).parent().removeClass('current');
			$(this).removeClass('current');
		} else {
			$('#pop-out-nav-wrapper .subitems').removeClass('current');
			$('#pop-out-nav-wrapper .subnav-dropdown').removeClass('current');
			$(this).parent().addClass('current');
			$(this).addClass('current');
		}
		return false;
	});

	// Load slider?
	var slider = $(".flexslider");
	if (slider.length > 0) {
		slider.flexslider({
			animation: "slide"
		});
	}
});
