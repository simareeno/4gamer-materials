$(function() {

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
			var share = $(".share");
			var navigation = $(".navigation");
	    console.log(scroll);

			if (scroll > 810) {
				stick(share);
			} else {
				unStick(share);
			}

			function stick(block) {
				block.css( "position", 'fixed');
			}

			function unStick(block) {
				block.css( "position", '');
			}
	});

	return $(".navigation-wrapper").stick_in_parent();

});

// $(".navigation").stick_in_parent();

// $(function() {
// 	return $(".navigation").stick_in_parent();
// });
