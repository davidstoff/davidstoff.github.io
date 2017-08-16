$(function() {

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: false,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
	});

	$('.popup-with-move-anim1').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: false,
		overflowY: 'auto',
		closeBtnInside: false,
		preloader: false,
		midClick: true,
		removalDelay: 500,
		mainClass: 'my-mfp-slide-bottom',
	});

	$("a[href=#callback]").click(function() {
		$("#callback .formname").val($(this).data("form"));
	});

	$(".arrow-bottom").click(function(){
		$("html, body").animate({scrollTop: $(".main-head").height()+120}, "slow");
		return false;
	});

	$(".to-plan").click(function(){
		$("html, body").animate({scrollTop: $(".main-head").height()+675}, "slow");
		return false;
	});

	$(".to-plan-2").click(function(){
		$("html, body").animate({scrollTop: $(".main-head").height()+1050}, "slow");
		return false;
	});

	$(".to-info").click(function(){
		$("html, body").animate({scrollTop: $(".main-head").height()+120}, "slow");
		return false;
	});

	$(".to-contact").click(function(){
		$("html, body").animate({scrollTop: $(".main-head").height()+3820}, "slow");
		return false;
	});
	
	$('.sl').slick();

	$(".new-item").equalHeights();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass(".visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass(".visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

});


