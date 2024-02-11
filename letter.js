$(document).ready(function () {
    $("#messageState").on("change", (x) => {
		$(".message").removeClass("openNor").removeClass("closeNor");
		if ($("#messageState").is(":checked")) {
			$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
			$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
			$(".container").toggleClass("background-image", isChecked);
			console.log("Abrindo");
		} else {
			$(".message").removeClass("no-anim").addClass("closeNor");
			$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
			$(".container").toggleClass("background-image", isChecked);
			console.log("fechando");
		}
	});
	
	$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		if ($(".message").hasClass("closeNor")) {
			$(".message").addClass("closed");
		}
		$(".message").removeClass("openNor closeNor no-anim");
	});
	
	$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		console.log("Animation End");
		if ($(".message").hasClass("openNor") && $(".heart").hasClass("openHer")) {
			$(".heart").addClass("openedHer").addClass("beating");
		}
		else {
			$(".heart").addClass("no-anim").removeClass("beating");
		}
		$(".heart").removeClass("openHer").removeClass("closeHer");
		$(".message").removeClass("no-anim").removeClass("closed");
	});
});