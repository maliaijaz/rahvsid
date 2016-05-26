

$ (function () {
	
	$(window).bind("resize", function() {
		console.log($(this).width())
		if ($(this).width() < 860) {

			$('footer').removeClass('navbar-fixed-bottom')

		}

	})
})