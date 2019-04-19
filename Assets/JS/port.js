$(document).ready(function () {
	var nav = $(".ntag");

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(window).height()) {
			nav.addClass("stick");
			nav.removeClass("bg-light");
			nav.removeClass("hov-nav");
		}
		if ($(this).scrollTop() < $(window).height()) {
			nav.removeClass("stick");
			nav.addClass("bg-light");
			nav.addClass("hov-nav");
		}
	});

	$(document).on("scroll", onScroll);
	
	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.stick a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.stick a').removeClass("active");
				currLink.addClass("active");
			} else {
				currLink.removeClass("active");
			}
		});
	};
})