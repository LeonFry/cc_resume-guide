$(document).ready(function(){
	$("#button_continue-1").click(function(){
		$("#prompt-1_bullet-1").addClass("prompt-bullet_inactive");
		$("#prompt-1_bullet-2").delay(300).queue('fx', function() {
			$(this).addClass("prompt-bullet_inactive")
		});
		$("#prompt-1_bullet-3").delay(600).queue('fx', function() {
			$(this).addClass("prompt-bullet_inactive")
		});
		$("#prompt-1").delay(900).fadeOut();
		$("#prompt-2").delay(1200).fadeIn();
		$("#prompt-2_bullet-1").delay(1500).queue('fx', function() {
			$(this).removeClass("prompt-bullet_inactive")
		});
		$("#prompt-2_bullet-2").delay(1800).queue('fx', function() {
			$(this).removeClass("prompt-bullet_inactive")
		});
		$("#prompt-2_bullet-3").delay(2100).queue('fx', function() {
			$(this).removeClass("prompt-bullet_inactive")
		});
		$("#prompt-2_bullet-4").delay(2400).queue('fx', function() {
			$(this).removeClass("prompt-bullet_inactive")
		});
	});
	$("#button_continue-2").click(function(){
		$("#button_next").removeClass("side-nav_button_inactive");
		$("#button_tip").removeClass("side-nav_button_inactive");
		$("#prompt-2_bullet-1").addClass("prompt-bullet_inactive");
		setTimeout(function(){
			$("#prompt-2_bullet-2").addClass("prompt-bullet_inactive");
		}, 300);
		setTimeout(function(){
			$("#prompt-2_bullet-3").addClass("prompt-bullet_inactive");
		}, 600);
		setTimeout(function(){
			$("#prompt-2_bullet-4").addClass("prompt-bullet_inactive");
		}, 900);
		$("#prompt-2").delay(1200).fadeOut();
		$("#section-1").addClass("highlight-left");
		$("#section-1_controls").delay(1200).fadeIn();
		$("#prompt-3").delay(1500).fadeIn();
		setTimeout(function(){
			$("#prompt-3_bullet-1").removeClass("prompt-bullet_inactive");
		}, 1800);
		setTimeout(function(){
			$("#prompt-3_bullet-2").removeClass("prompt-bullet_inactive");
		}, 2100);
		setTimeout(function(){
			$("#prompt-3_bullet-3").removeClass("prompt-bullet_inactive");
		}, 2400);

	});
	$("#section-1_next-button").click(function(){
		$("#section-1").removeClass("highlight-left");
		$("#section-1_controls").delay(300).fadeOut();
		$("#section-2").addClass("highlight-right");
		$("#section-2_controls").delay(900).fadeIn();
		setTimeout(function(){
			$("#prompt-3_bullet-1").addClass("prompt-bullet_inactive");
		}, 300);
		setTimeout(function(){
			$("#prompt-3_bullet-2").addClass("prompt-bullet_inactive");
		}, 600);
		setTimeout(function(){
			$("#prompt-3_bullet-3").addClass("prompt-bullet_inactive");
		}, 900);
		$("#prompt-3").delay(1200).fadeOut();
	});

	$("#section-2_back-button").click(function(){
		$("#section-1").addClass("highlight-left");
		$("#section-1_controls").delay(600).fadeIn();
		$("#section-2").removeClass("highlight-right");
		$("#section-2_controls").delay(300).fadeOut();
		$("#prompt-3").delay(300).fadeIn();
		setTimeout(function(){
			$("#prompt-3_bullet-1").removeClass("prompt-bullet_inactive");
		}, 300);
		setTimeout(function(){
			$("#prompt-3_bullet-2").removeClass("prompt-bullet_inactive");
		}, 600);
		setTimeout(function(){
			$("#prompt-3_bullet-3").removeClass("prompt-bullet_inactive");
		}, 900);
	});

	$("#section-2_next-button").click(function(){
		$("#section-2_controls").delay(300).fadeOut();
		setTimeout(function(){
			$("#section-2").removeClass("highlight-right");
		}, 600);
		$("#section-3_controls").delay(600).fadeIn();
		$("#prompt-4").delay(600).fadeIn();
		setTimeout(function(){
			$("#prompt-4_bullet-1").removeClass("prompt-bullet_inactive");
		}, 600);
		setTimeout(function(){
			$("#section-3").addClass("highlight-left");
		}, 300);
	});

	$("#section-3_back-button").click(function(){
		$("#prompt-4_bullet-1").addClass("prompt-bullet_inactive");
		$("#section-2").addClass("highlight-right");
		$("#section-2_controls").delay(300).fadeIn();
		$("#section-3").removeClass("highlight-left");
		$("#section-3_controls").delay(300).fadeOut();
		$("#prompt-4").delay(600).fadeOut();
	});

	$("#section-3_next-button").click(function(){
		$("#section-3_controls").fadeOut();
		setTimeout(function(){
			$("#section-3").removeClass("highlight-left");
		}, 300);
		setTimeout(function(){
			$("#prompt-4_bullet-1").addClass("prompt-bullet_inactive");
		}, 600);
		$("#prompt-4").delay(900).fadeOut()
		$("#prompt-5").delay(1200).fadeIn();
		setTimeout(function(){
			$("#prompt-5_bullet-1").removeClass("prompt-bullet_inactive");
		}, 1500);
	});

	$("#button_continue-end").click(function(){
		location.reload()
	});
});